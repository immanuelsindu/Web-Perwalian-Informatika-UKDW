class Catatan{
    constructor(judul,tipe){
        this.judul = judul;
        this.tipe = tipe;
    }
}
window.addEventListener('scroll', function() {
    var scrollTop = window.scrollY;
    var screenWidth = window.innerWidth;
    if (scrollTop > 100 && screenWidth >= 1000) {
        document.querySelector('.mySticky').classList.add('paddingTop');
    } else {
        document.querySelector('.mySticky').classList.remove('paddingTop');
    }
});

//tool tip
$(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

var app = Vue.createApp({
    data(){
        return{angkatan:2015,
            indeksSemester:1,
            matkul:[
                ["Riset Teknologi Informasi", "7/14"],
                ["Pemodelan Proses Bisnis","5/14"],
                ["Pemrograman Web Lanjut","8/14"],
                ["Riset Teknologi Informasi", "7/14"],
                ["Pemodelan Proses Bisnis","5/14"],
                ["Pemrograman Web Lanjut","8/14"],
            ],
            profil:[
                "User Interface / User Experience Designer",
                "Intelligent System Developer",
                "Database Administrator",
                "Network Service Supervisor"
            ],
            suratPeringatan:[
                ["Semester 8","Surat Peringatan ke-1"],
                ["Semester 10","Surat Peringatan ke-2"],
                ["Semester 12","Surat Peringatan ke-3"],
                ["Semester 14","Masuk daftar Drop Out (DO)"],
            ],
            listCatatan:[
                new Catatan("Catatan Perwalian Mahasiswa","mahasiswa"),
                new Catatan("Catatan Perwalian Orang Tua / Wali","orangTua"),
                new Catatan("Catatan Perwalian Orang Tua / Wali & Mahasiswa","orangTuaMahasiswa"),
             
            ]
        }
    }
   
})
app.mount("#content");