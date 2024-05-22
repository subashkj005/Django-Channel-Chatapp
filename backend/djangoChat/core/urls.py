from django.urls import path
from .views import ListUser, LoginUser

urlpatterns = [
    path('register/', ListUser.as_view(), name='register'),
    path('login/', LoginUser.as_view(), name='login'),
]
