FROM python:3.6.0
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
COPY built_env.py /code/
COPY requirements_docker.txt /code/
# RUN pip install -r /code/requirements.txt
RUN python /code/built_env.py

ADD . /code/

EXPOSE 8000
