FROM node:alpine
WORKDIR /usr/src/app
COPY logger.js ./
USER node
CMD ["/bin/ash", "-c", "node logger.js"]
