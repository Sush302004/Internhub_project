from django.shortcuts import render

def home(request):
    return render(request, 'index.html')

def login_view(request):
    return render(request, 'login.html')

def register_view(request):
    return render(request, 'register.html')

def internships(request):
    return render(request, 'internships.html')

def internship_detail(request, id):
    return render(request, 'internship_detail.html')

def applications(request):
    return render(request, 'applications.html')

def assessments(request):
    return render(request, 'assessments.html')

def courses(request):
    return render(request, 'courses.html')

def resume(request):
    return render(request, 'resume.html')
