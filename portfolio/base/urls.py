from django.contrib import admin
from django.urls import path
from . import views
from . import api

urlpatterns = [
    path('',views.home,name="homepage"),
    path('projects/<int:id>/',views.project,name="project")
]