# Script de instalação VB-CABLE e SkiEQ
# Executa como Administrador

# Verifica se está executando como administrador
$isAdmin = ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
if (-not $isAdmin) {
    Write-Host "Este script precisa ser executado como Administrador!" -ForegroundColor Red
    Start-Process powershell -Verb RunAs -ArgumentList "-NoProfile -ExecutionPolicy Bypass -File `"$PSCommandPath`""
    Exit
}

Write-Host "=== Iniciando instalação ===" -ForegroundColor Cyan

# ===== PARTE 1: VB-CABLE =====
Write-Host "`n[1/6] Baixando VB-CABLE..." -ForegroundColor Yellow

$vbCableUrl = "https://download.vb-audio.com/Download_CABLE/VBCABLE_Driver_Pack45.zip"
$vbCableTempZip = "$env:TEMP\VBCABLE.zip"
$vbCableTempFolder = "$env:TEMP\VBCABLE"

# Baixa VB-CABLE
Invoke-WebRequest -Uri $vbCableUrl -OutFile $vbCableTempZip -UseBasicParsing
Write-Host "[OK] VB-CABLE baixado!" -ForegroundColor Green

# Extrai VB-CABLE
Write-Host "`n[2/6] Extraindo VB-CABLE..." -ForegroundColor Yellow
Expand-Archive -Path $vbCableTempZip -DestinationPath $vbCableTempFolder -Force
Write-Host "[OK] VB-CABLE extraído!" -ForegroundColor Green

# Instala VB-CABLE
Write-Host "`n[3/6] Instalando VB-CABLE..." -ForegroundColor Yellow
$setupExe = Get-ChildItem -Path $vbCableTempFolder -Filter "*Setup*.exe" -Recurse | Select-Object -First 1

if ($setupExe) {
    Start-Process -FilePath $setupExe.FullName -ArgumentList "-i", "-h" -Wait
    Write-Host "[OK] VB-CABLE instalado!" -ForegroundColor Green
} else {
    Write-Host "[ERRO] Arquivo de instalação não encontrado!" -ForegroundColor Red
}

# ===== PARTE 2: EqualizadorSkibidi =====
Write-Host "`n[4/6] Baixando EqualizadorSkibidi..." -ForegroundColor Yellow

# Busca o último release no GitHub
$repoUrl = "https://api.github.com/repos/GrafenoTTK/EqualizadorSkibidi/releases/latest"
$headers = @{
    "User-Agent" = "PowerShell"
}

try {
    $latestRelease = Invoke-RestMethod -Uri $repoUrl -Headers $headers
    $asset = $latestRelease.assets[0]
    $downloadUrl = $asset.browser_download_url
    
    Write-Host "Versão encontrada: $($latestRelease.tag_name)" -ForegroundColor Cyan
    Write-Host "Baixando: $($asset.name)" -ForegroundColor Cyan
    
    $skiEqZip = "$env:TEMP\EqualizadorSkibidi.zip"
    Invoke-WebRequest -Uri $downloadUrl -OutFile $skiEqZip -UseBasicParsing
    Write-Host "[OK] EqualizadorSkibidi baixado!" -ForegroundColor Green
    
} catch {
    Write-Host "[ERRO] Não foi possível baixar o último release!" -ForegroundColor Red
    Write-Host "Erro: $_" -ForegroundColor Red
    Pause
    Exit
}

# Cria diretório de destino
Write-Host "`n[5/6] Extraindo EqualizadorSkibidi..." -ForegroundColor Yellow
$destinationPath = "C:\GrafenoTTK\SkiEQ"

if (-not (Test-Path $destinationPath)) {
    New-Item -Path $destinationPath -ItemType Directory -Force | Out-Null
}

# Extrai com senha usando 7-Zip (se disponível) ou tenta método alternativo
$7zipPath = "C:\Program Files\7-Zip\7z.exe"
$password = "SBIDI90874210939213_98702893129032KSDUIH09848JODI9J9DSU98A"

if (Test-Path $7zipPath) {
    # Usa 7-Zip se estiver instalado
    & $7zipPath x $skiEqZip "-o$destinationPath" "-p$password" -aoa
    Write-Host "[OK] EqualizadorSkibidi extraído!" -ForegroundColor Green
} else {
    # Tenta instalar 7Zip4Powershell
    Write-Host "7-Zip não encontrado. Tentando instalar módulo 7Zip4Powershell..." -ForegroundColor Yellow
    
    try {
        Install-Module -Name 7Zip4Powershell -Force -Scope CurrentUser -ErrorAction Stop
        Import-Module 7Zip4Powershell
        
        $securePassword = ConvertTo-SecureString -String $password -AsPlainText -Force
        Expand-7Zip -ArchiveFileName $skiEqZip -TargetPath $destinationPath -SecurePassword $securePassword
        Write-Host "[OK] EqualizadorSkibidi extraído!" -ForegroundColor Green
    } catch {
        Write-Host "[ERRO] Não foi possível extrair o arquivo com senha!" -ForegroundColor Red
        Write-Host "Por favor, instale o 7-Zip manualmente ou extraia o arquivo." -ForegroundColor Red
        Pause
        Exit
    }
}

# ===== PARTE 3: Criar atalho =====
Write-Host "`n[6/6] Criando atalho na área de trabalho..." -ForegroundColor Yellow

$exePath = "$destinationPath\Skibididibid.exe"
$desktopPath = [Environment]::GetFolderPath("Desktop")
$shortcutPath = "$desktopPath\SkiEQ.lnk"

$WshShell = New-Object -ComObject WScript.Shell
$Shortcut = $WshShell.CreateShortcut($shortcutPath)
$Shortcut.TargetPath = $exePath
$Shortcut.WorkingDirectory = $destinationPath
$Shortcut.Save()

Write-Host "[OK] Atalho criado!" -ForegroundColor Green

# ===== PARTE 4: Executar e fechar =====
Write-Host "`n=== Iniciando SkiEQ ===" -ForegroundColor Cyan

if (Test-Path $exePath) {
    Start-Process -FilePath $exePath
    Write-Host "[OK] SkiEQ iniciado!" -ForegroundColor Green
    Start-Sleep -Seconds 2
    Write-Host "`nFechando PowerShell..." -ForegroundColor Cyan
    Exit
} else {
    Write-Host "[ERRO] Executável não encontrado em: $exePath" -ForegroundColor Red
    Pause
}
