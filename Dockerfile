# Use the official Node.js 22 image as the base
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and yarn.lock files first to leverage Docker cache
COPY package.json ./

# Install dependencies
RUN yarn

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN yarn build

# Expose port 3000 to the outside world
EXPOSE 3000

# Start the Next.js application
CMD ["yarn", "start"]
