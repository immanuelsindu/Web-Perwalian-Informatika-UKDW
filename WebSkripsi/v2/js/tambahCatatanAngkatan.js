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
            radioValue:"pilihan4",
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
        presensiHadir(index){
            var myIndex = index-1;
            this.listPresensi[myIndex].status = "Hadir";
        },
        presensiAbsen(index){
            var myIndex = index-1;
            this.listPresensi[myIndex].status = "Absen";
        }
    },
})
app.mount("#content");