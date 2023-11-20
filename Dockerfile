# Use an official Node runtime as a parent image
FROM node:18-alpine

# Set the working directory
WORKDIR /usr/src/app

# Install dependencies
COPY . .
RUN npm install

# Bundle app source
COPY . .

# Copy the start script
RUN chmod +x ./start.sh

# Build the Next.js app
RUN npm run build

# Your app and json-server will use these ports
EXPOSE 3000 3001

# Define the command to run your app using CMD which defines your runtime
CMD [ "./start.sh" ]

