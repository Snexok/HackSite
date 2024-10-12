FROM maven:3.8.3-openjdk-17 as build
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:17-jdk-slim
WORKDIR /app
COPY --from=build /target/hack-site.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
