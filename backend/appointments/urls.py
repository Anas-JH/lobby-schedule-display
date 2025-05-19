from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AppointmentViewSet

#Created a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'appointments', AppointmentViewSet, basename='appointment')

urlpatterns = [
    path('', include(router.urls)),
]