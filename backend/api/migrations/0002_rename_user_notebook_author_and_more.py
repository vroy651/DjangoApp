# Generated by Django 5.1 on 2024-09-03 18:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0001_initial"),
    ]

    operations = [
        migrations.RenameField(
            model_name="notebook",
            old_name="user",
            new_name="author",
        ),
        migrations.RemoveField(
            model_name="notebook",
            name="updated_at",
        ),
    ]
