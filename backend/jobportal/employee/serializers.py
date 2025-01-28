from rest_framework import serializers
from .models import candidate,EmployerProfile


       
class candidateSerializer(serializers.ModelSerializer):
    class Meta:
        model = candidate
        fields = '__all__'  # Add all relevant fields

class EmployerProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmployerProfile
        fields = '__all__'

    def validate_email_address(self, value):
        """Ensure that email address is valid and unique"""
        if EmployerProfile.objects.filter(email_address=value).exists():
            raise serializers.ValidationError("Email address is already taken.")
        return value

    def validate_phone_number(self, value):
        """Ensure that the phone number is valid"""
        if not value.isdigit():
            raise serializers.ValidationError("Phone number must contain only digits.")
        return value