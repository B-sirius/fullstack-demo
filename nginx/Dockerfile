# Use the official NGINX base image
FROM nginx:latest

# Copy custom configuration file to the container
COPY nginx.conf /etc/nginx/nginx.conf

# Expose the NGINX port
EXPOSE 80

# Start NGINX when the container starts
CMD ["nginx", "-g", "daemon off;"]