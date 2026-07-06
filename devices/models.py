from django.db import models

class Device(models.Model):
    device_name = models.CharField(max_length=100)
    device_ip = models.GenericIPAddressField()
    device_type = models.CharField(max_length=100)

    def __str__(self):
        return self.device_name