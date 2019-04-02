#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# @Time    : 2019/4/1 下午8:47
# @Author  : Frankie
# @Email   : zaihuazhao@163.com
# @File    : viewsets.py
from collections import defaultdict

from rest_framework import viewsets, mixins
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet

from datamodels.stats.api.filters import ItemFilter
from datamodels.stats.api.serailizers import ApplayListSerializer, ApplayCreateSerializer, ItemSerailzier
from datamodels.stats.models import mm_Applay, mm_Item


class ItemViewSet(mixins.ListModelMixin,
                  mixins.RetrieveModelMixin,
                  GenericViewSet):

    queryset = mm_Item.all()
    permission_classes = []
    serializer_class = ItemSerailzier
    filterset_class = ItemFilter

    def list(self, request, *args, **kwargs):
        serializer = self.serializer_class(self.filter_queryset(self.queryset), many=True)
        return Response(serializer.data)

    @action(methods=['get'], detail=False)
    def all(self, request):
        result = defaultdict(list)
        level_0 = list()
        for item in self.queryset:
            _data = self.serializer_class(item).data
            if item.get_level() == 0:
                level_0.append(_data)
            result[item.parent_id].append(_data)
        for g in level_0:
            g['childrens'] = result[g['id']]
            for child in g['childrens']:
                child['childrens'] = result[child['id']]
        return Response(level_0)

    @action(methods=['get'], detail=True)
    def childrens(self, request, pk=None):
        item = self.get_object()
        childs = item.get_children()
        data = self.serializer_class(childs, many=True).data
        return Response(data)



class AppalyViewSet(viewsets.ModelViewSet):

    queryset = mm_Applay.all()
    permission_classes = []

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return ApplayListSerializer
        else:
            return ApplayCreateSerializer
