```
@echo off
setlocal EnableDelayedExpansion

echo ===========================================
echo       LISTANDO OS DISCOS DISPONÍVEIS
echo ===========================================
echo.
echo >>> Anote o número do seu pendrive com base na lista abaixo:
echo.

:: Gera a lista de discos com diskpart
echo list disk > listdisks.txt
diskpart /s listdisks.txt
del listdisks.txt

echo.
set /p DISK_NUM=Digite o número do disco que deseja formatar (ex: 1): 

echo.
echo >>> VOCÊ SELECIONOU O DISCO: %DISK_NUM%
echo >>> TODAS AS PARTIÇÕES SERÃO APAGADAS!
echo.
set /p CONFIRMA=Tem certeza que deseja continuar? (S/N): 

if /I not "%CONFIRMA%"=="S" (
    echo Operação cancelada.
    pause
    exit /b
)

echo.
echo Iniciando formatação do disco %DISK_NUM%...

:: Cria script temporário do diskpart
(
echo select disk %DISK_NUM%
echo clean all
echo create partition primary
echo format fs=fat32 quick
echo assign
echo exit
) > diskpart_script.txt

:: Executa o script
diskpart /s diskpart_script.txt

:: Remove temporário
del diskpart_script.txt

echo.
echo =============================
echo     FORMATAÇÃO CONCLUÍDA
echo =============================
pause
```
