#!/bin/bash

echo "Installing BOBAN Next.js PWA project dependencies..."
echo

echo "Checking Node.js installation..."
if ! command -v node &> /dev/null; then
    echo "Error: Node.js is not installed or not in PATH"
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

node --version
echo

echo "Installing dependencies..."
if npm install; then
    echo
    echo "Installation completed successfully!"
elif command -v yarn &> /dev/null && yarn install; then
    echo
    echo "Installation completed successfully with yarn!"
else
    echo
    echo "Both npm and yarn failed. Please check your Node.js installation."
    exit 1
fi

echo
echo "To start the development server, run:"
echo "  npm run dev"
echo
echo "Or with yarn:"
echo "  yarn dev"
echo
