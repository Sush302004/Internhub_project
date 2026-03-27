from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('courses.urls')),

    # Frontend pages
    path('', views.home, name='home'),
    path('login/', views.login_view, name='login'),
    path('register/', views.register_view, name='register'),
    path('internships/', views.internships, name='internships'),
    path('internships/<int:id>/', views.internship_detail, name='internship_detail'),
    path('applications/', views.applications, name='applications'),
    path('assessments/', views.assessments, name='assessments'),
    path('courses/', views.courses, name='courses'),
    path('resume/', views.resume, name='resume'),
]
