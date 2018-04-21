from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt

from rest_framework.parsers import JSONParser

from api.models import Course, Student, Teacher, Material, Comment, Teacher
from api.serializers import CourseSerializer2, StudentSer, MaterialSer, CommentSer, TeacherSer

@csrf_exempt
def courses_list(request):
  if request.method == "GET":
    courses = Course.objects.all()
    ser = CourseSerializer2(courses, many=True)
    return JsonResponse(ser.data, safe=False)
  elif request.method == "POST":
    data = JSONParser().parse(request)
    ser = CourseSerializer2(data=data)
    if ser.is_valid():
      ser.save()
      return JsonResponse(ser.data, status=201)
    return JsonResponse(ser.errors, status=400)


@csrf_exempt
def courses_detail(request, course_id):
  
  try:
    course = Course.objects.get(pk=course_id)
  except Exception as e:
    return JsonResponse({"error": str(e)}, status=404)

  if request.method == "GET":
    ser = CourseSerializer2(course)
    return JsonResponse(ser.data) 
  elif request.method == "PUT":
    data = JSONParser().parse(request)
    ser = CourseSerializer2(course, data)
    if ser.is_valid():
      ser.save()
      return JsonResponse(ser.data)
  elif request.method == "DELETE":
    course.delete()
    ser = CourseSerializer2(course)
    return JsonResponse(ser.data)

@csrf_exempt
def user_student(request):
  if request.method == "GET":
    students = Student.objects.all()
    ser = StudentSer(students, many=True)
    return JsonResponse(ser.data, safe=False)
  elif request.method == "POST":
    data = JSONParser().parse(request)
    ser = StudentSer(data=data)
    if ser.is_valid():
      ser.save()
      return JsonResponse(ser.data, status=201)
    return JsonResponse(ser.errors, status=400)


def user_teacher(request):
  if request.method == "GET":
    teachers = Teacher.objects.all()
    ser = TeacherSer(teachers, many=True)
    return JsonResponse(ser.data, safe=False)
  elif request.method == "POST":
    data = JSONParser().parse(request)
    ser = TeacherSer(data=data)
    if ser.is_valid():
      ser.save()
      return JsonResponse(ser.data, status=201)
    return JsonResponse(ser.errors, status=400)

@csrf_exempt
def materials_list(request):
  if request.method == "GET":
    materials = Material.objects.all()
    ser = MaterialSer(materials, many=True)
    return JsonResponse(ser.data, safe=False)
  elif request.method == "POST":
    data = JSONParser().parse(request)
    ser = MaterialSer(data=data)
    if ser.is_valid():
      ser.save()
      return JsonResponse(ser.data, status=201)
    return JsonResponse(ser.errors, status=400)

@csrf_exempt
def courses_add_material(request, course_id):

  if request.method == "GET":
    course = Course.objects.get(pk=course_id)
    materials = course.materials.all()
    ser = MaterialSer(materials, many=True)
    return JsonResponse(ser.data, safe=False)

  elif request.method == "POST":
    data = JSONParser().parse(request)
    ser = MaterialSer(data=data)
    if ser.is_valid():
      ser.save()
      return JsonResponse(ser.data, status=201)
  return JsonResponse(ser.errors, status=400)
  
@csrf_exempt
def courses_delete_material(request, course_id, material_id):
    if request.method == "DELETE":
      material.delete()
      ser = MaterialSer(material)
      return JsonResponse(ser.data)

@csrf_exempt
def materials_detail(request, material_id):
    try:
      material = Material.objects.get(pk=material_id)
    except Exception as e:
      return JsonResponse({"error": str(e)}, status=404)

    if request.method == "GET":
      ser = MaterialSer(material)
      return JsonResponse(ser.data) 
    elif request.method == "PUT":
      data = JSONParser().parse(request)
      ser = MaterialSer(material, data)
      if ser.is_valid():
        ser.save()
        return JsonResponse(ser.data)
    elif request.method == "DELETE":
      material.delete()
      ser = MaterialSer(material)
      return JsonResponse(ser.data)

@csrf_exempt
def comments_list(request):
  if request.method == "GET":
    comments = Comment.objects.all()
    ser = CommentSer(comments, many=True)
    return JsonResponse(ser.data, safe=False)
  elif request.method == "POST":
    data = JSONParser().parse(request)
    ser = CommentSer(data=data)
    if ser.is_valid():
      ser.save()
      return JsonResponse(ser.data, status=201)
    return JsonResponse(ser.errors, status=400)


# @csrf_exempt
# def course_comment_list (request, course_id):
#   if request.method == "GET":
#     course = Course.objects.get(pk=course_id)
#     comments = course.comments
#     ser = CommentSer(comments, many=True)
#     return JsonResponse(ser.data, safe=False)
#   elif request.method == "POST":
#     data = JSONParser().parse(request)
#     ser = CommentSer(data=data)
#     if ser.is_valid():
#       ser.save()
#       return JsonResponse(ser.data, status=201)
#     return JsonResponse(ser.errors, status=400)


@csrf_exempt
def comments_detail(comment_id, request):
    try:
      comments = Comment.objects.get(pk=comment_id)
    except Exception as e:
      return JsonResponse({"error": str(e)}, status=404)

    if request.method == "GET":
      ser = CommentSer(comment)
      return JsonResponse(ser.data) 
    elif request.method == "PUT":
      data = JSONParser().parse(request)
      ser = CommentSer(comment, data)
      if ser.is_valid():
        ser.save()
        return JsonResponse(ser.data)
    elif request.method == "DELETE":
      comment.delete()
      ser = CommentSer(comment)
      return JsonResponse(ser.data)
