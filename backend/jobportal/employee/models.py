from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class candidate(models.Model):
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)
    

    def __str__(self):
        return self.email
 
class EmployerProfile(models.Model):
    GENDER_CHOICES = [
        ('Male', 'Male'),
        ('Female', 'Female'),
        ('Other', 'Other'),
    ]
    
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    gender = models.CharField(max_length=6, choices=GENDER_CHOICES)
    date_of_birth = models.DateField()
    email_address = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15)
    address = models.TextField()
    nationality = models.CharField(max_length=100)
    resume = models.FileField(upload_to='resumes/')
    candidate_photo = models.ImageField(upload_to='photos/')

    def __str__(self):
        return f'{self.first_name} {self.last_name}'