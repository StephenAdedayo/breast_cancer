# Use official Node image with Debian base
FROM node:20

# Install Java JDK for Weka
RUN apt-get update && apt-get install -y default-jdk && apt-get clean

# Set working directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install Node dependencies
RUN npm install

# Copy all backend files
COPY . .

# Expose port your Node server uses
EXPOSE 5050

# Compile both Java predictors
RUN javac ml/WekaPredictor.java -d ml/
RUN javac br/WekaPredictor.java -d br/

# Start the Node server
CMD ["node", "server.js"]
