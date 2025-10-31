@echo off
echo ======================================================
echo    VERIFY YOUR ASSIGNMENT IS COMPLETE!
echo ======================================================
echo.
echo Opening verification links...
echo.

REM Open GitHub Repository
start https://github.com/araikwar745/news-feed-app

timeout /t 2 /nobreak >nul

REM Open Live Demo
start https://news-feed-app-ashish.netlify.app

timeout /t 2 /nobreak >nul

echo.
echo ======================================================
echo Links opened in your browser!
echo ======================================================
echo.
echo CHECKLIST:
echo [ ] GitHub shows your code
echo [ ] Live app loads with news
echo [ ] Search feature works
echo [ ] Categories work
echo [ ] Theme toggle works
echo [ ] Email is ready to send
echo.
echo If all checked, you're DONE!
echo.
echo To send email, open: FINAL_EMAIL_SUBMIT.txt
echo.
pause

