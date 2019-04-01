#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# @Time    : 2019/4/1 下午8:59
# @Author  : Frankie
# @Email   : zaihuazhao@163.com
# @File    : common.py
from collections import OrderedDict

from django.db.models import Manager
from rest_framework import pagination
from rest_framework.response import Response


class AgentModelManger(Manager):
    pass


class CustomPagination(pagination.PageNumberPagination):
    def get_paginated_response(self, data):
        return Response(OrderedDict([
            ('count', self.page.paginator.count),
            ('next', self.get_next_link()),
            ('previous', self.get_previous_link()),
            ('page_count', self.page.paginator.num_pages),
            ('results', data)
        ]))
