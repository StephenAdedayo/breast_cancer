# Use official Node image with Debian base
FROM node:20

# Install Java JDK
RUN apt-get update && \
    apt-get install -y openjdk-20-jdk-headless && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Verify Java path
RUN java -version

# Set working directory to backend
WORKDIR /usr/src/app/backend

# Copy package.json and package-lock.json
COPY backend/package*.json ./

# Install Node dependencies
RUN npm install

# Copy backend files
COPY backend/ ./

# Compile Java predictors
RUN javac ml/WekaPredictor.java -d ml/
RUN javac br/WekaPredictor.java -d br/

# Expose port
EXPOSE 5050

# Start server
CMD ["node", "server.js"]
