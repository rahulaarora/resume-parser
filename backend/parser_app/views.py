from django.shortcuts import render, redirect
from pyresparser import ResumeParser
from django.contrib import messages
from django.conf import settings
from django.db import IntegrityError
from django.http import HttpResponse, FileResponse, Http404
import os

from django.shortcuts import render

from rest_framework import viewsets

from parser_app.serializers import ResumeSerializer
from parser_app.models import Resume

from rest_framework import status
from rest_framework.response import Response
from rest_framework import permissions


class ResumeViewSet(viewsets.ModelViewSet):
   permission_classes = (permissions.AllowAny,)
   queryset = Resume.objects.all()
   serializer_class = ResumeSerializer

   # get request
   def list(self, request, *args, **kwargs):
        ret = super(ResumeViewSet, self).list(request)
        return Response({'message': "Not Allowed", "success": False}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
      #   return Response({'data': ret.data})

   # post request
   def create(self, request, *args, **kwargs):
         ret = super(ResumeViewSet, self).create(request)
         fileName = request.data['fileName']
         resumeData = []

         # extracting resume entities
         parser = ResumeParser(os.path.join(settings.MEDIA_ROOT, fileName))
         data = parser.get_extracted_data()
         userName= data.get('name')
         email= data.get('email')
         mobileNumber= data.get('mobile_number')
         if data.get('degree') is not None:
            education= ', '.join(data.get('degree'))
         else:
            education= None
         companyName= data.get('company_names')
         collegeName= data.get('college_name')
         designation= data.get('designation')
         # total_experience= data.get('total_experience')
         if data.get('skills') is not None:
            skills= ', '.join(data.get('skills'))
         else:
            skills= None
         if data.get('experience') is not None:
            experience= ', '.join(data.get('experience'))
         else:
            experience= None

         resumeData+=(userName, email, mobileNumber, education, skills, companyName, collegeName, designation, experience)

         return Response({'data':resumeData, "success": True}, status=status.HTTP_201_CREATED)
