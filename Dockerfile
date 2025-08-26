# Use the official Node.js image as a base
FROM node:20

# Create and change to the app directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port that the app runs on
EXPOSE 8080

# Define the command to run the app
CMD ["npm", "start"]
