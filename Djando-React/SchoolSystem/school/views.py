from django.http import JsonResponse
from django.views import View
from rest_framework.viewsets import ModelViewSet

from .models import School as Schools, Student as Students, Klas as Klass, Teacher as Teachers,Course as Courses,\
    Cal as Cals, Gallery as Gallerys, Book as Books
from .serializers import SchoolSerializer, CourseSerializer, CalSerializer, GallerySerializer, TeacherSerializer, \
    KlasSerializer, StudentSerializer, BookSerializer


class SchoolView(ModelViewSet):
    queryset = Schools.objects.all()
    serializer_class = SchoolSerializer


class KlasView(ModelViewSet):
    queryset = Klass.objects.all()
    serializer_class = KlasSerializer


class TeacherView(ModelViewSet):
    queryset = Teachers.objects.all()
    serializer_class = TeacherSerializer


class StudentView(ModelViewSet):
    queryset = Students.objects.all()
    serializer_class = StudentSerializer


class CourseView(ModelViewSet):
    queryset = Courses.objects.all()
    serializer_class = CourseSerializer


class CalView(ModelViewSet):
    queryset = Cals.objects.all()
    serializer_class = CalSerializer


class BookView(ModelViewSet):
    queryset = Books.objects.all()
    serializer_class = BookSerializer


class GalleryView(ModelViewSet):
    queryset = Gallerys.objects.all()
    serializer_class = GallerySerializer


