function perhitunganLuas(){
    let alas = document.getElementById("input-alas").value;
    let tinggi = document.getElementById("input-tinggi").value;
    let hasilPerkalian = 0.5 * parseInt(alas) * parseInt(tinggi);
    document.getElementById("Hasil1").innerHTML = `Luas Segitiga = ${hasilPerkalian} <br><br>Perhitungan: <br>L = 1/2 x a x t <br>L = 1/2 x ${alas} x ${tinggi}<br>L = ${hasilPerkalian}`;
    if (alas === "" || tinggi === "")
        document.getElementById("Hasil1").innerHTML = `<b>Hasil Invalid. Harap masukkan nilai pada textbox</b>`;
}

function resetForm1() {
    document.getElementById("Hasil1").textContent = "";
    document.getElementById("input-alas").value = "";
    document.getElementById("input-tinggi").value = "";
}

function perhitunganKeliling(){
    let sisiA = document.getElementById("input-sisiA").value;
    let sisiB = document.getElementById("input-sisiB").value;
    let sisiC = document.getElementById("input-sisiC").value;
    let hasilPenjumlahan = parseInt(sisiA) + parseInt(sisiB) + parseInt(sisiC);
    document.getElementById("Hasil2").innerHTML = `Keliling Segitiga = ${hasilPenjumlahan} <br><br>Perhitungan: <br>K = s1 + s2 + s3<br> K = ${sisiA} + ${sisiB} + ${sisiC}<br>K = ${hasilPenjumlahan}`;
    if (sisiA === "" || sisiB === "" || sisiC === "")
        document.getElementById("Hasil2").innerHTML = `<b>Hasil Invalid. Harap masukkan nilai pada textbox</b>`;

        
}

function resetForm2() {
    document.getElementById("Hasil2").textContent = "";
    document.getElementById("input-sisiA").value = "";
    document.getElementById("input-sisiB").value = "";
    document.getElementById("input-sisiC").value = "";
}