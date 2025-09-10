# setup-bff-proxy.ps1
# Expose BFF
# How to run: powershell -ExecutionPolicy Bypass -File .\setup-bff-proxy.ps1 -WindowsIp <WindowsIp> -Port 3000

param(
    [Parameter(Mandatory = $true)]
    [string]$WindowsIp,  # IP da máquina Windows na rede local
    [int]$Port = 3000    # Porta do BFF
)

Write-Output "✅ Usando Windows IP: $WindowsIp"

# 1. Remove old rule (if exists)
netsh interface portproxy delete v4tov4 listenport=$Port listenaddress=$WindowsIp 2>$null

# 2. Adds new portproxy rule (WindowsIP:Port → 127.0.0.1:Port)
netsh interface portproxy add v4tov4 listenport=$Port listenaddress=$WindowsIp connectport=$Port connectaddress=127.0.0.1

# 3. Allow the port through the firewall (TCP)
netsh advfirewall firewall add rule name="BFF $Port" dir=in action=allow protocol=TCP localport=$Port 2>$null

Write-Output "🚀 Port $Port is now exposed"
Write-Output "👉 # Access from your mobile via: http://${WindowsIp}:${Port}"
