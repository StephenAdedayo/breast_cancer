# Use official Node image with Debian base
FROM node:20

# Install Java JDK for Weka
RUN apt-get update && \
    apt-get install -y default-jdk && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Set JAVA_HOME and add to PATH
ENV JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64
ENV PATH="$JAVA_HOME/bin:$PATH"

# Set working directory to backend
WORKDIR /usr/src/app/backend

# Copy package.json and package-lock.json
COPY backend/package*.json ./

# Install Node dependencies
RUN npm install

# Copy all backend files
COPY backend/ ./

# Compile Java predictors
RUN javac ml/WekaPredictor.java -d ml/
RUN javac br/WekaPredictor.java -d br/

# Expose port
EXPOSE 5050

# Start the Node server
CMD ["node", "server.js"]
