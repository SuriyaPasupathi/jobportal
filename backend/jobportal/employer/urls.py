from django.urls import path
from .views import EmployerRegisterView, EmployerLoginView, JobPostView,JobUpdate,LogoutView

urlpatterns = [
    #employer create and login 
    path('register/', EmployerRegisterView.as_view(), name='register'),
    path('login/', EmployerLoginView.as_view(), name='login'),
    
    #employee create and login 
    # path('candidate_register/', CandidateRegisterView.as_view(), name='candidate_register'),
    # path('candidate_login/', CandidateLoginView.as_view(), name='candidate_login'),  
    
    #job post 
    path('jobpost/', JobPostView.as_view(), name='jobpost-list'),
    path('job/<int:pk>/', JobUpdate.as_view(), name='job-update'),
    path('logout/', LogoutView.as_view(), name='logout'),
]



