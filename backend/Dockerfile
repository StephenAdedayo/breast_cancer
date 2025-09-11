# Use Node.js 20 image (Debian-based)
FROM node:20

# Install OpenJDK 11 (needed for Weka)
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

# Create uploads folder for ARFF files
RUN mkdir -p /usr/src/app/backend/utils/uploads
RUN chmod -R 777 /usr/src/app/backend/utils/uploads

# Copy package files and install Node.js dependencies
COPY package*.json ./
RUN npm install

# Copy all backend source code
COPY . ./

# Compile Java Weka predictor classes
RUN javac ml/WekaPredictor.java -d ml/
RUN javac br/WekaPredictor.java -d br/

# Expose backend port
EXPOSE 5050

# Start backend server
CMD ["node", "server.js"]
