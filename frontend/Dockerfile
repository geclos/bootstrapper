FROM node:12.3.0

# Create working directory
RUN mkdir /app
WORKDIR /app

# Copy dependency definitions
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock

# Install dependencies
RUN yarn install

# Copy content from host folder
COPY . /app

# Start development server
CMD ['npm', 'start']

