class Catatan{
    constructor(judul, link,tipe){
        this.judul = judul;
        this.link = link;
        this.tipe = tipe;
    }
}



//tool tip
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
            ],
            listCatatan:[
                new Catatan("Catatan Refleksi Dosen","./editCatatanRefleksiDosen.html","refleksi"),
                new Catatan("Catatan Khusus","./editCatatanRefleksiDosen.html","khusus"),
                new Catatan("Catatan Refleksi Dosen","./editCatatanRefleksiDosen.html","refleksi"),
                new Catatan("Catatan Khusus","./editCatatanRefleksiDosen.html","khusus"),
                new Catatan("Catatan Khusus","./editCatatanRefleksiDosen.html","khusus"),
            ],
        }
        
    },methods: {
        batal(){
            this.isOn = false;
        },
        simpan(){
            this.isOn = false;
        },
        // urutan hapus 2
        hapusCatatanTidak(){
            this.isOn2 = false;
        },
        // urutan hapus 2
        hapusCatatanYa(){
            this.deleteCatatan();
            this.isOn2 = false;

            var x = document.getElementById("snackbar");
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        },
        showPopUpPreferensi(){
            this.isOn = true;
        },
        // urutan hapus 1
        showPopUpPreferensi2(index){
            this.indexHapusCatatan = index;
            this.isOn2 = true;
        },
        editCatatan(link){
            window.open(link);
        },
        deleteCatatan(){
            this.isOn2 = true;
            this.listCatatan.splice(this.indexHapusCatatan,1);
        },
        bukaArsip(){
            window.open("./arsipPerwalianDosen.html");
        }
    
    },

})
app.mount("#content");