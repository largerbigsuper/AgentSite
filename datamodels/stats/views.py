from django.shortcuts import render, redirect


def index(request):
    return redirect('http://agent.lhxq.top:8080/static/register/index.html')


def detail(request):
    return render(request, 'subindex.html')
