from django.contrib import admin
from .models import *
from django.utils.html import format_html

class ProjectAdmin(admin.ModelAdmin):
    save_on_top = True
    search_fields = ("title__icontains", "description__icontains")
    fieldsets = (
        ("Project Description", {
            'fields': (
                'title',
                'description',
                'state',
                'type',
                'start',
                'end',
                'latest_version',
                'links'
            ),
        }),
        ("Project People",{
            'fields':(
                'client',
                'co_ops',
            ),
        }),
        ("Project Tasks",{
            'fields':('tasks',)
        })
    )
    filter_horizontal = ('tasks','co_ops','links')
    list_display = ("title","state","total_tasks","type","client",
    "co_ops_list_display","links_list_display",
    "start","end","latest_version")
    def links_list_display(self,obj):
        return " -- ".join([str(link) for link in obj.links.all()])
    def co_ops_list_display(self,obj):
        return " -- ".join([co_op.abrev for co_op in obj.co_ops.all()])
    co_ops_list_display.short_description = 'collaborators'
    co_ops_list_display.admin_order_field  = 'co_op__abrev'

    links_list_display.short_description = 'links'

class TaskAdmin(admin.ModelAdmin):
    search_fields = ("title__icontains", "description__icontains")
    list_display =("title","skills_list_display","start","end")
    filter_horizontal = ('skills',)
    def skills_list_display(self,obj):
        return " -- ".join([str(skill) for skill in obj.skills.all()])
    skills_list_display.short_description = "Skills"

class ClientAdmin(admin.ModelAdmin):
    search_fields = ("name__startswith",)
    list_display =("name","link")

class Co_opAdmin(admin.ModelAdmin):
    search_fields = ("name__startswith",)
    list_display =("name","link")

class LinkAdmin(admin.ModelAdmin):
    list_display =("type","url")
    #add custom icon method

class SkillAdmin(admin.ModelAdmin):
    search_fields = ("tech_stack__name__startswith","discipline__name__startswith")
    list_display =("title","discipline",
    "tech_stack_list_display","experience","proficiency")
    filter_horizontal = ('tech_stack',)
    def tech_stack_list_display(self,obj):
        return " -- ".join([str(tech) for tech in obj.tech_stack.all()])
    tech_stack_list_display.short_description = "technologies"
    
class DisciplineAdmin(admin.ModelAdmin):
    search_fields = ("name__startswith",)
    list_display =("name","experience")

class TechAdmin(admin.ModelAdmin):
    search_fields = ("name__startswith",)
    def image_tag(self, obj):
        if obj.icon:
            return format_html('<img src="{}" />'.format(obj.icon.url))
        else:
            return "no icon"
    image_tag.short_description = 'Icon'
    list_display =("image_tag","name","experience")

admin.site.register(Project,ProjectAdmin)
admin.site.register(Task,TaskAdmin)
admin.site.register(Client,ClientAdmin)
admin.site.register(Co_op,Co_opAdmin)
admin.site.register(Link,LinkAdmin)
admin.site.register(Skill,SkillAdmin)
admin.site.register(Discipline,DisciplineAdmin)
admin.site.register(Tech,TechAdmin)