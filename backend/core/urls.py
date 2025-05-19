from django.contrib import admin
from django.urls import path, include  # Make sure 'include' is imported here

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('appointments.urls')), # This line directs 'api/' prefixed URLs to your app
]