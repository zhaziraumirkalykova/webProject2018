from rest_framework import serializers

from api.models import Course, Student, Material, Comment, Teacher

class StudentSer(serializers.ModelSerializer):
  class Meta:
    model = Student
    fields = "__all__"

class TeacherSer(serializers.ModelSerializer):
  class Meta:
    model = Teacher
    fields = "__all__"

class CourseSerializer2(serializers.ModelSerializer):
  class Meta:
    model = Course
    fields = "__all__"
    # fields = ('id', 'title', 'created_at')

class MaterialSer(serializers.ModelSerializer):
  class Meta:
    model = Material
    fields = "__all__"

class CommentSer(serializers.ModelSerializer):
  class Meta:
    model = Comment
    fields = "__all__"