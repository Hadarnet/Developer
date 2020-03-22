from django.db import models


class Expense(models.Model):
    date = models.DateField()
    amount = models.DecimalField(decimal_places=2, max_digits=12)
    title = models.CharField(max_length=200)
    description = models.TextField()

    def __str__(self):
        return f"[#{self.id}] ${self.amount}@{self.date}: {self.title}"
