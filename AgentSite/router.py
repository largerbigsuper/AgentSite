#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# @Time    : 2019/4/1 下午8:46
# @Author  : Frankie
# @Email   : zaihuazhao@163.com
# @File    : router.py
from rest_framework import routers

from datamodels.stats.api.viewsets import AppalyViewSet, ItemViewSet

agent_router = routers.DefaultRouter()

agent_router.register('applays', AppalyViewSet, base_name='applay')
agent_router.register('items', ItemViewSet, base_name='item')
