document.getElementById('loginForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorElement = document.getElementById('error-message');

  const validUsername = "kelompok8";
  const validPassword = "gitajinggarosita";

  if (username === validUsername && password === validPassword) {
    window.location.href = "dashboard.html";
  } else {
    errorElement.textContent = "Username atau password salah!";
  }
});

let lastTimestamp = null;

function fetchData() {
  fetch("http://localhost:3000/api/data?apikey=kelompok8iotkey")
    .then((res) => res.json())
    .then((data) => {
      const last = data[data.length - 1]; 
      lastTimestamp = new Date(last.timestamp);

      // Tampilkan nilai sensor
      document.getElementById("pressure-value").textContent = `${last.pressure} psi`;
      document.getElementById("humidity-value").textContent = `${last.humidity} %`;
      document.getElementById("sound-value").textContent = `${last.sound} dB`;
      document.getElementById("windspeed-value").textContent = `${last.windspeed} m/s`;
      })
     .catch(err => console.error("Gagal mengambil data:", err));
}
      function updateClock() {
  if (lastTimestamp) {
    // Tambahkan 1 detik tiap kali fungsi ini dipanggil
    lastTimestamp.setSeconds(lastTimestamp.getSeconds() + 1);

      // Tampilkan waktu
      const waktuFormatted = lastTimestamp.toLocaleString('id-ID', {
        timeZone: 'Asia/Jakarta',
        hour12: false
      });

      document.getElementById("timestamp-value").textContent = `${waktuFormatted}`;
    }
}
      
fetchData(); // jalankan fungsi
setInterval(fetchData, 3000); // Ambil data baru tiap 3 detik
setInterval(updateClock, 1000); // Update detik tiap 1 detik

function togglePressure() {
  const btn = document.getElementById('pressure-button');
  const isOn = btn.textContent.includes('ON');

  if (isOn) {
    btn.textContent = 'Pressure OFF';
    btn.classList.remove('bg-indigo-700');
    btn.classList.add('bg-red-500');
    addLog('pressure dimatikan');
  } else {
    btn.textContent = 'Pressure ON';
    btn.classList.remove('bg-red-500');
    btn.classList.add('bg-indigo-700');
    addLog('pressure dinyalakan');
  }
}

function toggleHumidity() {
  const btn = document.getElementById('humidity-button');
  const isOn = btn.textContent.includes('ON');

  if (isOn) {
    btn.textContent = 'Hygrometer OFF';
    btn.classList.remove('bg-indigo-700');
    btn.classList.add('bg-red-500');
    addLog('hygrometer dimatikan');
  } else {
    btn.textContent = 'Hygrometer ON';
    btn.classList.remove('bg-red-500');
    btn.classList.add('bg-indigo-700');
    addLog('hygrometer dinyalakan');
  }
}

function toggleSound() {
  const btn = document.getElementById('sound-button');
  const isOn = btn.textContent.includes('ON');

  if (isOn) {
    btn.textContent = 'Soundmeter OFF';
    btn.classList.remove('bg-indigo-700');
    btn.classList.add('bg-red-500');
    addLog('soundmeter dimatikan');
  } else {
    btn.textContent = 'Soundmeter ON';
    btn.classList.remove('bg-red-500');
    btn.classList.add('bg-indigo-700');
    addLog('soundmeter dinyalakan');
  }
}

function toggleTimestamp() {
  const btn = document.getElementById('timestamp-button');
  const isOn = btn.textContent.includes('ON');

  if (isOn) {
    btn.textContent = 'Timestamp OFF';
    btn.classList.remove('bg-indigo-700');
    btn.classList.add('bg-red-500');
    addLog('Timestamp dimatikan');
  } else {
    btn.textContent = 'Timestamp ON';
    btn.classList.remove('bg-red-500');
    btn.classList.add('bg-indigo-700');
    addLog('Timestamp dinyalakan');
  }
}

function toggleWindspeed() {
  const btn = document.getElementById('windspeed-button');
  const isOn = btn.textContent.includes('ON');

  if (isOn) {
    btn.textContent = 'Windspeed OFF';
    btn.classList.remove('bg-indigo-700');
    btn.classList.add('bg-red-500');
    addLog('Windspeed dimatikan');
  } else {
    btn.textContent = 'Windspeed ON';
    btn.classList.remove('bg-red-500');
    btn.classList.add('bg-indigo-700');
    addLog('Windspeed dinyalakan');
  }
}

// Log Aktivitas
function addLog(message) {
  const logElement = document.getElementById('activity-log');
  const timestamp = new Date().toLocaleTimeString();
  logElement.innerHTML = `<p>[${timestamp}] ${message}</p>` + logElement.innerHTML;
}

// Inisialisasi (Hapus atau definisikan fungsi ini jika tidak ada)
addLog('Sistem IoT berjalan!');
