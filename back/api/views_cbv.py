from rest_framework.decorators import APIView
from rest_framework import  status
from rest_framework.response import Response
from api.serializers import CategoryModelSerializer,CategoryWithBookModelSerializer,BookModelSerializer,BookSerializer,Book2ModelSerializer
from api.models import Category , Book
from rest_framework.permissions import IsAdminUser,IsAuthenticated

class BookListAPIView(APIView):
    def get(self,request):
        books = Book.objects.all()
        serializer = Book2ModelSerializer(books, many=True)
        return Response(serializer.data)
    def post(self,request):
        serializer = BookModelSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response (serializer.data , status=status.HTTP_201_CREATED)
        return Response ({'error': serializer.errors}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    # permission_classes = (IsAuthenticated,)
class BookDetailAPIView(APIView):
    def get_object(self , book_id):
        try:
            return Book.objects.get(id =book_id)
        except Book.DoesNotExist as e:
            return Response({'Error':str(e)})

    def get(self, request , book_id):
        book = self.get_object(book_id)
        serializer = BookModelSerializer(book)
        return Response(serializer.data)

    def put(self, request , book_id):
        book = self.get_object(book_id)
        serializer = BookSerializer(instance=book , data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response (serializer.data , status=status.HTTP_202_ACCEPTED)
        return Response({"error": serializer.errors})

    def delete(self,request, book_id):
        book = self.get_object(book_id)
        book.delete()
        return Response({'deleted': True})

    # permission_classes = (IsAuthenticated,IsAdminUser,)

class ThreeCheapBookAPIView(APIView):
    def get(self, request):
        top_three = Book.objects.order_by('price')[:3]
        serializer = BookModelSerializer(top_three, many=True)
        return Response(serializer.data)
    permission_classes = (IsAuthenticated,)