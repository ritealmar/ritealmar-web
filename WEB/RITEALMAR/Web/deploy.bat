@echo off
echo Building project...
call npm run build
if %ERRORLEVEL% NEQ 0 (
    echo Build failed.
    pause
    exit /b %ERRORLEVEL%
)
echo Deploying to Cloudflare Pages...
npx wrangler pages deploy dist --project-name ritealmar
if %ERRORLEVEL% NEQ 0 (
    echo Deployment failed.
    pause
    exit /b %ERRORLEVEL%
)
echo Deployment successful!
pause
