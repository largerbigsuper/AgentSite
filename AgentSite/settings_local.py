#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# @Time    : 2019/4/1 下午8:31
# @Author  : Frankie
# @Email   : zaihuazhao@163.com
# @File    : settings_local.py

# SECURITY WARNING: don't run with debug turned on in production!
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

DEBUG = True

ALLOWED_HOSTS = []

# Database
# https://docs.djangoproject.com/en/2.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}
