# Use Node.js 20 as base
FROM node:20

# Install Java (we’ll use OpenJDK 17 since 11 may not be available)
RUN apt-get update && \
    apt-get install -y openjdk-17-jdk-headless && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Set working directory inside container
WORKDIR /usr/src/app/backend

# Create uploads folder and set permissions
RUN mkdir -p utils/uploads && chmod -R 777 utils/uploads

# Copy package.json and package-lock.json first (for caching npm install)
COPY package*.json ./

# Install Node dependencies
RUN npm install

# Copy the rest of the backend code
COPY . ./

# Compile Java Weka classes with weka.jar in classpath
RUN javac -cp weka.jar ml/WekaPredictor.java -d ml/
RUN javac -cp weka.jar br/WekaPredictor.java -d br/

# Expose the port your Node app uses
EXPOSE 5050

# Start the Node server
CMD ["node", "server.js"]
