import json

from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from django.views.decorators.csrf import csrf_protect

from hiarc_registration.forms import HiarcUserCreationForm
# Create your views here.

@csrf_protect
def register_user(request):
    args = {}
    args['errors'] = {}
    if request.method == 'POST':
        form = HiarcUserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/')
        args['errors'] = json.loads(form.errors.as_json())
        print(args['errors'])

    args['form'] = HiarcUserCreationForm()

    return render(request,'hiarc_registration/register.html', args)