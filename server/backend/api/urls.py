from django.urls import path, include

from api import views


urlpatterns = [
   path('student/', views.user_student),
   path('courses/', views.courses_list),
   path('courses/<int:course_id>/', views.courses_detail),
   # path('courses/<int:course_id>/comments', views.course_comment_list),
   path('courses/<int:course_id>/materials/', views.courses_add_material),
   path('courses/<int:course_id>/materials/<int:material_id>', views.courses_delete_material),
   
   path('materials/', views.materials_list),
   path('materials/<int:material_id>/', views.materials_detail),
   path('comments/', views.comments_list),
   path('comments/<int:comment_id>/', views.comments_detail),
]
