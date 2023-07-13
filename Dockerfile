# Get the base image of Node version 16
FROM node:16

# Get the latest version of Playwright
FROM mcr.microsoft.com/playwright:v1.35.1-focal

# Set the working directory
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# Copy package.json and package-lock.json to the working directory
COPY . .

# Install dependencies
RUN npm install
#RUN npx playwright install

# Copy the test files and configuration files to the working directory

