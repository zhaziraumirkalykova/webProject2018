from django.contrib import admin

from api.models import Course, Student, Teacher, Material, Comment

admin.site.register(Course)
admin.site.register(Student)
admin.site.register(Teacher)
admin.site.register(Material)
admin.site.register(Comment)