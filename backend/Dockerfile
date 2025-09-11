# Use official Node image with Debian base
FROM node:20

# Install Java JDK for Weka
RUN apt-get update && apt-get install -y default-jdk && apt-get clean

# Set working directory
WORKDIR /usr/src/app

# Copy package files and install Node dependencies
COPY package*.json ./
RUN npm install

# Copy all backend files
COPY . .

# Compile both Java predictors
RUN javac backend/ml/WekaPredictor.java -d backend/ml/
RUN javac backend/br/WekaPredictor.java -d backend/br/

# Expose port your Node server uses
EXPOSE 5050

# Start the Node server
CMD ["node", "backend/server.js"]
