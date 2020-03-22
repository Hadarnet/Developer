from django.core.management.base import BaseCommand
from facts.crawler import get_all_data


class Command(BaseCommand):
    help = 'Command to crawl'

    def handle(self, *args, **options):
        get_all_data()