@ECHO OFF
SET output = %USERPROFILE%\Desktop\Art
FOR /L %%G IN (1,1,50) DO (
    timeout 2 > nul
    curl https://thisartworkdoesnotexist.com/ > %USERPROFILE%\Desktop\Art\%%G.jpg
)