from rest_framework import serializers
from .models import Employer, Job_Post

class EmployerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employer
        fields = '__all__' 
        
 

class JobPostSerializer(serializers.ModelSerializer):
    company_logo = serializers.ImageField(required=False)  
    class Meta:
        model=Job_Post
        fields="__all__"

# serializers.py

class LogoutResponseSerializer(serializers.Serializer):
    message = serializers.CharField(max_length=255)
    error = serializers.CharField(max_length=255, required=False)
