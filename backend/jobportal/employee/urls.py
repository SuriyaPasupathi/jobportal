from django.urls import path
from .views import CandidateRegisterView,CandidateLoginView

urlpatterns = [
    #employer create and login 
    path('candidateregister/', CandidateRegisterView.as_view(), name='register'),
    path('candidatelogin/', CandidateLoginView.as_view(), name='login'),
]