# Generated by Django 3.0.3 on 2020-02-13 16:13

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('schools', '0002_remove_schools_reporting'),
    ]

    operations = [
        migrations.AddField(
            model_name='schools',
            name='reporting',
            field=models.PositiveIntegerField(default=0, validators=[django.core.validators.MaxValueValidator(2)]),
            preserve_default=False,
        ),
    ]
