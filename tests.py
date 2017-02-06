from django.test import TestCase
from django.test import Client
from django.http import HttpRequest
from django.core.urlresolvers import resolve,reverse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from awp.views import index
from awp.views import login
class Test(TestCase):
    #creating a temporary user for testing
    def dummy(self):
        self.c = Client()
        self.user = User.objects.create(username='user1')
        self.user.set_password('testpassword')
        self.user.save()
      #testing if it redirects to index page        
    def test_login(self):
        login = self.c.login(username='user1',password='testpassword')
        if login == True :
            self.c.logout()
        self.assertTrue(login)
    def test_false_login(self):
        login2 = authenticate(username='notuser', password='testpassword')
        self.assertEqual(login2,None)
   # login2 == None means user doesn't exist. 
    def test_false_password(self):
        user3 = authenticate(username='user1',password='testpassword')
        login3 = self.c.login(username='user1',password='test')
        self.assertTrue(not login3 and user3 != None)
   # login3 == False means invalid details
    def index_view(self):
        found = resolve('/')
        self.assertEqual(found.func, index)
    #check if correct deatils of login works
