class Catatan{
    constructor(judul, link, tipe){
        this.judul = judul;
        this.link = link;
        this.tipe=tipe;
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
            filters:[
                "Paling baru dibuat",
                "Paling lama dibuat",
                "Tipe perwalian mahasiswa",
                "Tipe perwalian orang tua / wali",
                "Tipe perwalian orang tua / wali dan mahasiswa",
                "Tipe perwalian grup angkatan"
            ],
            listCatatan:[
                new Catatan("Catatan Perwalian Mahasiswa","./editCatatanMahasiswa.html","mahasiswa"),
                new Catatan("Catatan Perwalian Orang Tua / Wali","./editCatatanOrangTuaWali.html","orangTua"),
                new Catatan("Catatan Perwalian Grup Angkatan","./editCatatanGrupAngkatan.html","grupAngkatan"),
                new Catatan("Catatan Perwalian Mahasiswa","./editCatatanMahasiswa.html","mahasiswa"),
                new Catatan("Catatan Perwalian Orang Tua / Wali","./editCatatanOrangTuaWali.html","orangTua"),
                new Catatan("Catatan Perwalian Grup Angkatan","./editCatatanGrupAngkatan.html","grupAngkatan"),
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

            var x = document.getElementById("snackbar");
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        },
        showPopUpPreferensi(){
            this.isOn = true;
        },
        showPopUpPreferensi2(index){
            this.indexHapusCatatan = index;
            this.isOn2 = true;
        },
        editCatatan(link){
            window.open(link);
        },
        deleteCatatan(index){
            this.listCatatan.splice(index,1);
        },
        bukaArsip(){
            window.open("./arsipPerwalianDosen.html");
        }
    
    },

})
app.mount("#content");