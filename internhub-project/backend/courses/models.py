from django.db import models

class Course(models.Model):
    course_id = models.CharField(max_length=50, unique=True)
    title = models.CharField(max_length=200)
    description = models.TextField()
    provider = models.CharField(max_length=100)
    duration = models.CharField(max_length=50)
    level = models.CharField(max_length=50)
    category = models.CharField(max_length=100)
    thumbnail = models.URLField()
    video_url = models.URLField()
    skills = models.JSONField()  # List of skills
    quiz = models.JSONField()    # List of quiz questions

    def __str__(self):
        return self.title

class Certificate(models.Model):
    certificate_id = models.CharField(max_length=50, unique=True)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    recipient_name = models.CharField(max_length=200)
    recipient_email = models.EmailField()
    issue_date = models.DateTimeField(auto_now_add=True)
    score = models.IntegerField()
    total = models.IntegerField()

    def __str__(self):
        return f"Certificate for {self.recipient_name} - {self.course.title}"
