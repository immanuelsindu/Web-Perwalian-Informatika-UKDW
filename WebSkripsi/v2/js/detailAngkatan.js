class Mahasiswa{
    constructor(nama, nim, sks, ipk, sac, isCekal, status ){
      this.nama = nama;
      this.nim = nim;
      this.sks = sks;
      this.ipk = ipk;
      this.sac = sac;
      this.isCekal = isCekal;
      this.status = status;
    }
}
//tool tip
$(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});

var app = Vue.createApp({
    data(){
        return{
            filterMahasiswa:"",
            listMahasiswa:[
                new Mahasiswa("Immanuel Sindu Kristian Pratama", "71190426", "100","3.84",10,"Cekal Biro 1","Aktif"),
                new Mahasiswa("Immanuel Sindu Kristian Pratama", "71190426", "100","3.84",50,"nonCekal","Aktif"),
                new Mahasiswa("Immanuel Sindu Kristian Pratama", "71190426", "100","3.84",50,"nonCekal","Lulus"),
                new Mahasiswa("Immanuel Sindu Kristian Pratama", "71190426", "100","3.84",50,"nonCekal","Lulus"),
                new Mahasiswa("Immanuel Sindu Kristian Pratama", "71190426", "100","3.84",50,"nonCekal","Aktif"),
                new Mahasiswa("Immanuel Sindu Kristian Pratama", "71190426", "100","3.84",50,"nonCekal","Aktif"),
                new Mahasiswa("Immanuel Sindu Kristian Pratama", "71190426", "100","3.84",10,"Cekal Perpustakaan","Aktif"),
                new Mahasiswa("Immanuel Sindu Kristian Pratama", "71190426", "100","3.84",50,"Cekal Perpustakaan","Dropped Out"),
                new Mahasiswa("Immanuel Sindu Kristian Pratama", "71190426", "100","3.84",50,"nonCekal","Aktif"),
                new Mahasiswa("Immanuel Sindu Kristian Pratama", "71190426", "100","3.84",50,"nonCekal","Aktif"),
                new Mahasiswa("Immanuel Sindu Kristian Pratama", "71190426", "100","3.84",50,"nonCekal","Cuti Studi"),
                new Mahasiswa("Immanuel Sindu Kristian Pratama", "71190426", "100","3.84",10,"Cekal Biro 1","Aktif"),
                new Mahasiswa("Immanuel Sindu Kristian Pratama", "71190426", "100","3.84",50,"Cekal Biro 1","Aktif"),
                new Mahasiswa("Immanuel Sindu Kristian Pratama", "71190426", "100","3.84",50,"nonCekal","Cuti Studi"),
                new Mahasiswa("Immanuel Sindu Kristian Pratama", "71190426", "100","3.84",50,"nonCekal","Aktif"),
                new Mahasiswa("Immanuel Sindu Kristian Pratama", "71190426", "100","3.84",50,"nonCekal","Dropped Out"),
            ]
        }
    },computed: {
      filteredMahasiswa() {
        if (this.filterMahasiswa === "Semua Mahasiswa" || !this.filterMahasiswa) {
          return this.listMahasiswa;
        } else {
          var listMahasiswaBaru = []
          for (var i=0; i<this.listMahasiswa.length; i++){
            if (this.listMahasiswa[i].status === this.filterMahasiswa) {
              listMahasiswaBaru.push(this.listMahasiswa[i])
            }
          }
          return listMahasiswaBaru;
        }
      },
    }
})
app.mount(".container-fluid");