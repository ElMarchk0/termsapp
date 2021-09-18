from django.db import models

class Term(models.Model):
  name = models.CharField(max_length=200)
  origin = models.CharField(max_length=200, null=True)
  description = models.TextField()
  id = models.IntegerField(primary_key=True)
  created = models.DateTimeField(auto_now_add=True)
  updated = models.DateTimeField(auto_now=True)
  
  def __str__(self):
    return self.name
