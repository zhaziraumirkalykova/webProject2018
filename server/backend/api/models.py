from django.db import models

class Student(models.Model):
  sname = models.CharField(max_length=100)
  spass = models.CharField(max_length=100)

  def __str__(self):
    return self.sname

class Teacher(models.Model):
  tname = models.CharField(max_length=100)
  tpass = models.CharField(max_length=100)

  def __str__(self):
    return self.tname

class Course(models.Model):
  title = models.CharField(max_length=100)
  created_at = models.DateTimeField(auto_now=True)


  def __str__(self):
    return self.title

class Material(models.Model):
  course = models.ForeignKey(Course, on_delete=models.CASCADE, default=1, related_name="materials")
  title = models.CharField(max_length=200, blank=True)

  def __str__(self):
    return self.title

class Comment(models.Model):
  course = models.ForeignKey(Course, related_name="comments", on_delete=models.CASCADE)
  text = models.CharField(max_length=200, blank=True)
  created_at = models.DateTimeField(auto_now_add=True, blank=True, null=True)

  def __str__(self):
    return self.text
