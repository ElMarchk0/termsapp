from rest_framework import viewsets

from .models import Term
from .serializers import *

class TermViewSet(viewsets.ModelViewSet):
  queryset = Term.objects.all()
  serializer_class = TermSerializer

