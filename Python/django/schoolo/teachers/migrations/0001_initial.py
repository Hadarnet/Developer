# Generated by Django 3.0.3 on 2020-02-12 19:47

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Teachers',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('school', models.CharField(max_length=30)),
                ('first_name', models.CharField(max_length=30)),
                ('last_name', models.CharField(max_length=30)),
                ('phone', models.CharField(max_length=30)),
                ('email', models.CharField(max_length=30)),
                ('photo', models.CharField(max_length=30)),
                ('facebook', models.CharField(max_length=30)),
                ('instagram', models.CharField(max_length=150)),
                ('gender', models.CharField(max_length=30)),
                ('blood_group', models.CharField(max_length=30)),
                ('birth_date', models.CharField(max_length=30)),
                ('address', models.CharField(max_length=30)),
                ('zehut_Mispar', models.DateTimeField(auto_now=True)),
                ('Sug_zehut', models.DateTimeField(auto_now=True)),
                ('Code_Tafkid_bamosad', models.DateTimeField(auto_now=True)),
                ('Teur_Tafkid_bamosad', models.TextField()),
                ('Tafkid_taarich_hatchala', models.CharField(max_length=150)),
                ('Tafkid_taarich_siyum', models.CharField(max_length=150)),
                ('shichva', models.CharField(max_length=150)),
                ('makbila', models.CharField(max_length=150)),
            ],
            options={
                'verbose_name': 'מורה',
                'verbose_name_plural': 'מורים',
            },
        ),
    ]
