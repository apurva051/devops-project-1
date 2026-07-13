from django.urls import path, include
from django.http import HttpResponse

def home(request):
    return HttpResponse("""
    <html>
        <head>
            <title>Device Management System</title>
        </head>
        <body style="font-family: Arial; text-align:center; margin-top:80px;">
            <h1>Welcome to the Device Management System</h1>
            <p>Select one of the links below:</p>

            <p>
                <a href="http://135.235.140.0:3000/devices">
                    Open Device Management Website
                </a>
            </p>

            <p>
                <a href="http://135.235.140.0:8000/api/">
                    View REST API
                </a>
            </p>
        </body>
    </html>
    """)

urlpatterns = [
    path('', home),
    path('api/', include('devices.urls')),
]
