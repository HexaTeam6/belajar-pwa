if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
    .then((reg) => console.log('service worker berhasil didaftarkan', reg))
    .catch((err) => console.log('service worker gagal didaftarkan', err));
}