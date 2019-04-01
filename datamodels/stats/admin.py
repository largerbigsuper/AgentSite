from django.contrib import admin

from datamodels.stats.models import Item, Applay


@admin.register(Item)
class ItemAdmin(admin.ModelAdmin):

    list_display = ('id', 'name')
    list_display_links = list_display


@admin.register(Applay)
class ApplayAdmin(admin.ModelAdmin):

    list_display = ('id', 'get_item_name', 'remark', 'name', 'tel', 'create_at', 'is_deal')
    list_display_links = list_display

    def get_item_name(self, obj):
        return obj.item.name

    get_item_name.short_description = '类型'

