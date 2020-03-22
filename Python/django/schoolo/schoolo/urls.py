
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('visitors/', include('visitors.urls')),
    path('knowledge/', include('knowledge.urls')),
    path('accounting/', include('accounting.urls')),
    path('teachers/', include('teachers.urls')),
    path('myclass/', include('myclass.urls')),
    path('course/', include('course.urls')),
    path('assignment/', include('assignment.urls')),
    path('timetable/', include('timetable.urls')),
    path('students/', include('students.urls')),
    path('schools/', include('schools.urls')),

]
