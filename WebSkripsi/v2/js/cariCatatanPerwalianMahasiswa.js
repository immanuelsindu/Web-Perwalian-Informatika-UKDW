class Catatan{
    constructor(judul, tipe){
        this.judul = judul;
        this.tipe = tipe;
    }
}
//tool tip
$(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

var myShowHistory = Vue.createApp({
    data(){
        return{
            isHistory:false,
            isOn:false,
            isOn2:false,
            filters:[
                "Paling baru dibuat",
                "Paling lama dibuat",
            ],
            listCatatan:[
                new Catatan("Catatan Perwalian Mahasiswa","mahasiswa"),
                new Catatan("Catatan Perwalian Orang Tua","orangTua"),
                new Catatan("Catatan Perwalian Orang Tua & Mahasiswa","orangTuaMahasiswa"),
                new Catatan("Catatan Perwalian Mahasiswa","mahasiswa"),
                new Catatan("Catatan Perwalian Orang Tua","orangTua"),
                new Catatan("Catatan Perwalian Orang Tua & Mahasiswa","orangTuaMahasiswa"),
                
            ]
        }
    },methods: {
        showHistory(){
            this.isHistory = !this.isHistory
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
        batal(){
            this.isOn = false;
        },
        simpan(){
            this.isOn = false;
        },
        showPopUpPreferensi2(index){
            this.indexHapusCatatan = index;
            this.isOn2 = true;
        },
        editCatatan(){
            window.open("./editCatatanMahasiswa.html");
        },
        deleteCatatan(index){
            this.listCatatan.splice(index,1);
        },
        bukaArsip(){
            window.open("./arsipPerwalianDosen.html");
        }
    },
})

myShowHistory.mount("#content")