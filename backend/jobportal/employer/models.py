from django.db import models
from django.contrib.auth.models import User


class Employer(models.Model):
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)
    

    def __str__(self):
        return self.email


class Job_Post(models.Model):
    company_name = models.CharField(max_length=255)
    company_logo = models.ImageField(upload_to='logos/')
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    country_code = models.CharField(max_length=12)
    phone_no = models.CharField(max_length=20)
    job_title = models.CharField(max_length=100)
    no_of_vacancies = models.IntegerField()
    job_location_type = models.CharField(max_length=50)
    location = models.CharField(max_length=255)
    job_type = models.CharField(max_length=50)
    experience = models.CharField(max_length=50)
    pay_and_benefits = models.TextField()
    benefits = models.TextField()
    job_description = models.TextField()
    date_posted =models.DateField(null=True, blank=True)
    email=models.EmailField(null=True, blank=True)
    JOB_STATUS_CHOICES = [
        ('Open', 'Open'),
        ('Closed', 'Closed'),
        ('Paused', 'Paused'),
    ]
    job_status = models.CharField(
        max_length=20,
        choices=JOB_STATUS_CHOICES,
        default='Open',  # Default value
    )

    def __str__(self):
        return self.job_title
    

class Subscription(models.Model):
    PLAN_CHOICES = [
        ('monthly', 'Monthly'),
        ('threeMonths', '3 Months'),
        ('annual', 'Annual'),
    ]
    plan = models.CharField(max_length=20, choices=PLAN_CHOICES)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    card_number = models.CharField(max_length=16)
    card_expiration = models.CharField(max_length=5)  # MM/YY format
    cvv = models.CharField(max_length=3)
    postal_code = models.CharField(max_length=10)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.plan}"

class UserLogoutLog(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    logout_time = models.DateTimeField(auto_now_add=True)
    ip_address = models.GenericIPAddressField(null=True, blank=True)
    
    def __str__(self):
        return f"User: {self.user.username} logged out at {self.logout_time}"