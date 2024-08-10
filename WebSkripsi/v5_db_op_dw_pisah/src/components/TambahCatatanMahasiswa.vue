<template lang="">
    
    <div>
        <head> 
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css">
        </head>

            <!-- Navbar -->
    <div class="row align-items-center ml-0 stickyNavbar"  id="navbar">
        <div id="navbar1" class="col-lg-8 mt-lg-0 col-sm-12 mt-sm-3">
            <div class="d-flex">
                <div class="ml-3" id="iconBeranda">
                    <router-link to="/">
                        <span class="material-symbols-outlined" style="color: #3c2a21">
                            home
                          </span>
                    </router-link>
                </div>
                
                <div id="judulWeb">
                    <p class="ml-2">Program Studi Informatika UKDW</p>
                </div>
            </div>
        </div>

        <div id="navbar2" class="col-lg-4 col-sm-12">
            <div id="idPengguna" class="w-100">
                <div class="">
                    <div class="d-flex justify-content-end col-12 p-0">
                        <div id="labelNamaDosen" class="d-flex align-items-center mr-3">
                            <p class="m-0 text-center">
                                <v-icon class="mr-2 " size="small">
                                    mdi-account
                                </v-icon>
                            </p>
                            <p id="infoNamaDosen" class="m-0">
                                {{ this.namaDosen }}
                            </p>
                        </div>

                        <v-btn class="dropDownDosen" color="#E5E5CB" flat active theme="light"
                            @click="this.logoutDosen()">
                            <v-icon size="default">
                                mdi-logout
                            </v-icon>
                            <v-tooltip activator="parent" content-class="bg-grey-darken-1" location="bottom">Logout
                            </v-tooltip>
                        </v-btn>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Content -->
    <div id="content" class="container-fluid px-0 ">
        <div class="col-12 mt-4">
            <BreadcrumbModule class="m-0 ml-5 breadCrumb"></BreadcrumbModule>

        </div>
       
        <div class="d-flex flex-column">
            <div class="container-fluid px-0 mb-xl-1 mb-sm-1">
                <div id="judulCatatan">
                    <p class="mb-5">Tambah Catatan Mahasiswa</p>
                </div>
        
                <div id="tambahCatatan" class="row  pl-3 mx-0 justify-content-center">
                    <!-- bagian tipe perwalian -->
                    <div class="col-lg-3 col-md-9 col-sm-9 my-sm-4">
                        <div class="row"> 
                            <div class="col-12 pl-0 mb-2">
                                <span id="judulItemPerCatatan">Tipe Perwalian</span>
                            </div>
                            
                            <div id="opsiTipePerwalian" class="ml-2 px-0">
                                <div class="col-12  mb-1 d-flex align-items-center">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault"  value="mahasiswa"
                                    id="flexRadioDefault1" v-model="tipe" :checked="tipe === 'mahasiswa' ? true : false" @click="inputanNama = 'Nama',peserta = 'Mahasiswa',myPlaceholder = 'Masukan nama atau NIM mahasiswa'" >
                                    <label class="form-check-label ml-4 pt-1 font-weight-normal" for="flexRadioDefault1">
                                        Mahasiswa
                                    </label>
                                </div>
            
                                <div class="col-12 mb-1 d-flex align-items-center" >
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" value="orang-tua-wali" id="flexRadioDefault2" v-model="tipe" :checked="tipe === 'orang-tua-wali' ? true : false" @click="inputanNama = 'Nama', peserta = 'Orang Tua', myPlaceholder = 'Masukan nama atau NIM mahasiswa'">
                                    <label class="form-check-label ml-4 pt-1 font-weight-normal" for="flexRadioDefault2">
                                        Orang Tua / Wali
                                    </label>
                                </div>
            
                                <div class="col-12 mb-1 d-flex align-items-center">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" value="orang-tua-wali-dan-mahasiswa" id="flexRadioDefault3" v-model="tipe" :checked="tipe === 'orang-tua-wali-dan-mahasiswa'"  
                                    @click="inputanNama = 'Nama'; peserta = 'Orang Tua & Mahasiswa'; myPlaceholder = 'Masukan nama atau NIM mahasiswa'"
                                    >
                                    <label class="form-check-label ml-4 pt-1 font-weight-normal" for="flexRadioDefault3">
                                        Orang Tua / Wali dan Mahasiswa
                                    </label>
                                </div>
            
                            
                                <transition>
                                    <!-- bagian input nama orang tua  -->
                                    <div v-if="tipe === 'orang-tua-wali' || tipe === 'orang-tua-wali-dan-mahasiswa' ? true : false" class="col-12 px-0 mt-2" >
                                        <input id="inputNamaOrangTua" type="text" placeholder="Masukan nama orang tua / wali" v-model="namaOrangTua">
                                    </div>

                                    <!-- mungkin jadi error -->
                                    <div v-else class="col-12 px-0 mt-2" >
                                    
                                    </div>
                                </transition>
                            

                            
                            </div>
                        </div>
                    </div>
        
                    <!-- bagian isi waktu nama judul -->
                    <div class="col-lg-4 col-md-9 col-sm-9 mb-sm-1 pl-0">
                        <div class="row ml-sm-1 mb-3">
                            <div class="col-12 mt-4 pl-0 mb-2">
                                <span id="judulItemPerCatatan">Data Catatan</span>
                            </div>
        
                            <!-- inputan waktu -->
                            <div class="col-12 mb-3 pl-2 mt-2">
                                <div class="row">
                                    <div class="col-2 align-self-center pl-2">
                                        <span class="font-weight-bold ">Waktu</span>
                                    </div>
                                    <div class="col-9">
                                        <input id="inputKiri" type="text" readonly disabled class="myformControl" v-model="waktu">
                                    </div>
                                </div>
                            </div>
        
                            <!-- inputan nama -->
                            <div class="col-12 mb-3 pl-2">
                                <div class="row">
                                    <div class="col-2 align-self-center pl-2">
                                        <Transition name="slide-fade" mode="out-in">
                                            <span class="font-weight-bold" >Nama</span>
                                        </Transition>
                                
                                    </div>
                                    <div class="col-9 align-self-center">    
                                        <div v-if="tipe === 'mahasiswa' || tipe === 'orang-tua-wali' || tipe === 'orang-tua-wali-dan-mahasiswa' ? true : false">
                                            <input id="inputKiri" type="text" :placeholder="[[myPlaceholder]]" readonly disabled  v-model="this.inputanCariNama">

                                            <div v-if="this.listCariMahasiswa.length > 0" id="hoverCariPeserta" class="mt-2">
                                                <ul class="list-group">
                                                    <li v-for="(mahasiswa,index) in this.listCariMahasiswa" :key="index" class="list-group-item py-2" @click="selectedIndex(mahasiswa)">
                                                        {{mahasiswa.nama}} / {{mahasiswa.nim}}
                                                    </li>
                                                </ul>    
                                            </div>

                                        </div>      

                                        <div v-else>
                                            <input id="inputJudulKonsul" type="text" class="dropdown-toggle" placeholder="Masukan tahun angkatan" v-model="nama">
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                            <!-- inputan judul -->
                            <div class="col-12 pl-2">
                                <div class="row">
                                    <div class="col-2 align-self-center pl-2">
                                        <span class="mr-4 font-weight-bold">Judul</span>
                                    </div>
                                    <div class="col-9">
                                        <input type="text" class="dropdown-toggle inputJudulKonsul" placeholder="Masukan judul perwalian" v-model="judul">
                                        
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                        <div class="row ml-sm-1">
                            <div class="col-12 mt-0 pl-0 mb-2">
                                <span v-if="tipe === 'mahasiswa' || tipe === 'orang-tua-wali' || tipe === 'orang-tua-wali-dan-mahasiswa'"  :key="peserta" id="judulItemPerCatatan2" class="mb-5" >Tambah Peserta ({{peserta}})</span>

                                <transition> 
                                    <div v-if="tipe === 'mahasiswa' || tipe === 'orang-tua-wali' || tipe === 'orang-tua-wali-dan-mahasiswa'">
                                        <div class="mb-3 pt-3 d-flex align-items-center">
                                            <span id="iconCari" class="material-symbols-outlined search ml-2" >
                                                search
                                                </span>
                                            <input id="inputCariMahasiswa" class="readonlyInput"  type="text" placeholder="Cari nama peserta lain" title="Mulailah dengan memilih nama mahasiswa, sebelum menambahkan peserta lainnya"  v-model='inputanPeserta' @click="scrollPage()" :readonly="this.isReadonly">
                                            <span v-if="inputanPeserta != ''" id="iconClose" class="material-symbols-outlined close ml-2" @click="deleteInputanPeserta()" >
                                                close
                                            </span>
                                        </div>
                                        
                                        <!-- hasil inputan pencarian daftar peserta lainnya -->
                                        <transition>
                                            <div v-if="this.listDaftarPesertaLainnya.length >= 1" id="daftarPesertaLainnya" >
                                                <ol class="p-0 list-group" >
                                                    <li v-for="(mahasiswa,index) in this.listDaftarPesertaLainnya" :key="index" class="list-group-item list-group-item-action" id="itemPesertaLain">
                                                        <div class="row">
                                                            <div class="col-10 ">
                                                                <p class="mb-0">{{mahasiswa.nama}} / {{mahasiswa.nim}}</p>
                                                            </div>
                
                                                            <div class="col-2 px-0 d-flex align-items-center">
                                                                <span class="material-symbols-outlined add text-success" @click="addPesertaKeWadahPesertaLainnya(mahasiswa)">
                                                                    add_box
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ol>
                                            </div>
                                        </transition>
                                    </div>
                                </transition>
                            </div>
                        </div>

                        
                    </div>
        
                    <!-- bagian tambah peserta -->
                    <div class="col-lg-3 col-md-8 col-sm-9 mb-sm-4 px-sm-0 mt-3" id="cariTambahMahasiswa">
                        <transition>
                                
                            <div v-if="this.wadahPesertaLainnya.length >= 1">
                                <div class="col-12 mt-1 pl-0 mb-5">
                                    <span v-if="tipe ==='mahasiswa' || tipe === 'orang-tua-wali' || tipe === 'orang-tua-wali-dan-mahasiswa'" id="judulItemPerCatatan" :key="peserta">
                                        Daftar Peserta Lain ({{peserta}})
                                    </span>
                                </div>

                                <!-- wadah untuk peserta lainnya yang ditambahkan  -->
                                <div class="pt-2">
                                    <div id="daftarPesertaLainnya2" class="py-2 pl-0 pr-3">
                                        <ol class=" mb-0">
                                            <transition-group>
                                                <li v-for="(mhs,index) in this.wadahPesertaLainnya" :key="index"  id="itemWadahPesertaLain">
                                                    <div class="d-flex">
                                                        <div class="col">
                                                            <p class="mb-0">{{mhs.nama}} / {{mhs.nim}}</p>
                                                        </div>
            
                                                        <div class="col-1 px-0 d-flex align-items-center">
                                                            <span class="material-symbols-outlined delete text-danger" @click="deletePesertaLain(index)">
                                                                delete
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </transition-group>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
        </div>

        <div class="d-flex justify-content-center">
            <div id="inputanMultiline" >
                <div id="kolomInputan" class="d-flex justify-content-center">
                    <textarea name="agendaPerwalian" id="agendaPerwalian" cols="160" rows="10" placeholder="Tulis agenda perwalian di sini" v-model="agendaPerwalian"></textarea>
                </div>

                <div id="buttonBatalSimpan2" class="mt-3">
                    <div class="row justify-content-between">
                        <div class="col-xl-6 col-sm-6">
                            <v-btn type="submit" id="buttonBatal" @click="this.batal()">Batal</v-btn>
                        </div>
    
                        <div class="col-xl-6 col-sm-6 d-flex justify-content-end mb-5">
                            <v-btn type="submit" :disabled="this.tombolTidakAktif" id="buttonSimpan" @click="this.simpan()">Simpan</v-btn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center text-center">
            <div id="snackbar" class="text-center">
                <p class="mx-auto mb-0 text-center">{{this.pesanSnackBar}}</p>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import BreadcrumbModule from './BreadcrumbModule.vue';
import axios from 'axios'

class MahasiswaLain {
    constructor(nama, nim) {
        this.nama = nama;
        this.nim = nim;
    }
}

export default {
    name: "TambahCatatanMahasiswa",
    components: {
        BreadcrumbModule
    },
    data() {
        return {
            //variabel untuk tambah catatan 
            idCatatan: null,
            judul: null,
            tipe: "mahasiswa", //temp
            nim: null,
            nama: null,
            waktu: null,
            namaOrangTua: null,
            agendaPerwalian: null,
            tahunAngkatan: null, //temp
            waktuAwal: null,
            waktuAkhir: null,

            //variabel untuk DOMS
            textNama: "Nama",
            peserta: "Mahasiswa",
            inputanNama: "Nama",
            inputanPeserta: null,
            myPlaceholder: "Masukan nama atau NIM mahasiswa",
            listMahasiswa: [
                new MahasiswaLain("Immanuel Sindu Kristian Pratama", "71190426"),
                new MahasiswaLain("Christan Farel Pamungkas", "71190422"),
                new MahasiswaLain("Harris Kurniadi Sumbogo", "71190434"),
                new MahasiswaLain("Yonathan", "71190413"),
                new MahasiswaLain("Garbiel Immaanuel Tumakaka", "71190427"),
                new MahasiswaLain("Revyn Pradana Putra", "71190420"),
            ],
            listMahasiswaPesertaLainnya: [],
            /////////////////////////////////////////////////////////////////////////////
            tombolTidakAktif: false,
            isReadonly: true,
            nimMahasiswa: null,
            namaMahasiswa: null,
            listCariMahasiswa: [],
            inputanCariNama: "",
            kodeDosen: null,
            listDaftarPesertaLainnya: [],
            wadahPesertaLainnya: [],
            pesanSnackBar: null,
            namaDosen: localStorage.getItem("namaDosen")

        }
    },
    created() {
        this.scrollTop();
        this.initData();
    },
    methods: {
        initData() {
            this.waktu = this.getTanggalSekarang();
            this.waktuAwal = this.getWaktuSekarang();
            this.kodeDosen = localStorage.getItem("kodeDosen")
            this.getNimNamaMahasiswa()
        },
        async getNimNamaMahasiswa() {
            try {
                const response = await axios.get(process.env.VUE_APP_API_DATAWAREHOUSE + `/searchMahasiswa/`, {
                    params: {
                        kode_dosen: this.kodeDosen,
                        inputan: this.$route.params.id,
                    },
                });

                if (response.data.error === false) {
                    this.nimMahasiswa = response.data.response.list_mahasiswa[0].nim
                    this.namaMahasiswa = response.data.response.list_mahasiswa[0].nama
                    this.inputanCariNama = this.namaMahasiswa + " / " + this.nimMahasiswa;
                } else {
                    this.inputanCariNama = [];
                }
            } catch (error) {
                console.error("Terjadi kesalahan saat mengambil data:", error);
                this.inputanCariNama = [];
            }
        },
        updatePeserta() {
            switch (this.tipe) {
                case "mahasiswa":
                    this.peserta = "Mahasiswa"
                    break;
                case "orang-tua-wali":
                    this.peserta = "Orang Tua"
                    break;
                case "orang-tua-wali-dan-mahasiswa":
                    this.peserta = "Orang Tua Mahasiswa"
                    break;
                case "pilihan4":
                    this.inputanNama = "Tahun Angkatan";
                    break;
            }
        },
        addPesertaKeWadahPesertaLainnya(mahasiswa) {
            console.log(mahasiswa.nim);
            let checkExists = this.isMahasiswaExits(mahasiswa.nim)

            switch (checkExists) {
                case "push":
                    const objectMahasiswa = {
                        nama: mahasiswa.nama,
                        nim: mahasiswa.nim,
                        id_catatan_perwalian_dosen: 0
                    }
                    this.wadahPesertaLainnya.push(objectMahasiswa);
                    break;
                case "mahasiswa-sudah-ada":
                    this.pesanSnackBar = "Mahasiswa tersebut sudah ada di daftar peserta lainnya"
                    this.snackbar()
                    break;
                case "mahasiswa-input":
                    this.pesanSnackBar = "Tidak bisa menambahkan mahasiswa yang sedang dalam perwalian"
                    this.snackbar()
                    break;
                default:
            }
        },
        isMahasiswaExits(inputNim) {
            let checkExists = this.wadahPesertaLainnya.some(mahasiswa => mahasiswa.nim === inputNim);
            if (inputNim !== this.nimMahasiswa) {
                if (!checkExists) {
                    return "push"
                } else {
                    return "mahasiswa-sudah-ada"
                }
            } else {
                return 'mahasiswa-input'
            }
        },
        snackbar() {
            var x = document.getElementById("snackbar");
            x.className = "show";
            setTimeout(function () {
                x.className = x.className.replace("show", "");
            }, 3000);
        },
        deleteInputanPeserta() {
            this.inputanPeserta = ""
        },
        deletePeserta(index) {
            this.listDaftarPesertaLainnya.splice(index, 1);
        },
        scrollPage() {
            // Hitung tinggi halaman
            const pageHeight = document.documentElement.scrollHeight;

            // Hitung tinggi scroll yang diinginkan (20% dari tinggi halaman)
            const scrollHeight = pageHeight * 0.3;

            // Scroll ke bawah dengan animasi
            window.scrollTo({
                top: scrollHeight,
                behavior: 'smooth'
            });
        },
        updateValue(inputanNama, peserta, myPlaceholder) {
            this.inputanNama = inputanNama;
            this.peserta = peserta;
            this.myPlaceholder = myPlaceholder;
        },
        scrollTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth" // Animasi smooth scrolling
            });
        },
        getTanggalSekarang() {
            const months = [
                'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
                'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
            ];

            const currentDate = new Date();
            const day = currentDate.getDate();
            const month = currentDate.getMonth();
            const year = currentDate.getFullYear();

            const formattedDate = day + ' ' + months[month] + ' ' + year;

            return formattedDate;
        },
        getWaktuSekarang() {
            const now = new Date();
            const jam = now.getHours().toString().padStart(2, '0');
            const menit = now.getMinutes().toString().padStart(2, '0');
            const detik = now.getSeconds().toString().padStart(2, '0');

            return `${jam}:${menit}:${detik}`;
        },
        isFieldKosong(tipeCatatan) { // true jika ada field yang kosong
            if (tipeCatatan == 'mahasiswa') {
                return (
                    this.judul == null ||
                    this.nimMahasiswa == null ||
                    this.namaMahasiswa == null ||
                    this.agendaPerwalian == null
                )
            } else {
                return (
                    this.judul == null ||
                    this.nimMahasiswa == null ||
                    this.namaMahasiswa == null ||
                    this.namaOrangTua == null ||
                    this.agendaPerwalian == null
                )
            }
        },
        async simpan() {
            if (!this.isFieldKosong(this.tipe)) { //mengecek apakah ada field yang kosong 
                let tempWadah = [] //untuk temp wadah peserta lainnya
                this.tombolTidakAktif = true
                this.waktuAkhir = this.getWaktuSekarang()

                const paramObject = {
                    kode_dosen: this.kodeDosen,
                    judul: this.judul,
                    tipe: this.tipe,
                    nim: this.nimMahasiswa,
                    nama: this.namaMahasiswa,
                    nama_orang_tua: this.namaOrangTua,
                    agenda_perwalian: this.agendaPerwalian,
                    tambah_peserta: this.wadahPesertaLainnya,  // data objek 
                    waktu_awal: this.waktuAwal,
                    waktu_akhir: this.waktuAkhir,
                    data_presensi_mahasiswa: this.listPresensi,  // data objek 
                    tahun_angkatan: this.tahunAngkatan,
                }

                // //insert catatan baru mahasiswa peserta lainnya
                if (this.wadahPesertaLainnya.length > 0) {
                    for (let i = 0; i < this.wadahPesertaLainnya.length; i++) {
                        const tempParamObject = paramObject
                        tempParamObject.nim = this.wadahPesertaLainnya[i].nim
                        tempParamObject.nama = this.wadahPesertaLainnya[i].nama
                        tempParamObject.nama_orang_tua = null //sementara orang tua peserta lainnya kosong
                        tempParamObject.tambah_peserta = {}

                        try {
                            const response = await axios.post(process.env.VUE_APP_API_OPERASIONAL + `/tambahCatatanPerwalianDosen/`, tempParamObject);
                            if (response.data.success) {
                                //menambahkan id_catatan_perwalian_dosen dari catatan yang baru saja dibuat
                                this.wadahPesertaLainnya[i].id_catatan_perwalian_dosen = response.data.id_catatan_perwalian_dosen
                            }
                        } catch (error) {
                            console.error("Terjadi kesalahan saat menambah data peserta lainnya", error);
                        }
                    }

                    //melakukan tambah informasi id catatan YBS kedalam this.wadahPesertaLainnya
                    let indexTerakhir = this.wadahPesertaLainnya.length - 1 // index terakhir this.wadahPesertaLainnya
                    const objectMahasiswaYBS = {
                        nama: this.namaMahasiswa,
                        nim: this.nimMahasiswa,
                        id_catatan_perwalian_dosen: this.wadahPesertaLainnya[indexTerakhir].id_catatan_perwalian_dosen + 1,
                        is_head: true
                    }

                    //buat variable baru untuk wadahPesertaLainnya (karena jika ditambah langsung ke this.wadahPesertaLainnya, akan update di ui websitenya)
                    // push objek mahasisw YBS ke indekx 0
                    tempWadah.unshift(objectMahasiswaYBS);

                    for (let i = 0; i < this.wadahPesertaLainnya.length; i++) {
                        tempWadah.push(this.wadahPesertaLainnya[i])
                    }

                    //ubah ke nilai awal mahasiswa ybs
                    paramObject.nim = this.nimMahasiswa
                    paramObject.nama = this.namaMahasiswa
                    paramObject.nama_orang_tua = this.namaOrangTua //sementara orang tua peserta lainnya kosong
                    paramObject.tambah_peserta = tempWadah
                }

                //insert catatan baru mahasiswa ybs perwalian
                try {
                    const response = await axios.post(process.env.VUE_APP_API_OPERASIONAL + `/tambahCatatanPerwalianDosen/`, paramObject);

                    if (response.data.success) {
                        //update tambah_peserta di catatan mahasiswa bersangkutan
                        for (let i = 0; i < tempWadah.length; i++) {
                            try {
                                let paramObject2 = {
                                    tambah_peserta: tempWadah,
                                    id_catatan_perwalian_dosen: tempWadah[i].id_catatan_perwalian_dosen,
                                }
                                await axios.put(process.env.VUE_APP_API_OPERASIONAL + `/updateTambahPesertaCatatan/`, paramObject2);

                            } catch (error) {
                                console.error("Terjadi kesalahan saat mengambil data:", error);
                            }
                        }

                        this.pesanSnackBar = "Berhasil menambahkan catatan"
                        this.snackbar()

                        const waktuTunggu = 2000;
                        setTimeout(() => {
                            this.$router.push({ name: 'DaftarCatatanPerwalianMahasiswa', params: { id: this.nimMahasiswa } })
                        }, waktuTunggu);
                    } else {
                        this.pesanSnackBar = "Gagal menambahkan data"
                        this.snackbar()

                        console.error("Data gagal ditambahkan ", error);
                    }

                } catch (error) {
                    console.error("Terjadi kesalahan saat menambah data:", error);
                    this.pesanSnackBar = "Gagal menambahkan data"
                    this.snackbar()
                }
            } else {
                this.pesanSnackBar = "Pastikan semua kolom sudah terisi"
                this.snackbar()
            }


        },
        selectedIndex(item) {
            this.inputanCariNama = item.nama + " / " + item.nim
            this.nimMahasiswa = item.nim
            this.namaMahasiswa = item.nama
        },
        batal() {
            this.$router.back()
        },
        async searchNamaMahasiswa() {
            try {
                const response = await axios.get(process.env.VUE_APP_API_DATAWAREHOUSE + `/searchMahasiswa/`, {
                    params: {
                        kode_dosen: this.kodeDosen,
                        inputan: this.inputanCariNama.toLowerCase()
                    },
                });

                if (response.data.error === false) {
                    this.listCariMahasiswa = response.data.response.list_mahasiswa;
                } else {
                    this.listCariMahasiswa = [];
                }
            } catch (error) {
                this.listCariMahasiswa = [];
            }
        },
        async searchPesertaLainnya() {
            try {
                const response = await axios.get(process.env.VUE_APP_API_DATAWAREHOUSE + `/searchMahasiswa/`, {
                    params: {
                        kode_dosen: this.kodeDosen,
                        inputan: this.inputanPeserta.toLowerCase()
                    },
                });

                if (response.data.error === false) {
                    this.listDaftarPesertaLainnya = response.data.response.list_mahasiswa;
                } else {
                    this.listDaftarPesertaLainnya = [];
                }
            } catch (error) {
                // console.error("Terjadi kesalahan saat mengambil data:", error);
                this.listDaftarPesertaLainnya = [];
            }
        },
        logoutDosen() {
            localStorage.clear();
            this.$router.push("/login")
        }
    }, mounted() {
        // mounted untuk bagian script src
        //slim.min.js
        const script1 = document.createElement("script");
        script1.src = "https://code.jquery.com/jquery-3.5.1.slim.min.js";
        script1.integrity =
            "sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj";
        script1.crossOrigin = "anonymous";
        document.head.appendChild(script1);

        //popper.min.js
        const script2 = document.createElement("script");
        script2.src = "https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js";
        script2.integrity = "sha384-hSM2mzKd06KfNmOz6mK6+sfuLdYVjI1MKOpnE+O+hNEZmZ+zQp8hJz3uPL2twNJX";
        script2.crossOrigin = "anonymous";
        document.head.appendChild(script2);

        //bundle.min.js
        const script3 = document.createElement("script");
        script3.src = "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js";
        script3.integrity = "sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx";
        script3.crossOrigin = "anonymous";
        document.head.appendChild(script3);
    },
    computed: {
        filteredList() {
            if (this.inputanPeserta != '') {
                return this.listMahasiswa.filter(Mahasiswa => {
                    return Mahasiswa.nim.toLowerCase().includes(this.inputanPeserta.toLowerCase())
                })
            }
            return []
        },
        filteredListCariNamaPeserta2() {
            if (this.nama != '') {
                return this.listMahasiswa.filter(Mahasiswa => {
                    const lowerCaseNama = Mahasiswa.nama.toLowerCase();
                    const lowerCaseNIM = Mahasiswa.nim.toLowerCase();
                    const lowerCaseInput = this.nama.toLowerCase();

                    return lowerCaseNama.includes(lowerCaseInput) || lowerCaseNIM.includes(lowerCaseInput);
                });
            }
            return [];
        },
        handlingInputCariNama() {
            if (!this.inputanCariNama.includes("/") && this.listCariMahasiswa.length == 0 && this.inputanCariNama != '') {
                return true
            } else {
                return false
            }
        }
    },
    watch: {
        inputanCariNama: {
            handler: async function (newVal) {
                if (newVal != '') {
                    this.searchNamaMahasiswa()
                } else {
                    this.listCariMahasiswa = [];
                }

            }
        },
        inputanPeserta: {
            handler: async function (newVal) {
                if (newVal != '') {
                    this.searchPesertaLainnya()
                } else {
                    this.listDaftarPesertaLainnya = [];
                }

            }
        },
        nimMahasiswa: {
            handler: async function (newVal) {
                if (this.nimMahasiswa == "") {
                    this.isReadonly = true
                    //tambah cursor not-allowed ketika nim mahasiswa belum di isi
                    const divInputanPesertaLainnya = document.querySelector("#inputCariMahasiswa");
                    divInputanPesertaLainnya.classList.add("readonlyInput");
                    divInputanPesertaLainnya.setAttribute('title', 'Mulailah dengan memilih nama mahasiswa, sebelum menambahkan peserta lainnya');
                } else {
                    this.isReadonly = false
                    //hapus cursor not-allower ketika nim mahasiswa sudah di isi
                    const divInputanPesertaLainnya = document.querySelector("#inputCariMahasiswa");
                    divInputanPesertaLainnya.classList.remove("readonlyInput");
                    divInputanPesertaLainnya.removeAttribute('title');
                }
            }
        }
    }
}

</script>

<style scoped src="../../public/frontend/styling/tambahCatatan.css"></style>