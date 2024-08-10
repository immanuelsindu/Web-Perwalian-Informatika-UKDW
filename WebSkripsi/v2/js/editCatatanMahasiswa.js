class Mahasiswa{
    constructor(nim, nama){
        this.nim = nim;
        this.nama = nama;
    }
}
class PresensiMahasiswa{
    constructor(nama, nim, status){
        this.nama = nama;
        this.nim = nim;
        this.status = status;
    }
}

var app = Vue.createApp({
    data() {
        return {
            showSuggestionList: false,
            inputanNimMhs:'',
            listMahasiswa:[
                new Mahasiswa("71190422","Christan Farel Pamungkas"),
                new Mahasiswa("71190427","Gabriel Imanuel Tumakaka"),
                new Mahasiswa("71190434","Harris Kurniadi Sumbogo"),
                new Mahasiswa("71190426","Immanuel Sindu Kristian Pratama"),
                new Mahasiswa("71190523","Revyn Pradana Putra"),
                new Mahasiswa("71190429","Yohanes Vito Rizki Darujati"),
            ],
            listMahasiswaPesertaLainnya:[
                new Mahasiswa("71190001","Mahasiswa A"),
                new Mahasiswa("71190002","Mahasiswa B"),
                new Mahasiswa("71190003","Mahasiswa C"),
            ],
            listPresensi:[
                new PresensiMahasiswa("Immanuel Sindu Kristian Pratama","71190401","Hadir"),
                new PresensiMahasiswa("Immanuel Sindu Kristian Pratama","71190402","Absen"),
                new PresensiMahasiswa("Immanuel Sindu Kristian Pratama","71190403","Absen"),
                new PresensiMahasiswa("Immanuel Sindu Kristian Pratama","71190404","Hadir"),
                new PresensiMahasiswa("Immanuel Sindu Kristian Pratama","71190405","Hadir"),
                new PresensiMahasiswa("Immanuel Sindu Kristian Pratama","71190406","Belum Presensi"),
                new PresensiMahasiswa("Immanuel Sindu Kristian Pratama","71190407","Belum Presensi"),
                new PresensiMahasiswa("Immanuel Sindu Kristian Pratama","71190408","Belum Presensi"),
                new PresensiMahasiswa("Immanuel Sindu Kristian Pratama","71190409","Belum Presensi"),
                new PresensiMahasiswa("Immanuel Sindu Kristian Pratama","71190410","Belum Presensi"),
            ]
        }
    },
    methods: {
        showSuggestions() {
            this.showSuggestionList = true;
        },
        hideSuggestions() {
            this.showSuggestionList = false;
        },
        addPeserta(nim,nama){
            var newMahasiswa = new Mahasiswa(nim,nama);
            this.listMahasiswaPesertaLainnya.push(newMahasiswa);
        },
        deletePeserta(index){
            this.listMahasiswaPesertaLainnya.splice(index,1);
        }, 
        presensiHadir(index){
            var myIndex = index-1;
            this.listPresensi[myIndex].status = "Hadir";
        },
        presensiAbsen(index){
            var myIndex = index-1;
            this.listPresensi[myIndex].status = "Absen";
        }

    },
    computed:{
        filteredList() {
            if(this.inputanNimMhs != ''){
                return this.listMahasiswa.filter(Mahasiswa => {
                    return Mahasiswa.nim.toLowerCase().includes(this.inputanNimMhs.toLowerCase())
                })
            }
        },
    }
})

app.mount("#content")