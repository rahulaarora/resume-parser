# Generated by Django 4.1.3 on 2022-11-26 14:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('parser_app', '0011_auto_20191022_1356'),
    ]

    operations = [
        migrations.AddField(
            model_name='resume',
            name='fileName',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='resume',
            name='resume',
            field=models.FileField(upload_to='', verbose_name='Upload Resumes'),
        ),
    ]
