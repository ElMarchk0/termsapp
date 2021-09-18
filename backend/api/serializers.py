from rest_framework import serializers
from api.models import Term

class TermSerializer(serializers.ModelSerializer):
  class Meta:
    model = Term
    fields = ['id', 'name', 'description', 'created', 'origin', 'updated']