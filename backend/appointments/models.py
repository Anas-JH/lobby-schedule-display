from django.db import models
from django.utils import timezone

class Appointment(models.Model):
    title = models.CharField(max_length=200)
    client_name = models.CharField(max_length=100, blank=True, null=True) # Optional
    provider_name = models.CharField(max_length=100, blank=True, null=True) # e.g., Doctor, Stylist, Trainer
    room_location = models.CharField(max_length=50, blank=True, null=True) # e.g., Room 101, Station 3
    appointment_datetime = models.DateTimeField(default=timezone.now)
    duration_minutes = models.IntegerField(default=30) # Duration in minutes
    notes = models.TextField(blank=True, null=True) # Any additional notes
    
    # Status choices - you can expand these
    STATUS_CHOICES = [
        ('SCH', 'Scheduled'),
        ('CNF', 'Confirmed'),
        ('ARR', 'Arrived'),
        ('PRO', 'In Progress'),
        ('CMP', 'Completed'),
        ('DEL', 'Delayed'),
        ('CAN', 'Cancelled'),
        ('NOS', 'No Show'),
    ]
    status = models.CharField(
        max_length=3,
        choices=STATUS_CHOICES,
        default='SCH',
    )
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.title} at {self.appointment_datetime.strftime('%Y-%m-%d %H:%M')}"

    class Meta:
        ordering = ['appointment_datetime'] # Default order when querying
