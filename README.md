# JavaScript Calculator

A simple web-based calculator built with JavaScript, HTML, and CSS.

![Screenshot](./screenshot.png)

## 🐳 Run with Docker

1. Run application using docker compose

```bash
docker compose up -d
```

2. Open [http://localhost:8080](http://localhost:8080) in your browser.

## 📦 Build Image and Run Container

1. Build the Docker image:
   
   ```bash
   docker image build -t js-calculator .
   ```

2. Run the container:
   
   ```bash
   docker container run -d --name js-cal -p 8080:80 js-calculator
   ```

3. Open [http://localhost:8080](http://localhost:8080) in your browser.
