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
            tipeCatatan:"Refleksi Dosen",
            filter:"Refleksi Dosen",
            listRefleksiDosen:[
                new Catatan("Nama Peserta 1", "Remindering UTS","14 Januari 2023"),
                new Catatan("Nama Peserta 2", "Remindering UTS","14 Januari 2023"),
                new Catatan("Nama Peserta 3", "Remindering UTS","14 Januari 2023"),
                new Catatan("Nama Peserta 4", "Remindering UTS","14 Januari 2023"),
                new Catatan("Nama Peserta 5", "Remindering UTS","14 Januari 2023"),
                new Catatan("Nama Peserta 6", "Remindering UTS","14 Januari 2023"),
                new Catatan("Nama Peserta 7", "Remindering UTS","14 Januari 2023"),
                new Catatan("Nama Peserta 8", "Remindering UTS","14 Januari 2023"),
            ],
            listKhusus:[
                new Catatan("Nama Peserta 9", "Konsultasi Beasiswa","14 Januari 2023"),
                new Catatan("Nama Peserta 10", "Konsultasi Beasiswa","14 Januari 2023"),
                new Catatan("Nama Peserta 11", "Konsultasi Beasiswa","14 Januari 2023"),
                new Catatan("Nama Peserta 12", "Konsultasi Beasiswa","14 Januari 2023"),
                new Catatan("Nama Peserta 13", "Konsultasi Beasiswa","14 Januari 2023"),
                new Catatan("Nama Peserta 14", "Konsultasi Beasiswa","14 Januari 2023"),
                new Catatan("Nama Peserta 15", "Konsultasi Beasiswa","14 Januari 2023"),
                new Catatan("Nama Peserta 16", "Konsultasi Beasiswa","14 Januari 2023"),
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