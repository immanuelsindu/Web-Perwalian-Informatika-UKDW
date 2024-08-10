// class Mahasiswa {
//     constructor(
//        nim,
//        nama
//     ) {
//         this.nim = nim;
//         this.nama = nama;
//     }
// }

class Mahasiswa {
  constructor(nim, nama, sks, ipk, sac, isCekal, status) {
    this.nama = nama;
    this.nim = nim;
    this.sks = sks;
    this.ipk = ipk;
    this.sac = sac;
    this.isCekal = isCekal;
    this.status = status;
  }
}

export default Mahasiswa;
