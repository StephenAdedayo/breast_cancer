# Use Node.js base image
FROM node:20

# Install OpenJDK 17
RUN apt-get update && \
    apt-get install -y openjdk-17-jdk-headless && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Set working directory inside container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy everything from backend folder
COPY . .

# Create uploads folder
RUN mkdir -p utils/uploads && chmod -R 777 utils/uploads

# Compile WekaPredictor in ml folder
RUN javac -cp ml/weka.jar ml/WekaPredictor.java -d ml/

# Compile WekaPredictor in br folder
RUN javac -cp br/weka.jar br/WekaPredictor.java -d br/

# Expose backend port
EXPOSE 5050

# Start the backend server
CMD ["node", "server.js"]
