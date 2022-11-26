from django.db import models
from django import forms
from django.forms import ClearableFileInput

# for deleting media files after record is deleted
from django.db.models.signals import post_delete
from django.dispatch import receiver

class Resume(models.Model):
    fileName = models.CharField(max_length=1000, null=True, blank=True)