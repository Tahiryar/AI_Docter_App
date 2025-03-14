# Use an official Node.js runtime as a parent image
FROM node:22

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Run the app
CMD ["npm", "start"]