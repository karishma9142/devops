FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000    
# all of the above run when we build the image

# => when we run the image 
CMD ["node", "index.js"]      