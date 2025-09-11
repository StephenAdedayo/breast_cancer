# Use official Node.js 20 image (Debian-based)
FROM node:20

# Install OpenJDK 11 (stable, works with Weka)
RUN apt-get update && \
    apt-get install -y openjdk-11-jdk-headless && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Set JAVA_HOME and update PATH
ENV JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64
ENV PATH="$JAVA_HOME/bin:$PATH"

# Verify Java installation
RUN java -version

# Set working directory
WORKDIR /usr/src/app/backend

# Create uploads folders for ARFF files
RUN mkdir -p /usr/src/app/backend/utils/uploads
RUN chmod -R 777 /usr/src/app/backend/utils/uploads

# Copy package.json and package-lock.json first
COPY backend/package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy backend source code
COPY backend/ ./

# Compile Java Weka predictor classes
RUN javac ml/WekaPredictor.java -d ml/
RUN javac br/WekaPredictor.java -d br/

# Expose backend port
EXPOSE 5050

# Start Node.js server
CMD ["node", "server.js"]
