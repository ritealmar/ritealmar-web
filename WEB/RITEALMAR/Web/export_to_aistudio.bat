@echo off
rem ==== Export current project to aistudio folder ==== 
set "PROJECT_ROOT=%~dp0"
set "DEST=%PROJECT_ROOT%aistudio"

rem Remove existing destination if present
if exist "%DEST%" (
  echo Removing existing aistudio folder...
  rmdir /s /q "%DEST%"
)

rem Create destination folder
mkdir "%DEST%"

rem Copy source code and assets
xcopy "%PROJECT_ROOT%src" "%DEST%\src" /E /I /H /Y
xcopy "%PROJECT_ROOT%public" "%DEST%\public" /E /I /H /Y

rem Copy configuration files
xcopy "%PROJECT_ROOT%package.json" "%DEST%\" /Y
xcopy "%PROJECT_ROOT%vite.config.ts" "%DEST%\" /Y
xcopy "%PROJECT_ROOT%tsconfig.json" "%DEST%\" /Y
xcopy "%PROJECT_ROOT%README.md" "%DEST%\" /Y

rem Optional: copy .env.example for environment setup
if exist "%PROJECT_ROOT%.env.example" (
  xcopy "%PROJECT_ROOT%.env.example" "%DEST%\" /Y
)

echo Export completed. Project files are now in "%DEST%".
pause
