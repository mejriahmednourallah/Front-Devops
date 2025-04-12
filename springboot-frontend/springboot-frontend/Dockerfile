# Use Node 14 as the base image (or choose a version that fits your project)
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 4200 where the Angular app runs
EXPOSE 4200

# Run the Angular app
CMD ["npm", "serve"]
