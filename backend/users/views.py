from django.shortcuts import render

from django.views.decorators.csrf import csrf_exempt, csrf_protect

from rest_auth.views import (LoginView, LogoutView, PasswordChangeView)
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
# Create your views here.

@csrf_exempt 
@csrf_protect
class APILogoutView(LogoutView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

class APILoginView(LoginView):
    pass
  
class APIPasswordUpdateView(PasswordChangeView):
    authentication_classes = [TokenAuthentication]