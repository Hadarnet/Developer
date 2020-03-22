import logging
import random
import telegram
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import CommandHandler, CallbackContext, MessageHandler, \
    Filters, Updater, ConversationHandler, CallbackQueryHandler
import model
import secrets

WELCOME = "✈ ברוך הבא לבוט התירות ארמדילו! ✈ \n\n חפש את הטיסה הכי זולה "

logging.basicConfig(
    format='[%(levelname)s %(asctime)s %(module)s:%(lineno)d] %(message)s',
    level=logging.INFO)

logger = logging.getLogger(__name__)


# chats = model.get_mongo_storage("shopping_bot_prod")


def start(update: Update, context: CallbackContext):
    chat_id = update.effective_chat.id
    logger.info(f"> התחל לחפש #{chat_id}")
    keyboard = [[InlineKeyboardButton("בחר יעד",
                                      callback_data='destination'),
                 InlineKeyboardButton("הטיסה הזולה ביותר",
                                      callback_data='cheapest')
                 ]]

    reply_markup = InlineKeyboardMarkup(keyboard)
    context.bot.send_message(chat_id=chat_id,
                             text=WELCOME,
                             reply_markup=reply_markup)


def button(update: Update, context: CallbackContext):
    chat_id = update.effective_chat.id
    query = update.callback_query
    data = query.data

    if data == 'cheapest':
        handle_cheapest(context, chat_id)
    elif data in model.COMMON_DESTINATIONS:
        handle_cheapest_location(update, context, chat_id, data)
    elif data == "destination":
        handle_destination(context, chat_id)


def handle_cheapest(context, chat_id):
    response = model.cheapest()
    # text = "".join(random.choices(model.COMMON_DESTINATIONS, k=1))
    keyboard = [[InlineKeyboardButton("בחר תאריך",
                                      callback_data='date'),
                 InlineKeyboardButton("בחר יעד",
                                      callback_data='destination')]]

    reply_markup = InlineKeyboardMarkup(keyboard)
    context.bot.send_message(chat_id=chat_id, text=response,
                             parse_mode="html",
                             disable_web_page_preview=True,
                             reply_markup=reply_markup)


def handle_destination(context, chat_id):
    response = "בחר מיקום מלמטה, או הקלד משלך"
    text = "".join(random.choices(model.COMMON_DESTINATIONS, k=1))
    # for i in range(len(model.COMMON_DESTINATIONS)):
    #     city = model.COMMON_DESTINATIONS[i]
    keyboard = []
    n = len(model.COMMON_DESTINATIONS) // 3
    for i in range(n):
        line = []
        for j in range(1, n + 1):
            line.append(InlineKeyboardButton(
                f"{model.COMMON_DESTINATIONS[i * n + j - 1]}",
                callback_data=f"{model.COMMON_DESTINATIONS[i * n + j - 1]}"))
        keyboard.append(line)

    keyboard.append([InlineKeyboardButton("בחר תאריך",
                                          callback_data='date')])
    reply_markup = InlineKeyboardMarkup(keyboard)
    context.bot.send_message(chat_id=chat_id, text=response,
                             parse_mode="html",
                             disable_web_page_preview=True,
                             reply_markup=reply_markup)


def handle_cheapest_location(update, context, chat_id, location):
    response = model.cheapest_location(location) or 'לא נמצא מידע'

    keyboard = [[InlineKeyboardButton("בחר תאריך",
                                      callback_data='date'),
                 InlineKeyboardButton('שנה יעד',
                                      callback_data='destination')]]

    reply_markup = InlineKeyboardMarkup(keyboard)
    context.bot.send_message(chat_id=chat_id,
                             text=response,
                             parse_mode="html",
                             disable_web_page_preview=True,
                             reply_markup=reply_markup)


def respond(update: Update, context: CallbackContext):
    chat_id = update.effective_chat.id
    text = update.message.text
    logger.info(f"= Got on chat #{chat_id}: {text!r}")
    response = ''
    if text == "find the cheapest":
        response = model.cheapest()
    elif text.isalpha():
        response = model.cheapest_location(text)
    elif text.isdate:
        pass
    context.bot.send_message(chat_id=update.message.chat_id, text=response,
                             parse_mode="html", disable_web_page_preview=True)


def main():
    updater = Updater(token=secrets.BOT_TOKEN, use_context=True)
    dispatcher = updater.dispatcher

    start_handler = CommandHandler('start', start)
    dispatcher.add_handler(start_handler)

    updater.dispatcher.add_handler(CallbackQueryHandler(button))

    echo_handler = MessageHandler(Filters.text, respond)
    dispatcher.add_handler(echo_handler)

    logger.info("* Start polling...")
    updater.start_polling()  # Starts polling in a background thread.
    updater.idle()  # Wait until Ctrl+C is pressed
    logger.info("* Bye!")


if __name__ == '__main__':
    main()
