#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# @Time    : 2019/4/1 下午8:46
# @Author  : Frankie
# @Email   : zaihuazhao@163.com
# @File    : serailizers.py
from rest_framework import serializers

from datamodels.stats.models import Applay, Item


class ItemSerailzier(serializers.ModelSerializer):

    class Meta:
        model = Item
        fields = ('id', 'name')


class ApplayCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Applay
        fields = ('item', 'remark', 'name', 'tel', 'create_at')


class ApplayListSerializer(serializers.ModelSerializer):
    item = ItemSerailzier()

    class Meta:
        model = Applay
        fields = ('item', 'remark', 'name', 'tel', 'create_at')

