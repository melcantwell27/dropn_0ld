# dropn/views/danceClassViews.py

from ..models import DanceClass
from ..serializers import DanceClassSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
@api_view(['GET', 'POST'])
def dance_class_list(request):
    if request.method == "GET":
        classes = DanceClass.objects.all()
        serializer = DanceClassSerializer(classes, many=True)
        return Response(serializer.data)

    elif request.method == "POST":
        serializer = serializer = DanceClassSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@csrf_exempt
@api_view(['GET', 'PUT', 'DELETE'])
def dance_class_detail(request, pk):
    try:
        dance_class = DanceClass.objects.get(pk=pk)
    except DanceClass.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = DanceClassSerializer(dance_class)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = DanceClassSerializer(dance_class, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
            # Delete the dance_class instance
        dance_class.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)