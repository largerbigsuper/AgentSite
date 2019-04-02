#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# @Time    : 2019/4/2 下午8:03
# @Author  : Frankie
# @Email   : zaihuazhao@163.com
# @File    : filters.py
from django_filters import rest_framework as filters

from datamodels.stats.models import Item


class ItemFilter(filters.FilterSet):

    class Meta:
        model = Item
        fields = {
            'parent': ['exact', ],
            'level': ['exact', ]
        }
