from django.shortcuts import render
from django.urls import path, include
from django.views.decorators.csrf import csrf_exempt
from rest_framework.routers import DefaultRouter
from .views import SchoolView, StudentView, TeacherView, KlasView, CourseView, BookView, CalView, GalleryView

app_name='schools'


def index(request):
    return render(request, 'website/index.html', {})


router=DefaultRouter()
router.register(r'school', SchoolView, basename='school')
router.register(r'student', StudentView, basename='student')
router.register(r'teacher', TeacherView, basename='teacher')
router.register(r'klas', KlasView, basename='klas')
router.register(r'course', CourseView, basename='course')
router.register(r'book', BookView, basename='book')
router.register(r'cal', CalView, basename='cal')
router.register(r'gallery', GalleryView, basename='gallery')

urlpatterns=[
    path('', index),
    path('api/', include(router.urls)),
]
