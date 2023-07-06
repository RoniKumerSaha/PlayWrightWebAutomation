# Base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the test files and configuration files to the working directory
COPY tests/ ./tests/
COPY playwright.config.js ./

# Set the entry point command
CMD ["npm", "test"]
