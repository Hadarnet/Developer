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
    # path('school/', views.SchoolListCreate.as_view()),
    # path('school/update/<int:pk>/', csrf_exempt(views.SchoolListUpdate.as_view())),
    # path('school/dell/<int:pk>/', views.SchoolListDestroy.as_view()),
    #
    # path('teacher/', views.TeacherListCreate.as_view()),
    # path('teacher/update/<int:pk>/', views.TeacherListUpdate.as_view()),
    # path('teacher/dell/<int:pk>/', views.TeacherListDestroy.as_view()),
    #
    # path('student/', views.StudentListCreate.as_view()),
    # path('student/update/<int:pk>/', views.StudentListUpdate.as_view()),
    # path('student/dell/<int:pk>/', views.StudentListDestroy.as_view()),
    #
    # path('klas/', views.KlasListCreate.as_view()),
    # path('klas/update/<int:pk>/', views.KlasListUpdate.as_view()),
    # path('klas/dell/<int:pk>/', views.KlasListDestroy.as_view()),
    #
    # path('course/', views.CourseListCreate.as_view()),
    # path('course/update/<int:pk>/', views.CourseListUpdate.as_view()),
    # path('course/dell/<int:pk>/', views.CourseListDestroy.as_view()),
    #
    # path('book/', views.BookListCreate.as_view()),
    # path('book/update/<int:pk>/', views.BookListUpdate.as_view()),
    # path('book/dell/<int:pk>/', views.BookListDestroy.as_view()),
    #
    # path('cal/', views.CalListCreate.as_view()),
    # path('cal/update/<int:pk>/', views.CalListUpdate.as_view()),
    # path('cal/dell/<int:pk>/', views.CalListDestroy.as_view()),
    #
    # path('gallery/', views.GalleryListCreate.as_view()),
    # path('gallery/update/<int:pk>/', views.GalleryListUpdate.as_view()),
    # path('gallery/dell/<int:pk>/', views.GalleryListDestroy.as_view()),
]
