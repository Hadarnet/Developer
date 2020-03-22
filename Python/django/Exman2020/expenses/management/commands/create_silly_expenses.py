from django.core.management.base import BaseCommand
import silly
import random

from expenses.models import Expense


class Command(BaseCommand):
    help = "Create some silly expensese"

    def add_arguments(self, parser):
        parser.add_argument('n', type=int)

    def handle(self, n, *args, **options):
        for i in range(n):
            o = Expense(amount=random.uniform(7, 950), title=silly.title(),
                        description=silly.paragraph(), date=silly.datetime())
            o.save()
