FROM node:boron

RUN mkdir -p /home/wanlipa/Desktop/Nodejs/MOOCA
WORKDIR /home/wanlipa/Desktop/Nodejs/MOOCA

COPY package.json /home/wanlipa/Desktop/Nodejs/MOOCA
RUN npm install

COPY . /home/wanlipa/Desktop/Nodejs/MOOCA

EXPOSE 3000

CMD ["npm", "start"]