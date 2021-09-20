from django.db import models
from uuid import uuid4
import datetime

def create_id():
    now = datetime.datetime.now()
    return str(now.year)+str(now.month)+str(uuid4())[:4]

class Term(models.Model):
  name = models.CharField(max_length=200, unique=True)
  source = models.CharField(max_length=200, null=True)
  body = models.TextField(null=True)
  id = models.CharField(primary_key=True,max_length=200, default=create_id, editable=False)
  created = models.DateTimeField(auto_now_add=True)
  updated = models.DateTimeField(auto_now=True)
  
  def __str__(self):
    return self.name
