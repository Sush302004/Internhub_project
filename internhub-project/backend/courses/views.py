from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Course, Certificate
from .serializers import CourseSerializer, CertificateSerializer
import uuid

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

    @action(detail=False, methods=['post'], url_path='complete')
    def complete(self, request):
        """
        Endpoint to handle course completion and certificate issuance.
        Expects: courseId, recipientName, recipientEmail, score, total
        """
        course_id = request.data.get('courseId')
        recipient_name = request.data.get('recipientName')
        recipient_email = request.data.get('recipientEmail')
        score = request.data.get('score')
        total = request.data.get('total')

        try:
            course = Course.objects.get(course_id=course_id)
        except Course.DoesNotExist:
            return Response({"message": "Course not found"}, status=status.HTTP_404_NOT_FOUND)

        # Check if score meets 75% requirement
        passing_score = total * 0.75
        if score < passing_score:
            return Response({
                "message": "Score too low for certificate",
                "score": score,
                "required": passing_score
            }, status=status.HTTP_400_BAD_REQUEST)

        # Create certificate
        certificate_id = f"CERT-{uuid.uuid4().hex[:8].upper()}"
        certificate = Certificate.objects.create(
            certificate_id=certificate_id,
            course=course,
            recipient_name=recipient_name,
            recipient_email=recipient_email,
            score=score,
            total=total
        )

        serializer = CertificateSerializer(certificate)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
