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
            <div id="idPengguna" class="d-flex justify-content-end col-12">
                <div class="d-flex align-items-center">
                    <div class="d-flex align-items-center mr-3" id="labelNamaDosen">
                        <p class="m-0 text-center">
                            <v-icon class="mr-2 " size="small">
                                mdi-account
                            </v-icon>
                        </p>
                        <p id="infoNamaDosen" class="m-0">
                            Nama Dosen
                        </p>
                    </div>

                    <div class="d-flex align-items-center">
                        <v-btn class="dropDownDosen" color="#E5E5CB" flat active theme="light" to='/login'>
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
                            <div class="col-12 pl-0 mb-4">
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
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" value="orang-tua-wali-dan-mahasiswa" id="flexRadioDefault3" v-model="tipe" :checked="tipe === 'orang-tua-wali-dan-mahasiswa' ? true : false" @click="inputanNama = 'Nama',peserta = 'Orang Tua & Mahasiswa',myPlaceholder = 'Masukan nama atau NIM mahasiswa'">
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
                            <div class="col-12 mt-4 pl-0 mb-4">
                                <span id="judulItemPerCatatan">Data Catatan</span>
                            </div>
        
                            <!-- inputan waktu -->
                            <div class="col-12 mb-3 pl-2 mt-2">
                                <div class="row">
                                    <div class="col-2 align-self-center pl-2">
                                        <span class="font-weight-bold ">Waktu</span>
                                    </div>
                                    <div class="col-9">
                                        <input id="inputKiri" type="text" class="myformControl" v-model="waktu" readonly>
                                    </div>
                                </div>
                            </div>
        
                            <!-- inputan nama -->
                            <div class="col-12 mb-3 pl-2">
                                <div class="row">
                                    <div class="col-2 align-self-center pl-2">
                                        <Transition name="slide-fade" mode="out-in">
                                            <span class="font-weight-bold" :key="inputanNama">{{inputanNama}}</span>
                                        </Transition>
                                
                                    </div>
                                    <div class="col-9 align-self-center">    
                                        <div v-if="tipe === 'mahasiswa' || tipe === 'orang-tua-wali' || tipe === 'orang-tua-wali-dan-mahasiswa' ? true : false">
                                            <input id="inputKiri" type="text" :placeholder="[[myPlaceholder]]" v-model="nama" readonly>
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
                                            <input id="inputCariMahasiswa" type="text" placeholder="Cari nama peserta lain" v-model='inputanPeserta' @click="scrollPage()">
                                            <span v-if="inputanPeserta != ''" id="iconClose" class="material-symbols-outlined close ml-2" @click="deleteInputanPeserta()" >
                                                close
                                            </span>
                                        </div>
    
                                        <transition>
                                            <div v-if="filteredList.length >= 1" id="daftarPesertaLainnya" >
                                                <ol class="mt-2">
                                                    <li v-for="mhs in filteredList" :key="mhs" class="mb-1">
                                                        <div class="row">
                                                            <div class="col-10 ">
                                                                <p class="mb-0">{{mhs.nama}} {{mhs.nim}}</p>
                                                            </div>
                
                                                            <div class="col-2 px-0 d-flex align-items-center">
                                                                <span class="material-symbols-outlined add text-success" @click="addPeserta(mhs.nim, mhs.nama)">
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
                                
                            <div v-if="listDaftarPesertaLainnya.length >= 1">
                                <div class="col-12 mt-1 pl-0 mb-5">
                                    <span v-if="tipe ==='mahasiswa' || tipe === 'orang-tua-wali' || tipe === 'orang-tua-wali-dan-mahasiswa'" id="judulItemPerCatatan" :key="peserta">
                                        Daftar Peserta Lain ({{peserta}})
                                    </span>
                                </div>


                                <div class="pt-2" v-if="tipe ==='mahasiswa' || tipe === 'orang-tua-wali' || tipe === 'orang-tua-wali-dan-mahasiswa'">
                                    <div id="daftarPesertaLainnya2">
                                        <ol class="mt-2">
                                            <li v-for="mhs in listDaftarPesertaLainnya" :key="mhs" class="mb-1">
                                                <div class="row">
                                                    <div class="col-10 ">
                                                        <p class="mb-0">{{mhs.nama}} {{mhs.nim}}</p>
                                                    </div>
        
                                                    <div class="col-2 px-0 d-flex align-items-center">
                                                        <span class="material-symbols-outlined delete text-danger" @click="deletePeserta(index)">
                                                            delete
                                                        </span>
                                                    </div>
                                                </div>
                                            </li>
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

                <div id="buttonBatalSimpan" class="mt-3">
                    <div class="row justify-content-between">
                        <div class="col-xl-6 col-sm-6">
                            <button id="buttonBatal" @click="batal()">Batal</button>
                        </div>

                        <div class="col-xl-6 col-sm-6 d-flex justify-content-end mb-5">
                            <button id="buttonSimpan" @click="simpan()">Simpan</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
    </div>
</template>

<script>
import BreadcrumbModule from './BreadcrumbModule.vue';
import CatatanPerwalianDosen from "@/myClass/catatanPerwalianDosen.js"

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
            idCatatan: "",
            judul: "",
            tipe: "mahasiswa", //temp
            nim: "",
            nama: "Immanuel Sindu Kristian Pratama / 71190426",
            waktu: "",
            namaOrangTua: "",
            agendaPerwalian: "",

            tahunAngkatan: "", //temp
            waktuAwal: "",
            waktuAkhir: "",

            //variabel untuk DOMS
            textNama: "Nama",
            peserta: "Mahasiswa",
            inputanNama: "Nama",
            inputanPeserta: "",
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
            listDaftarPesertaLainnya: []
        }
    },
    methods: {
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
        addPeserta(nim, nama) {
            console.log(nim);
            if (!this.isMahasiswaExits(nim)) {
                var newMahasiswa = new MahasiswaLain(nama, nim);
                this.listDaftarPesertaLainnya.push(newMahasiswa);
            } else {
                alert("Mahasiswa tersebut sudah ada di daftar peserta lainnya")
            }

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
            const currentDate = new Date();
            const hours = currentDate.getHours().toString().padStart(2, '0');
            const minutes = currentDate.getMinutes().toString().padStart(2, '0');
            const formattedTime = `${hours}:${minutes} WIB`;

            return formattedTime;
        },
        initData() {
            this.waktu = this.getTanggalSekarang();
            this.waktuAwal = this.getWaktuSekarang();
        },
        simpan() {
            this.waktuAkhir = this.getWaktuSekarang();
            this.idCatatan = this.$store.getters.getLastIdCatatanPerwalianDosen.toString();
            this.$store.commit("setLastIdCatatanPerwalianDosen")
            const catatanBaru = new CatatanPerwalianDosen(
                this.idCatatan,
                this.judul,
                this.tipe,
                this.nim,
                this.nama,
                this.waktu,
                this.namaOrangTua,
                this.agendaPerwalian,
                { data: this.listDaftarPesertaLainnya },
                this.tahunAngkatan,
                this.waktuAwal,
                this.waktuAkhir,
                "", //data list presensi
                false
            )
            console.log(catatanBaru);
            this.$store.commit("tambahCatatanPerwalianDosen", catatanBaru)
            // this.$router.push("/")
            this.$router.push({ name: 'DaftarCatatanPerwalianMahasiswa', params: { id: '71190426' } })
        },
        selectedIndex(item) {
            this.nama = item.nama;
            this.nim = item.nim;
        },
        isMahasiswaExits(inputNim) {
            return this.listDaftarPesertaLainnya.some(mahasiswa => mahasiswa.nim === inputNim);
        },
        batal() {
            this.$router.back()
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
    created() {
        this.scrollTop();
        this.initData();
    },
    computed: {
        filteredList() {
            if (this.inputanPeserta != '') {

                let hasilPencarian = this.listMahasiswa.filter(Mahasiswa => {
                    const lowerCaseNama = Mahasiswa.nama.toLowerCase();
                    const lowerCaseNIM = Mahasiswa.nim.toLowerCase();


                    return lowerCaseNama.includes(this.inputanPeserta) || lowerCaseNIM.includes(this.inputanPeserta);
                });

                return hasilPencarian;
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
        }
    }
}

</script>

<style scoped src="../../public/frontend/styling/tambahCatatan.css"></style>