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

:selecionarSistema
echo.
echo >>> Escolha o sistema de arquivos para a formatação:
echo [1] FAT32
echo [2] NTFS
set /p FILESYS=Digite 1 ou 2: 

if "%FILESYS%"=="1" (
    set FILESYSTEM=fat32
) else if "%FILESYS%"=="2" (
    set FILESYSTEM=ntfs
) else (
    echo Opção inválida. Tente novamente.
    goto selecionarSistema
)

:selecionarLimpeza
echo.
echo >>> Escolha o tipo de limpeza a ser feita:
echo [1] Limpeza rápida (clean) — apaga apenas as partições
echo [2] Limpeza completa (clean all) — apaga todos os dados, pode demorar vários minutos
set /p CLEANOP=Digite 1 ou 2: 

if "%CLEANOP%"=="1" (
    set CLEAN_CMD=clean
) else if "%CLEANOP%"=="2" (
    set CLEAN_CMD=clean all
) else (
    echo Opção inválida. Tente novamente.
    goto selecionarLimpeza
)

echo.
echo >>> VOCÊ SELECIONOU O DISCO: %DISK_NUM%
echo >>> SISTEMA DE ARQUIVOS: %FILESYSTEM%
echo >>> TIPO DE LIMPEZA: %CLEAN_CMD%
echo >>> TODAS AS PARTIÇÕES E DADOS SERÃO APAGADOS!
echo.
set /p CONFIRMA=Tem certeza que deseja continuar? (S/N): 

if /I not "%CONFIRMA%"=="S" (
    echo Operação cancelada.
    pause
    exit /b
)

echo.
echo Iniciando formatação do disco %DISK_NUM% com %FILESYSTEM% (%CLEAN_CMD%)...

:: Cria script temporário do diskpart
(
echo select disk %DISK_NUM%
echo %CLEAN_CMD%
echo create partition primary
echo format fs=%FILESYSTEM% quick
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
