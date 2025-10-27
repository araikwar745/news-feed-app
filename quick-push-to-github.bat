@echo off
echo ===========================================
echo     PUSHING NEWS FEED APP TO GITHUB
echo ===========================================
echo.

echo Step 1: Creating/Updating remote...
echo.

set /p GITHUB_USERNAME="Enter your GitHub username: "
set REPO_URL=https://github.com/%GITHUB_USERNAME%/news-feed-app.git

echo.
echo Using repository URL: %REPO_URL%
echo.

git remote remove origin 2>nul
git remote add origin %REPO_URL%
git branch -M main

echo.
echo Step 2: Pushing to GitHub...
echo.

git push -u origin main

echo.
echo ===========================================
echo     SUCCESS! YOUR CODE IS ON GITHUB!
echo ===========================================
echo.
echo Your repository URL:
echo https://github.com/%GITHUB_USERNAME%/news-feed-app
echo.
pause

