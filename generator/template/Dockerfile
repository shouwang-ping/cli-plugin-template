# FROM swr.cn-east-2.myhuaweicloud.com/sailfish-pro/nginx:1.13.8-alpine-perl
FROM node
ADD ./dist/ /data/wwwroot/
ADD ./nginx.conf /etc/nginx/nginx.conf
ADD ./run.sh /data
# RUN chmod a+x /data/run.sh
RUN npm install
WORKDIR /data
ENTRYPOINT sh /data/run.sh
COPY ./data /data
EXPOSE 3000
