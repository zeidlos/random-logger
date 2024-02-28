FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY logger.js ./
RUN apk add --no-cache bc
COPY ./entrypoint.sh /
USER node
ENV PORT=8080
EXPOSE 8080
#ENTRYPOINT ["/entrypoint.sh"]
#CMD [ "100", "5000" ]
CMD ["/bin/ash", "-c", "node server.js"]
