from rest_framework import status, permissions, generics 
from rest_framework.response import Response 
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from django.http import JsonResponse
from .models import candidate,EmployerProfile
from .serializers import candidateSerializer,EmployerProfileSerializer



class CandidateRegisterView(generics.CreateAPIView):
    queryset = candidate.objects.all()
    serializer_class = candidateSerializer

    def create(self, request, *args, **kwargs):
        email = request.data.get("email")
        
        # Check if the email already exists
        if candidate.objects.filter(email=email).exists():
            return Response(
                {"error": "This email is already registered."},
                status=status.HTTP_400_BAD_REQUEST
            )
        else:
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)
            return Response(
                {"message": "Recruiter registered successfully!"},
            status=status.HTTP_201_CREATED
                )

class CandidateLoginView(APIView):
    def post(self, request, *args, **kwargs):
        Email = request.data.get('email')
        Password = request.data.get('password')

        # Check if both email and password are provided
        if not Email or not Password:
            return Response(
                {'detail': 'Email and password are required'},
                status=status.HTTP_400_BAD_REQUEST
            )

        try:
            # Check if the email exists
            Candidate = candidate.objects.get(email=Email)
        except candidate.DoesNotExist:
            return Response(
                {"detail": "Employer not found"},
                status=status.HTTP_404_NOT_FOUND
            )

        # Validate the password
        if Candidate.password == Password:
            # Generate JWT tokens if the password is correct
            refresh = RefreshToken.for_user(Candidate)
            return Response({
                'access_token': str(refresh.access_token),
                'refresh_token': str(refresh),
                'message': 'Login successful'
            }, status=status.HTTP_200_OK)
        else:
            return Response({'detail': 'Invalid password'}, status=status.HTTP_401_UNAUTHORIZED)
class EmployerProfileView(APIView):
    """
    API endpoint for creating an employer profile.
    """
    def post(self, request):
        # Handle file upload and form data
        serializer = EmployerProfileSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Profile submitted successfully"}, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
