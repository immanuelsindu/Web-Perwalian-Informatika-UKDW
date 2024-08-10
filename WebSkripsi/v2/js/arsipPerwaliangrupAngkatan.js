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
            tipeCatatan:"Grup Angkatan",
            filter:"Grup Angkatan",
            listGrupAngkatan:[
                new Catatan("Angkatan 2019", "Perwalian Pra UTS","14 Januari 2023"),
                new Catatan("Angkatan 2019", "Perwalian Pra UTS","14 Januari 2023"),
                new Catatan("Angkatan 2019", "Perwalian Pra UTS","14 Januari 2023"),
                new Catatan("Angkatan 2019", "Perwalian Pra UTS","14 Januari 2023"),
                new Catatan("Angkatan 2019", "Perwalian Pra UTS","14 Januari 2023"),
                new Catatan("Angkatan 2019", "Perwalian Pra UTS","14 Januari 2023"),
                new Catatan("Angkatan 2019", "Perwalian Pra UTS","14 Januari 2023"),
                new Catatan("Angkatan 2019", "Perwalian Pra UTS","14 Januari 2023"),
            ],
           

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