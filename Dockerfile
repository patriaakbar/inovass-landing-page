FROM node:23-alpine
COPY . /landingpage/
WORKDIR /landingpage/
ENV NODE_OPTIONS=--max-old-space-size=2048

RUN rm -rf /etc/localtime
RUN ln -s /usr/share/zoneinfo/Asia/Jakarta /etc/localtime

RUN npm install npm@latest -g
RUN npm update
RUN npm run build
RUN npm install -g serve
CMD serve -s dist