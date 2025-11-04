console.log("berhasil terhubung!");

const inputNama = document.querySelector("#recipe-name");
const inputWaktu = document.querySelector("#prep-time");
const inputKesulitan = document.querySelector("#difficulty");
const inputKategori = document.querySelector("#recipe-category");
const inputDeskripsi = document.querySelector("#recipe-desc");

const previewNama = document.querySelector("#preview-name");
const previewWaktu = document.querySelector("#preview-time");
const previewKesulitan = document.querySelector("#preview-difficulty");
const previewKategori = document.querySelector("#preview-category");
const previewDeskripsi = document.querySelector("#preview-desc");

console.log(inputNama);
console.log(previewNama);

inputNama.addEventListener("input", function() {
    console.log("Pengguna mengetik nama resep");

    const teksNama = inputNama.value;

    if (teksNama === "") {
        previewNama.textContent = "Nama Resep Akan Muncul Di Sini";
    } else {
        previewNama.textContent = teksNama;
    }
});

inputWaktu.addEventListener("input", function() {
    const waktuInput = inputWaktu.value;

    if (waktuInput === "" || waktuInput === "0") {
        previewWaktu.textContent = "Waktu Persiapan: - menit";
    } else {
        previewWaktu.textContent = "Waktu Persiapan: " + waktuInput + " menit";
    }
});

inputKesulitan.addEventListener("input", function() {
    const nilai = inputKesulitan.value;
    let teksKesulitan = "";

    if (nilai === "1") {
        teksKesulitan = "Sangat Mudah";
    } else if (nilai === "2") {
        teksKesulitan = "Mudah";
    } else if (nilai === "3") {
        teksKesulitan = "Sedang";
    } else if (nilai === "4") {
        teksKesulitan = "Sulit";
    } else if (nilai === "5") {
        teksKesulitan = "Sangat Sulit";
    }

    previewKesulitan.textContent = "Tingkat Kesulitan: " + teksKesulitan;
});

inputKategori.addEventListener("input", function() {
    const isiKategori = inputKategori.value;

    if (isiKategori === "") {
        previewKategori.textContent = "Kategori: -";
    } else {
        previewKategori.textContent = "Kategori: " + isiKategori;
    }
});

inputDeskripsi.addEventListener("input", function() {
    const isiDeskripsi = inputDeskripsi.value;

    if (isiDeskripsi === "") {
        previewDeskripsi.textContent = "Deskripsi resep akan muncul di sini...";
    } else {
        previewDeskripsi.textContent = isiDeskripsi;
    }
});

console.log('selesai')