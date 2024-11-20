from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import AuthenticationForm
from .forms import RegisterForm

def register(request):
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            form.save()
            # No need to authenticate and login the user here
            return redirect('login')  # Redirect to the login page
    else:
        form = RegisterForm()
    return render(request, 'jhuapp/register.html', {'form': form})

def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('index')  # Redirect to a home page after login
    else:
        form = AuthenticationForm()
    return render(request, 'jhuapp/login.html', {'form': form})

def index(request):
    return render(request, 'jhuapp/index.html')

def airbnb(request):
    return render(request, 'jhuapp/airbnb.html')

def handle_form_submission(request):
    if request.method == 'POST':
        total_cost = int(float(request.POST.get('total_cost', 0)))
        print('Total cost received:', total_cost)  # Debug print to check form data
        return redirect('payment', total_cost=total_cost)
    return render(request, 'jhuapp/airbnbquote.html')  # Replace with your form template

def payment(request, total_cost):
    print('Rendering payment page with total_cost:', total_cost)
    return render(request, 'jhuapp/payment.html', {'total_cost': total_cost})


