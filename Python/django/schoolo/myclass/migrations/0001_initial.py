# Generated by Django 3.0.2 on 2020-02-03 21:55

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='MyClass',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name_class', models.CharField(default='SOME STRING', max_length=200)),
                ('number_class', models.TextField(null=True)),
                ('added_at', models.DateTimeField(auto_now=True)),
                ('messages_class', models.TextField()),
            ],
        ),
    ]
