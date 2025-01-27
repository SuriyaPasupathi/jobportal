from rest_framework import status, permissions, generics 
from rest_framework.response import Response 
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from django.http import JsonResponse
from django.contrib.auth import logout
from .models import Employer, Job_Post,UserLogoutLog
from .serializers import EmployerSerializer, JobPostSerializer,LogoutResponseSerializer

# Permissions
class IsEmployer(permissions.BasePermission):
    def has_permission(self, request, view):
        return hasattr(request.user, 'is_employer') and request.user.is_employer



class EmployerRegisterView(generics.CreateAPIView):
    queryset = Employer.objects.all()
    serializer_class = EmployerSerializer

    def create(self, request, *args, **kwargs):
        email = request.data.get("email")
        
        # Check if the email already exists
        if Employer.objects.filter(email=email).exists():
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

class EmployerLoginView(APIView):
    def post(self, request, *args, **kwargs):
        email = request.data.get('email')
        password = request.data.get('password')

        # Check if both email and password are provided
        if not email or not password:
            return Response(
                {'detail': 'Email and password are required'},
                status=status.HTTP_400_BAD_REQUEST
            )

        try:
            # Check if the email exists
            employer = Employer.objects.get(email=email)
        except Employer.DoesNotExist:
            return Response(
                {"detail": "Employer not found"},
                status=status.HTTP_404_NOT_FOUND
            )

        # Validate the password
        if employer.password == password:
            # Generate JWT tokens if the password is correct
            refresh = RefreshToken.for_user(employer)
            return Response({
                'access_token': str(refresh.access_token),
                'refresh_token': str(refresh),
                'message': 'Login successful'
            }, status=status.HTTP_200_OK)
        else:
            return Response({'detail': 'Invalid password'}, status=status.HTTP_401_UNAUTHORIZED)

        

class JobPostView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = JobPostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Job posted successfully!", "data": serializer.data}, status=status.HTTP_201_CREATED)
        return Response({"errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, *args, **kwargs):
        job_posts = Job_Post.objects.all()
        serializer = JobPostSerializer(job_posts, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    
    def delete(self, request, *args, **kwargs):
        job_id = kwargs.get('pk')
        try:
            job_post = Job_Post.objects.get(pk=job_id)
        except Job_Post.DoesNotExist:
            return Response({"detail": "Job post not found"}, status=status.HTTP_404_NOT_FOUND)

        job_post.delete()
        return Response({"message": "Job post deleted successfully!"}, status=status.HTTP_200_OK)

class JobUpdate(APIView):


    def put(self, request, pk):
          
        try:
            job_post = Job_Post.objects.get(pk=pk)  # Retrieve the job post using the provided 'pk'
        except Job_Post.DoesNotExist:
            return Response({"error": "Job not found"}, status=status.HTTP_404_NOT_FOUND)

        # Deserialize and validate the incoming data
        serializer = JobPostSerializer(job_post, data=request.data, partial=True)
        
        if serializer.is_valid():
            serializer.save()  # Save the updated data
            return Response(serializer.data, status=status.HTTP_200_OK)  # Return updated data with status
        else:
            # Print the errors for debugging
            print("Serializer errors:", serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LogoutView(APIView):
    def post(self, request):
        try:
            # Optional: Log logout event in the database (if needed)
            if request.user.is_authenticated:
                # You can log the logout event (optional)
                UserLogoutLog.objects.create(user=request.user, ip_address=request.META.get('REMOTE_ADDR'))
            
            # Perform logout (destroy session)
            logout(request)
            
            # Prepare response data
            response_data = {'message': 'Logged out successfully'}
            serializer = LogoutResponseSerializer(data=response_data)
            
            if serializer.is_valid():
                # Return success response
                return Response(serializer.data, status=status.HTTP_200_OK)
            
            # Return error if serializer is invalid
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        except Exception as e:
            # Handle errors (logging out failed)
            error_data = {'message': 'Error logging out', 'error': str(e)}
            serializer = LogoutResponseSerializer(data=error_data)
            
            if serializer.is_valid():
                # Return error response
                return Response(serializer.data, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class JobPostDetail(APIView):
    def delete(self, request, pk, format=None):
        try:
            job_post = Job_Post.objects.get(pk=pk)
            job_post.delete()
            return Response({"message": "Job post deleted successfully."}, status=status.HTTP_204_NO_CONTENT)
        except Job_Post.DoesNotExist:
            return Response({"error": "Job post not found."}, status=status.HTTP_404_NOT_FOUND)