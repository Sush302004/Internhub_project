from rest_framework import serializers
from .models import Course, Certificate

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'

class CertificateSerializer(serializers.ModelSerializer):
    course_title = serializers.CharField(source='course.title', read_only=True)

    class Meta:
        model = Certificate
        fields = ['id', 'certificate_id', 'course', 'course_title', 'recipient_name', 'recipient_email', 'issue_date', 'score', 'total']
