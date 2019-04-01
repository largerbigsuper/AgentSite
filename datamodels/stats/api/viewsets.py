#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# @Time    : 2019/4/1 下午8:47
# @Author  : Frankie
# @Email   : zaihuazhao@163.com
# @File    : viewsets.py
from rest_framework import viewsets, mixins
from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet

from datamodels.stats.api.serailizers import ApplayListSerializer, ApplayCreateSerializer, ItemSerailzier
from datamodels.stats.models import mm_Applay, mm_Item


class ItemViewSet(mixins.ListModelMixin,
                  GenericViewSet):

    queryset = mm_Item.all()
    permission_classes = []
    serializer_class = ItemSerailzier

    def list(self, request, *args, **kwargs):
        serializer = self.serializer_class(self.queryset, many=True)
        return Response(serializer.data)


class AppalyViewSet(viewsets.ModelViewSet):

    queryset = mm_Applay.all()
    permission_classes = []

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return ApplayListSerializer
        else:
            return ApplayCreateSerializer
