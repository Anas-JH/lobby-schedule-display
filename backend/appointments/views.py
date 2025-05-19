from rest_framework import viewsets, permissions, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Appointment
from .serializers import AppointmentSerializer
from .filters import AppointmentFilter

class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
    permission_classes = [permissions.AllowAny]
    
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    filterset_class = AppointmentFilter

    search_fields = ['title', 'client_name', 'notes']
    ordering_fields = ['appointment_datetime', 'status', 'provider_name']
    ordering = ['appointment_datetime']
