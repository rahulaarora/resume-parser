# Generated by Django 2.1.4 on 2018-12-30 02:56

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('parser_app', '0006_auto_20181229_1447'),
    ]

    operations = [
        migrations.AddField(
            model_name='resume',
            name='uploaded_on',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now, verbose_name='Uploaded On'),
            preserve_default=False,
        ),
    ]
