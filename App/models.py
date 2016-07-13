from django.db import models

class Colores(models.Model):
    name = models.CharField(max_length=50, blank=False, null=False)
    description = models.CharField(max_length=50, blank=False, null=False)
    hexadecimal = models.CharField(max_length=50, blank=False, null=False)
    red = models.PositiveSmallIntegerField(null=False)
    green = models.PositiveSmallIntegerField(null=False)
    blue = models.PositiveSmallIntegerField(null=False)

    def __str__(self):
        return self.name
