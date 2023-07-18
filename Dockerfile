# Get the base image of Node version 16
FROM node:16

# Get the latest version of Playwright
FROM mcr.microsoft.com/playwright:v1.35.1-focal

# Set the working directory
WORKDIR /app

# Copy package json
COPY "package*.json" /app/

# Install dependencies
RUN npm install

# Copy the rest of the files
COPY . /app/

# Run visual test so that we have base images
RUN npm run test_visual || npm run test_visual

# Entry point
ENTRYPOINT [ "npm", "run" ]

CMD ["test_all"]