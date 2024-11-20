from django.urls import path
from .views import register, login_view, index, airbnb, handle_form_submission, payment

urlpatterns = [
    path('register/', register, name='register'),
    path('login/', login_view, name='login'),
    path('', index, name='index'),
    path('index/', index, name='index'),
    path('airbnb/', airbnb, name='airbnb'),
    path('form/', handle_form_submission, name='form'),
    path('payment/<int:total_cost>/', payment, name='payment'),

]