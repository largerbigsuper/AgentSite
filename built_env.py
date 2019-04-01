#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# @Time    : 2018/12/1 下午4:04
# @Author  : Frankie
# @Email   : zaihuazhao@163.com
# @File    : built_env.py
import os
from subprocess import call
BASE_DIR = os.getcwd()
call(['pip', 'install', '--upgrade', 'pip',
      '-i', 'http://mirrors.aliyun.com/pypi/simple/', '--trusted-host', 'mirrors.aliyun.com'])

# step1
call(['pip', 'install', '-r', 'requirements_docker.txt',
      '-i', 'http://mirrors.aliyun.com/pypi/simple/', '--trusted-host', 'mirrors.aliyun.com'])



