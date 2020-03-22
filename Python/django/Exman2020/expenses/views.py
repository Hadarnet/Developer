import random

from django.shortcuts import render
import random
from expenses.models import Expense


def expense_list(request, items=None):
    items = ['milk', 'cookies', 'bread', 'butter', 'coffee']
    random.shuffle(items)

    num_list = [x ** 2 for x in range(0,10)]

    return render(request, "expenses/expense_list.html", {

        'shop_list': items,
        'num_list': num_list
    })

# def expense_list(request):
#     qs = Expense.objects.order_by('-date')[:20]
#     s = "<p>EXPENSES: a&lt;b&gt;c</p>"
#     s += "<ul>\n"
#     for o in qs:
#         # ESCAPING
#         v = str(o).replace("&", "&amp;").replace("<", "&lt;").replace(">",
#                                                                       "&gt;")
#         s += f"  <li>{v}</li>\n"
#     s += "</ul>\n"
#     return HttpResponse(s)
