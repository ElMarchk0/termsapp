from rest_framework import routers
from .views import TermViewSet

router = routers.DefaultRouter()
router.register('terms', TermViewSet, 'terms')

urlpatterns = router.urls