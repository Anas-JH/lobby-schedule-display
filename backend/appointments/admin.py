from django.contrib import admin
from .models import Appointment # Import your Appointment model

class AppointmentAdmin(admin.ModelAdmin):
    list_display = ('title', 'client_name', 'provider_name', 'appointment_datetime', 'room_location', 'status', 'duration_minutes')
    list_filter = ('status', 'appointment_datetime', 'provider_name', 'room_location')
    search_fields = ('title', 'client_name', 'provider_name', 'notes')
    date_hierarchy = 'appointment_datetime'

admin.site.register(Appointment, AppointmentAdmin)