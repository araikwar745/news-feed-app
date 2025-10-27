# PowerShell script to push to GitHub
# After creating your GitHub repository, update the REPO_URL below and run this script

Write-Host "====================================" -ForegroundColor Cyan
Write-Host "Pushing to GitHub..." -ForegroundColor Cyan
Write-Host "====================================" -ForegroundColor Cyan

# UPDATE THIS URL with your GitHub repository URL
$REPO_URL = "https://github.com/araikwar745/news-feed-app.git"

Write-Host ""
Write-Host "Step 1: Adding remote origin..." -ForegroundColor Yellow
git remote remove origin 2>$null
git remote add origin $REPO_URL

Write-Host ""
Write-Host "Step 2: Setting branch to main..." -ForegroundColor Yellow
git branch -M main

Write-Host ""
Write-Host "Step 3: Pushing to GitHub..." -ForegroundColor Yellow
git push -u origin main

Write-Host ""
Write-Host "====================================" -ForegroundColor Green
Write-Host "✅ Done! Your code is on GitHub!" -ForegroundColor Green
Write-Host "====================================" -ForegroundColor Green

