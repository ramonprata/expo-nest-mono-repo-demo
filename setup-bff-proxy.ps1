# setup-bff-proxy.ps1
# Configure portproxy to expose the BFF running inside WSL on port 3000

# 1. Get the WSL IP using "hostname -I" inside Linux
$wslIp = wsl hostname -I | ForEach-Object { $_.Trim().Split(" ")[0] }

if (-not $wslIp) {
    Write-Error "❌ Could not get WSL IP."
    exit 1
}

Write-Output "✅ Detected WSL IP: $wslIp"

# 2. Remove old proxy rule (if it exists)
netsh interface portproxy delete v4tov4 listenport=3000 listenaddress=0.0.0.0 2>$null

# 3. Add new proxy rule: forward Windows port 3000 -> WSL port 3000
netsh interface portproxy add v4tov4 listenport=3000 listenaddress=0.0.0.0 connectport=3000 connectaddress=$wslIp

# 4. Allow port 3000 through Windows Firewall (ignore if rule already exists)
netsh advfirewall firewall add rule name="BFF 3000" dir=in action=allow protocol=TCP localport=3000 2>$null

Write-Output "🚀 Port 3000 is now exposed. Use http://<Your-Windows-IP>:3000 from your mobile device."
