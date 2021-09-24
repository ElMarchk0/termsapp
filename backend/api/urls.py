from rest_framework import routers
from .views import TermViewSet

router = routers.DefaultRouter()
router.register('terms', TermViewSet, 'terms')

urlpatterns = router.urls

# from django.urls import path 
# from .views import *
# from django.conf.urls import url

# urlpatterns = [
#     path('api/terms', terms_list),
#     path('api/terms/<int:id>', term_detail),
# ]