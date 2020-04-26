from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=250)
    def to_json(self):
        return {
            'id' : self.id,
            'name' : self.name,

        }

class Book (models.Model):
    name = models.CharField(max_length=250)
    description = models.CharField(max_length=10000,default="No data")
    price = models.IntegerField( default='No data')
    category = models.ForeignKey(Category ,on_delete=models.CASCADE)
    class Meta:
        verbose_name = 'Book'
        verbose_name_plural = 'Books'
    def __str__(self):
        return f'Book id={self.id}, name={self.name}'
    def to_json(self):
        return {
            'id' : self.id,
            'name' : self.name,
            'description' : self.description,
            'price' : self.price,
            'category': self.category_id,
        }