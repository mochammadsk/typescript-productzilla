// Informasi Pahlawan
let heroName: string = "Arion";
let heroAge: number = 30;
let isHeroReadyToFight: boolean = true;

// Sumber Daya Kerajaan
let gold: number = 5000;
let foodSupply: number = 120;
let soldiers: number = 200;

// Petualangan Pahlawan
let goldFromAdventure: number = 1500;
let experiencePoints: number = 75;

// Operasi matematika untuk menambah emas kerajaan
gold += goldFromAdventure;

// Variabel untuk menyimpan jumlah poin pengalaman
let heroExperience: number = experiencePoints;

function kurangiKesehatan(
  jumlahPrajurit: number,
  poinKesehatanHilang: number
): void {
  let healthPerSoldier: number = 100;

  let totalHealthLost = healthPerSoldier - poinKesehatanHilang;

  if (totalHealthLost <= jumlahPrajurit - healthPerSoldier) {
    console.log("Semua prajurit telah terluka parah dan tidak bisa bertarung.");
  } else {
    console.log(
      `Kesehatan prajurit berkurang sebanyak ${totalHealthLost} poin per-prajurit.`
    );
  }
}

// Rangkuman Misi Arion
function rangkumanMisi(): void {
  console.log("======= Rangkuman Misi Arion =======");
  console.log(`Nama Pahlawan = ${heroName}`);
  console.log(`Emas yang dikumpulkan = ${goldFromAdventure} keping`);
  console.log(`Poin pengalaman yang didapat = ${experiencePoints} XP`);
  console.log("====================================");
}

// Memanggil fungsi untuk menampilkan rangkuman misi Arion
rangkumanMisi();

kurangiKesehatan(100, 8);
