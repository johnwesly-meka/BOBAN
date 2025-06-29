@echo off
echo Installing BOBAN Next.js PWA project dependencies...
echo.

echo Checking Node.js installation...
node --version
if %errorlevel% neq 0 (
    echo Error: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo.
echo Installing dependencies...
npm install

if %errorlevel% neq 0 (
    echo.
    echo npm install failed. Trying with yarn...
    yarn install
    
    if %errorlevel% neq 0 (
        echo.
        echo Both npm and yarn failed. Please check your Node.js installation.
        pause
        exit /b 1
    )
)

echo.
echo Installation completed successfully!
echo.
echo To start the development server, run:
echo   npm run dev
echo.
echo Or with yarn:
echo   yarn dev
echo.
pause
