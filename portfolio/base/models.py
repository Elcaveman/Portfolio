from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

class Link(models.Model):
    LINK_TYPES = [
        ("LIN","Linkedin"),
        ("GIT","Github"),
        ("TWI","Twitter"),
        ("KAG","Kagle"),
        ("GEN","Generic link"),
    ]
    type = models.CharField(max_length=3,choices=LINK_TYPES,default="GEN",blank=True)
    url = models.URLField()

    def __str__(self):
        return self.type + " URL : " + str(self.url)
class Tech(models.Model):
    name = models.CharField(max_length = 20 , null=False)
    icon = models.ImageField(upload_to='Tech/icons/',null=True,blank=True)
    experience = models.IntegerField(validators=[MinValueValidator(0)])
    class Meta:
        verbose_name = 'Technology'
        verbose_name_plural = 'Technologies'
    def __str__(self):
        return self.name
class Discipline(models.Model):
    name = models.CharField(max_length = 20 , null=False)
    experience = models.IntegerField(validators=[MinValueValidator(0)])
    class Meta:
        verbose_name = 'Discipline'
        verbose_name_plural = 'Disciplines'
    def __str__(self):
        return self.name
class Co_op(models.Model):
    name = models.CharField(max_length = 50 , null=False)
    abrev = models.CharField(max_length = 10 , null=True,blank=True)
    link = models.ForeignKey(Link,on_delete=models.SET_NULL,null=True,blank=True)
    class Meta:
        verbose_name = 'Colaborate'
        verbose_name_plural = 'Colaborators'
    def __str__(self):
        return self.name
    def get_list_display(self):
        pass
class Client(models.Model):
    name = models.CharField(max_length = 60 , null=False)
    abrev = models.CharField(max_length = 10 , null=True,blank=True)
    link = models.ForeignKey(Link,on_delete=models.SET_NULL,null=True,blank=True)
    class Meta:
        verbose_name = 'Client'
        verbose_name_plural = 'Clients'
    def get_list_display(self):
        pass
class Skill(models.Model):
    SKILLS_PROFICENCY = [
        ("XP","expert"),
        ("AD","advanced"),
        ("MD","medium"),
        ("BG","beginner"),
    ]
    tech_stack = models.ManyToManyField(Tech)
    discipline = models.ForeignKey(Discipline,on_delete=models.SET_NULL,null=True,blank=True)

    experience = models.IntegerField(validators=[MinValueValidator(0)])
    proficiency =  models.CharField(max_length = 60 , null=False,choices=SKILLS_PROFICENCY)
    title = models.CharField(max_length = 60 , null=False)
    description = models.TextField(null=False)

    class Meta:
        verbose_name = 'Skill'
        verbose_name_plural = 'Skills'

    def __str__(self):
        return self.title
class Task(models.Model):
    
    skills = models.ManyToManyField(Skill)
    title = models.CharField(max_length = 60 , null=False)
    description = models.TextField(null=False)
    start = models.DateField(null=False)
    end = models.DateField(null=True,blank=True) 

    class Meta:
        verbose_name = 'Task'
        verbose_name_plural = 'Tasks'

    def __str__(self):
        return self.title 
class Project(models.Model):
    PROJECT_STATES = [
        ("UD","under developement"),
        ("PP","pushing to production"),
        ("CM","completed"),
        ("CD","continuous delivery"),
        ("UM","under maintenance"),
    ]
    PROJECT_TYPE = [
        ("PRS","Personal"),
        ("PRO","Professional Contract"),
        ("FRE","Freelance Job"),
    ]
    tasks = models.ManyToManyField(Task)
    title = models.CharField(max_length = 60 , null=False)
    description = models.TextField(null=False)
    links = models.ManyToManyField(Link)
    state = models.CharField(max_length = 2 , choices = PROJECT_STATES  , null=False)
    co_ops = models.ManyToManyField(Co_op,verbose_name="Collaborators")
    type = models.CharField(max_length = 3 , choices = PROJECT_TYPE, null=False)
    client = models.ForeignKey(Client,on_delete=models.SET_NULL , null=True,blank=True)
    start = models.DateField(null=False)
    end = models.DateField(null=True,blank=True)
    latest_version = models.CharField(verbose_name="Latest Version",max_length = 10)

    #UI stuff
    class Meta:
        pass

    def __str__(self):
        return self.title

    def total_tasks(self):
        return self.tasks.count()
 