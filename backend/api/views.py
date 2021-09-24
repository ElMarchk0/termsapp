# from django.shortcuts import render

# from rest_framework.response import Response
# from rest_framework.decorators import api_view
# from rest_framework import status

from rest_framework import viewsets

from .models import Term
from .serializers import *

class TermViewSet(viewsets.ModelViewSet):
  queryset = Term.objects.all()
  serializer_class = TermSerializer

# @api_view(['GET', 'POST'])
# def terms_list(request): 
#   if request.method == 'GET':
#     data = Term.objects.all()
    
#     serializer = TermSerializer(data, context={'request': request}, many=True)
    
#     return Response(serializer.data)
  
#   elif request.method == 'POST': 
#     serializer = TermSerializer(data=request.data)
#     if serializer.is_valid():
#       serializer.save()
#       return Response(status=status.HTTP_201_CREATED)
    
#     return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)
  
# @api_view(['GET','POST', 'PUT', 'DELETE'])
# def term_detail(request, id): 
#   try: 
#     term = Term.objects.get(id=id)
#   except Term.DoesNotExist:
#     return Response(status=status.HTTP_404_NOT_FOUND)
  
#   if request.method == 'PUT': 
#     serializer = TermSerializer(term, data=request.data, context={'request': request})
#     if serializer.is_valid(): 
#       serializer.is_valid()
#       return Response(status=status.HTTP_204_NO_CONTENT)
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)