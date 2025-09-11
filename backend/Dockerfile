FROM node:20

# Install Java 17
RUN apt-get update && \
    apt-get install -y openjdk-17-jdk-headless && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

ENV JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
ENV PATH="$JAVA_HOME/bin:$PATH"

# Verify Java
RUN java -version

WORKDIR /usr/src/app/backend
RUN mkdir -p utils/uploads
RUN chmod -R 777 utils/uploads

COPY package*.json ./
RUN npm install

COPY . ./

RUN javac ml/WekaPredictor.java -d ml/
RUN javac br/WekaPredictor.java -d br/

EXPOSE 5050
CMD ["node", "server.js"]
