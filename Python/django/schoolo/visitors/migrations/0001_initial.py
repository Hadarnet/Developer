# Generated by Django 3.0.3 on 2020-02-12 19:47

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Visitors',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('school', models.CharField(max_length=30)),
                ('first_name', models.CharField(max_length=30)),
                ('last_name', models.CharField(max_length=30)),
                ('phone', models.CharField(max_length=30)),
                ('to_meet_user_type', models.DateTimeField(auto_now=True)),
                ('to_meet_user', models.DateTimeField(auto_now=True)),
                ('reason', models.TextField()),
                ('note', models.CharField(default='Not Set', max_length=150)),
            ],
            options={
                'verbose_name': 'מבקר',
                'verbose_name_plural': 'מבקרים',
            },
        ),
    ]