// Buatlah 25 variable dalam Typescript beserta tipe variable nya dan harus mencakup semua tipe data primitif pada typescript

// String: Menyimpan data teks
// Number: Menyimpan nilai numerik (bilangan bulat atau desimal)
// Boolean: Menyimpan nilai benar (true) atau salah (false)
// Null: Menyimpan nilai yang secara eksplisit tidak ada atau tidak terisi
// Undefined: Menyimpan variabel yang belum diinisialisasi
// Symbol: Tipe data unik dan immutable
// BigInt: Menyimpan bilangan bulat yang sangat besar

let list: string = "Data";

console.log(`${list} 1`);
function data1(): string {
  let fullName: string = "Mochammad Syahrul Kurniawan";
  let userName: symbol = Symbol("arul");
  let birthPlace: string = "Probolinggo";
  let dateOfBirth: number[] = [18, 2, 2003];
  let dateOfBirth2: bigint = 18022003n;
  let address: string = "Jl. Bukit Indah, Gg. VI, Baktisraga, Singaraja, Bali";
  let isStudent: boolean = true;
  let university: string = "Universitas Pendidikan Ganehsa";
  let semester: number | string = "7 (Tujuh)";
  let isMarried: boolean = false;
  let emptyValue: null = null;
  let uninitializedValue: undefined;

  return `
        Nama Lengkap: ${fullName}
        Nama Pengguna: ${userName.toString()}
        Tempat Lahir: ${birthPlace}
        Tanggal Lahir: ${dateOfBirth.join("-")}
        Tanggal Lahir: ${dateOfBirth2}
        Alamat: ${address}
        Mahasiswa: ${isStudent ? "Ya" : "Tidak"}
        Universitas: ${university}
        Semester: ${semester}
        Menikah: ${isMarried ? "Ya" : "Tidak"}
        Nilai Kosong: ${emptyValue}
        Nilai Belum Diinisialisasi: ${uninitializedValue}
    `;
}

console.log(data1());

console.log(
  "==========================================================================="
);

console.log(`${list} 2`);
function data2(): string {
  let fullName: string = "Amelia Rizky Yuniar";
  let userName: symbol = Symbol("ameng");
  let birthPlace: string = "Banyuwangi";
  let dateOfBirth: number[] = [22, 12, 2004];
  let dateOfBirth2: bigint = 22122004n;
  let address: string = "Jl. Bukit Indah, Gg. VI, Baktisraga, Singaraja, Bali";
  let isStudent: boolean = true;
  let university: string = "Universitas Pendidikan Ganehsa";
  let semester: number | string = "3 (Tiga)";
  let isMarried: boolean = false;
  let emptyValue: null = null;
  let uninitializedValue: undefined;

  return `
          Nama Lengkap: ${fullName}
          Nama Pengguna: ${userName.toString()}
          Tempat Lahir: ${birthPlace}
          Tanggal Lahir: ${dateOfBirth.join("-")}
          Tanggal Lahir: ${dateOfBirth2}
          Alamat: ${address}
          Mahasiswa: ${isStudent ? "Ya" : "Tidak"}
          Universitas: ${university}
          Semester: ${semester}
          Menikah: ${isMarried ? "Ya" : "Tidak"}
          Nilai Kosong: ${emptyValue}
          Nilai Belum Diinisialisasi: ${uninitializedValue}
      `;
}

console.log(data2());

/* ================================================================= */
// Buatlah method untuk melakukan:
// 1. Penjumlahan (menggunakan minimal 2 parameter)
// 2. Pengurangan (menggunakan minimal 2 parameter)
// 3. Perkalian (menggunakan minimal 2 parameter)
// 4. Pembagian (menggunakan minimal 2 parameter)

// Method penjumlahan
function tambah(a: number, b: number): number {
  return a + b;
}

// Method pengurangan
function kurang(a: number, b: number): number {
  return a - b;
}

// Method perkalian
function kali(a: number, b: number): number {
  return a * b;
}

// Method pembagian
function bagi(a: number, b: number): number {
  // Menangani pembagian dengan nilai nol
  if (b === 0) {
    throw new Error("Pembagi tidak boleh nol!");
  }
  return a / b;
}

// Contoh penggunaan
const num1 = 10;
const num2 = 5;

console.log(
  "==========================================================================="
);

console.log("METHODE HITUNG BILANGAN\n");

console.log(`Bilangan Pertama = ${num1}`);
console.log(`Bilangan Kedua = ${num2}\n`);

console.log("Hasil dari operasi hitungnya adalah:");
console.log(`1. Penjumlahan: ${tambah(num1, num2)}`);
console.log(`2. Pengurangan: ${kurang(num1, num2)}`);
console.log(`3. Perkalian: ${kali(num1, num2)}`);
console.log(`4. Pembagian: ${bagi(num1, num2)}`);
