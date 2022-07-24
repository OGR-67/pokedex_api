FROM node:18-alpine3.15
RUN mkdir -p /home/app
COPY ./app home/app/
WORKDIR /home/app
RUN npm install package.json
ENV NODE_ENV=production \
    PORT=3000
EXPOSE 3000
CMD ["node", "app.js"]