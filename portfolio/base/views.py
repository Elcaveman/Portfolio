from django.shortcuts import render


def home(request):
    return render(request,"base_.html")

def project(request,id):
    pass