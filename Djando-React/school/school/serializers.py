from rest_framework import serializers
from .models import School
from .models import Teacher
from .models import Student
from .models import Klas
from .models import Course
from .models import Cal
from .models import Gallery
from .models import Book


class SchoolSerializer(serializers.ModelSerializer):
    class Meta:
        model = School
        fields = '__all__'


class KlasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Klas
        fields = '__all__'


class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = '__all__'


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'


class CalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cal
        fields = '__all__'


class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Gallery
        fields = '__all__'


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = '__all__'

