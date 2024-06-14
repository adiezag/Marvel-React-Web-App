# Generated by Django 5.0.6 on 2024-06-13 15:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_character_created_at'),
    ]

    operations = [
        migrations.AddField(
            model_name='character',
            name='char_description',
            field=models.CharField(default='hero', max_length=200),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='character',
            name='char_name',
            field=models.CharField(default='hero', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='character',
            name='char_url',
            field=models.CharField(default='hero', max_length=200),
            preserve_default=False,
        ),
    ]