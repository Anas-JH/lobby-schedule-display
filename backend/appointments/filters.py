import django_filters
from .models import Appointment

class AppointmentFilter(django_filters.FilterSet):
    appointment_date = django_filters.DateFilter(field_name='appointment_datetime', lookup_expr='date')
    class Meta:
        model = Appointment
        fields = {
            'status': ['exact'],
            'provider_name': ['exact', 'icontains'],
            'room_location': ['exact', 'icontains'],
        }