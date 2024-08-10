class Catatan{
    constructor(namaMahasiswa,judul, tanggalArsip){
        this.namaMahasiswa = namaMahasiswa;
        this.judul = judul;
        this.tanggalArsip = tanggalArsip;
    }
}


  
$(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

var app = Vue.createApp({
    data(){
        return{
            isOn:false,
            isOn2:false,
            indexHapusCatatan:0,
            tahunArsip:2019,
            tipeCatatan:"Mahasiswa",
            filter:"Mahasiswa",
            listCatatanMahasiswa:[
                new Catatan("Nama Mahasiswa 1", "Konsultasi KRS","14 Januari 2023"),
                new Catatan("Nama Mahasiswa 2", "Konsultasi KRS","14 Januari 2023"),
                new Catatan("Nama Mahasiswa 3", "Konsultasi KRS","14 Januari 2023"),
                new Catatan("Nama Mahasiswa 4", "Konsultasi KRS","14 Januari 2023"),
                new Catatan("Nama Mahasiswa 5", "Konsultasi KRS","14 Januari 2023"),
                new Catatan("Nama Mahasiswa 6", "Konsultasi KRS","14 Januari 2023"),
                new Catatan("Nama Mahasiswa 7", "Konsultasi KRS","14 Januari 2023"),
                new Catatan("Nama Mahasiswa 8", "Konsultasi KRS","14 Januari 2023"),
            ],
            listCatatanOrangTua:[
                new Catatan("Nama Mahasiswa 9", "Konsultasi Orang Tua / Wali","14 Januari 2023"),
                new Catatan("Nama Mahasiswa 10", "Konsultasi Orang Tua / Wali","14 Januari 2023"),
                new Catatan("Nama Mahasiswa 11", "Konsultasi Orang Tua / Wali","14 Januari 2023"),
                new Catatan("Nama Mahasiswa 12", "Konsultasi Orang Tua / Wali","14 Januari 2023"),
                new Catatan("Nama Mahasiswa 13", "Konsultasi Orang Tua / Wali","14 Januari 2023"),
                new Catatan("Nama Mahasiswa 14", "Konsultasi Orang Tua / Wali","14 Januari 2023"),
                new Catatan("Nama Mahasiswa 15", "Konsultasi Orang Tua / Wali","14 Januari 2023"),
                new Catatan("Nama Mahasiswa 16", "Konsultasi Orang Tua / Wali","14 Januari 2023"),
            ]

        }
        
    },methods: {
        batal(){
            this.isOn = false;
        },
        simpan(){
            this.isOn = false;
        },
        hapusCatatanTidak(){
            this.isOn2 = false;
        },
        hapusCatatanYa(){
            this.deleteCatatan(this.indexHapusCatatan);
            this.isOn2 = false;
        },
        editCatatan(link){
            window.open(link);
        },
        deleteCatatanMahasiswa(index){
            this.listCatatanMahasiswa.splice(index,1);
        },
        deleteCatatanOrangTua(index){
            this.listCatatanOrangTua.splice(index,1);
        },
        bukaArsip(){
            window.open("#");
        }
    
    },

})
app.mount("#content");