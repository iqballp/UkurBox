function hitung() {
    const panjang = parseFloat(document.getElementById('panjang').value);
    const lebar = parseFloat(document.getElementById('lebar').value);
    
    if (isNaN(panjang) || isNaN(lebar)) {
      alert('Harap masukkan angka yang valid');
      return;
    }
    
    // Hitung keliling dari alas (2 * (panjang + lebar))
    const kelilingAlas = 2 * (panjang + lebar);
    
    // Hitung ukuran panjang dan lebar alas ditambah 2 setiap sisi, dikurang 0.5
    const panjangAlas = panjang + 2 - 0.5;
    const lebarAlas = lebar + 2 - 0.5;
    
    // Tampilkan hasil
    document.getElementById('kelilingAlas').textContent = `Keliling alas: ${kelilingAlas}`;
    document.getElementById('ukuranAlas').textContent = `Ukuran alas (Panjang: ${panjangAlas}, Lebar: ${lebarAlas})`;
  }