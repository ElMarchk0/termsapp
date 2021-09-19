from django.db import models
import uuid


class Term(models.Model):
  name = models.CharField(max_length=200, unique=True)
  source = models.CharField(max_length=200, null=True)
  body = models.TextField(null=True)
  id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, max_length=6 )
  created = models.DateTimeField(auto_now_add=True)
  updated = models.DateTimeField(auto_now=True)
  
  def __str__(self):
    return self.name
