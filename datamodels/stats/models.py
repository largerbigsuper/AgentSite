from django.db import models
from mptt.fields import TreeForeignKey
from mptt.models import MPTTModel

from utils.common import AgentModelManger


class ItemManager(AgentModelManger):
    pass


class Item(MPTTModel):

    name = models.CharField(max_length=20, verbose_name='报考类型')
    parent = TreeForeignKey('self', on_delete=models.CASCADE, null=True, blank=True, related_name='children')

    objects = ItemManager()

    class MPTTMeta:
        order_insertion_by = ['name']

    class Meta:
        db_table = 'z_items'
        verbose_name = verbose_name_plural = '报考类型管理'

    def __str__(self):
        return self.name


class ApplayManager(AgentModelManger):
    pass


class Applay(models.Model):

    item = models.ForeignKey('Item', on_delete=models.CASCADE)
    remark = models.CharField(max_length=200, null=True, blank=True, verbose_name='备注')
    name = models.CharField(max_length=20, verbose_name='姓名')
    tel = models.CharField(max_length=11, verbose_name='电话号码')
    create_at = models.DateTimeField(auto_now_add=True, verbose_name='创建时间')
    is_deal = models.BooleanField(default=False, verbose_name='已处理')

    objects = ApplayManager()

    class Meta:
        db_table = 'z_applays'
        verbose_name = verbose_name_plural = '报名管理'

    def __str__(self):
        return '<%s-%s>' % (self.id, self.name)


mm_Item = Item.objects
mm_Applay = Applay.objects
