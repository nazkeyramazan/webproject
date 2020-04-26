from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token
from api.views_fbv import *
from api.views_cbv import *

urlpatterns = [
    path('login/' , obtain_jwt_token),
    path('categories/' , category_list ),
    path('categories/<int:category_id>' , category_detail),
    path('categories/<int:category_id>/books/', category_books ),
    path('books/' , BookListAPIView.as_view()),
    path('books/<int:book_id>/' , BookDetailAPIView.as_view()),
    path('books/cheap_three/' ,  ThreeCheapBookAPIView.as_view())
]
