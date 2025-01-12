school_id
# Generated by Django 3.0.3 on 2020-03-04 19:33

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=30)),
                ('course', models.CharField(max_length=30)),
                ('file', models.FileField(upload_to='uploads/book')),
                ('text', models.TextField()),
            ],
            options={
                'verbose_name': 'ספרים ווידיאו',
                'verbose_name_plural': 'ספרים ווידיאו',
            },
        ),
        migrations.CreateModel(
            name='Cal',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
            options={
                'verbose_name': 'מערכת שעות',
                'verbose_name_plural': 'מערכת שעות',
            },
        ),
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=30)),
                ('course', models.CharField(max_length=30)),
            ],
            options={
                'verbose_name': 'קורס',
                'verbose_name_plural': 'קורסים',
            },
        ),
        migrations.CreateModel(
            name='Gallery',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=30)),
                ('school', models.CharField(max_length=30)),
                ('image', models.ImageField(upload_to='uploads/gallery')),
            ],
            options={
                'verbose_name': 'גלריה',
                'verbose_name_plural': 'גלריה',
            },
        ),
        migrations.CreateModel(
            name='Klas',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name_class', models.CharField(max_length=1)),
                ('number_class', models.PositiveIntegerField(validators=[django.core.validators.MaxValueValidator(10)])),
                ('min_students', models.PositiveIntegerField(validators=[django.core.validators.MaxValueValidator(99)])),
                ('max_students', models.PositiveIntegerField(validators=[django.core.validators.MaxValueValidator(99)])),
            ],
            options={
                'verbose_name': 'כיתה',
                'verbose_name_plural': 'כיתות',
            },
        ),
        migrations.CreateModel(
            name='School',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('years_studies', models.PositiveIntegerField(validators=[django.core.validators.MaxValueValidator(2099)])),
                ('id_school', models.PositiveIntegerField(validators=[django.core.validators.MaxValueValidator(999999)])),
                ('name', models.CharField(max_length=30)),
                ('school_type', models.CharField(max_length=20)),
                ('type_education', models.CharField(max_length=5)),
                ('education_phase', models.CharField(max_length=20)),
                ('city', models.CharField(max_length=20)),
                ('address_school', models.CharField(max_length=40)),
                ('phone', models.CharField(max_length=11)),
                ('email', models.CharField(max_length=30)),
                ('fax', models.CharField(max_length=11)),
                ('facebook', models.CharField(max_length=50)),
                ('instagram', models.CharField(max_length=50)),
                ('image', models.ImageField(upload_to='uploads/')),
            ],
            options={
                'verbose_name': 'מוסד לימוד',
                'verbose_name_plural': 'מוסדות לימוד',
            },
        ),
        migrations.CreateModel(
            name='Teacher',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('id_number', models.DateTimeField(auto_now=True)),
                ('first_name', models.CharField(max_length=30)),
                ('last_name', models.CharField(max_length=30)),
                ('phone', models.CharField(max_length=30)),
                ('email', models.CharField(max_length=30)),
                ('photo', models.CharField(max_length=30)),
                ('facebook', models.CharField(max_length=30)),
                ('instagram', models.CharField(max_length=150)),
                ('gender', models.CharField(choices=[('1', 'נקבה'), ('2', 'זכר')], max_length=200)),
                ('birth_date', models.CharField(max_length=30)),
                ('address', models.CharField(max_length=30)),
                ('klass', models.PositiveIntegerField(validators=[django.core.validators.MaxValueValidator(99)])),
                ('image', models.ImageField(upload_to='teachers/')),
            ],
            options={
                'verbose_name': 'מורה',
                'verbose_name_plural': 'מורים',
            },
        ),
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('id_number', models.PositiveIntegerField(validators=[django.core.validators.MaxValueValidator(999999)])),
                ('first_name', models.CharField(max_length=20)),
                ('last_name', models.CharField(max_length=24)),
                ('date_of_birth', models.DateField()),
                ('gender', models.CharField(choices=[('1', 'נקבה'), ('2', 'זכר')], max_length=200)),
                ('registration_start_date', models.DateField()),
                ('registration_end_date', models.DateField()),
                ('country_birth', models.CharField(max_length=20)),
                ('image', models.ImageField(upload_to='students/')),
                ('school', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='school', to='school.School')),
            ],
            options={
                'verbose_name': 'תלמיד',
                'verbose_name_plural': 'תלמידים',
            },
        ),
    ]
