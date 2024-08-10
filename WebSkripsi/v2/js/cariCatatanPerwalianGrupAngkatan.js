class Catatan{
    constructor(tipeCatatan, link){
        this.tipeCatatan = tipeCatatan;
        this.link = link;
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
                new Catatan("Catatan Perwalian Grup Angkatan","./editCatatanGrupAngkatan.html"),
                new Catatan("Catatan Perwalian Grup Angkatan","./editCatatanGrupAngkatan.html"),
                new Catatan("Catatan Perwalian Grup Angkatan","./editCatatanGrupAngkatan.html"),
                new Catatan("Catatan Perwalian Grup Angkatan","./editCatatanGrupAngkatan.html"),
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