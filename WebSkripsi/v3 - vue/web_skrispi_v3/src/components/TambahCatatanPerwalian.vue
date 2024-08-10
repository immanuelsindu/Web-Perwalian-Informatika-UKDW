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
                    
                    <div id="judulWeb" class="m-0">
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
        <div id="content" class="container-fluid px-0">
            <div class="col-12 mt-4">
                <BreadcrumbModule class="m-0 ml-5 breadCrumb"></BreadcrumbModule>

            </div>
        
            <div class="d-flex flex-column">
                <div class="container-fluid px-0 mb-xl-1 mb-sm-1">
                    <div id="judulCatatan">
                        <p class="mb-5">Tambah Catatan Perwalian </p>
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
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"  value="mahasiswa" id="flexRadioDefault1" 
                                        v-model="tipe" :checked="tipe === 'mahasiswa' ? true : false" @click="inputanNama = 'Nama',peserta = 'Mahasiswa', myPlaceholder = 'Masukan nama atau NIM mahasiswa'">
                                        <label class="form-check-label ml-4 pt-1 font-weight-normal" for="flexRadioDefault1">
                                            Mahasiswa
                                        </label>
                                    </div>
                
                                    <div class="col-12 mb-1 d-flex align-items-center" >
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" value="orang-tua-wali" id="flexRadioDefault2" 
                                        v-model="tipe" :checked="tipe === 'orang-tua-wali' ? true : false" @click="inputanNama = 'Nama', peserta = 'Orang Tua', myPlaceholder = 'Masukan nama atau NIM mahasiswa'">
                                        <label class="form-check-label ml-4 pt-1 font-weight-normal" for="flexRadioDefault2">
                                            Orang Tua / Wali
                                        </label>
                                    </div>
                
                                    <div class="col-12 mb-1 d-flex align-items-center">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" value="orang-tua-wali-dan-mahasiswa" id="flexRadioDefault3" v-model="tipe" :checked="tipe === 'orang-tua-wali-dan-mahasiswa' ? true : false" 
                                        @click="inputanNama = 'Nama',peserta = 'Orang Tua & Mahasiswa',myPlaceholder = 'Masukan nama atau NIM mahasiswa'">
                                        <label class="form-check-label ml-4 pt-1 font-weight-normal" for="flexRadioDefault3">
                                            Orang Tua / Wali dan Mahasiswa
                                        </label>
                                    </div>
                
                                    <div class="col-12 mb-3 d-flex align-items-center">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" value="grup-angkatan" id="flexRadioDefault4" v-model="tipe" :checked="tipe === 'grup-angkatan' ? true : false" @click="inputanNama = 'Tahun Angkatan',myPlaceholder = 'Masukan tahun angkatan'">
                                        <label class="form-check-label ml-4 pt-1 font-weight-normal" for="flexRadioDefault4">
                                            Grup Angkatan
                                        </label>
                                    </div>
                                
                                    <transition>
                                        <!-- bagian input nama orang tua  -->
                                        <div v-if="tipe === 'orang-tua-wali' || tipe === 'orang-tua-wali-dan-mahasiswa' ? true : false" class="col-12 px-0 mt-2" >
                                            <input id="inputNamaOrangTua" type="text" placeholder="Masukan nama orang tua / wali">
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
                                            <input id="inputKiri" type="text" readonly class="myformControl" v-model="waktu">
                                        </div>
                                    </div>
                                </div>
            
                                <!-- nama mahasiswa / peserta -->
                                <div class="col-12 mb-3 pl-2">
                                    <div class="row">
                                        <div class="col-2 align-self-center pl-2">
                                            <Transition name="slide-fade" mode="out-in">
                                                <span class="font-weight-bold" :key="inputanNama">{{inputanNama}}</span>
                                            </Transition>
                                    
                                        </div>
                                        <div class="col-9 align-self-center">    
                                            <div v-if="tipe === 'mahasiswa' || tipe === 'orang-tua-wali' || tipe === 'orang-tua-wali-dan-mahasiswa' ? true : false">
                                                <input id="inputKiri" type="text" :placeholder="[[myPlaceholder]]" v-model="nama">
                                                
                                                <div v-if="this.isHoverCariPeserta != '' " id="hoverCariPeserta" class="mt-2">
                                                    <ul class="list-group">
                                                        <li v-for="item in this.hasilPencarianNamaHover" :key="item" class="list-group-item py-2" @click="selectedIndex(item)">
                                                            {{item.nama}} / {{item.nim}}
                                                        </li>
                                                    </ul>    
                                                </div>

                                            </div>      

                                            <div v-else>
                                                <input v-bind:class="{
                                                    inputJudulKonsul: tipe == 'mahasiswa' || tipe == 'orang-tua-wali' || tipe == 'orang-tua-wali-dan-mahasiswa', 
                                                    inputJudulKonsul2: tipe == 'grup-angkatan', 
                                                }"  type="text" class="dropdown-toggle" placeholder="Masukan tahun angkatan" v-model="tahunAngkatan">
                                                <button v-if="tipe ==='grup-angkatan'" class="btn btn-secondary dropdown-toggle toggle2 " type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    
                                                </button>
                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <p class="dropdown-item mb-0" href="#" @click="tahunAngkatan='2016'">2016</p>
                                                    <p class="dropdown-item mb-0" href="#" @click="tahunAngkatan='2017'">2017</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
            
                                <div class="col-12 pl-2">
                                    <div class="row">
                                        <div class="col-2 align-self-center pl-2">
                                            <span class="mr-4 font-weight-bold">Judul</span>
                                        </div>
                                        <div class="col-9">
                                            <input v-bind:class="{
                                                inputJudulKonsul: tipe == 'mahasiswa' || tipe == 'orang-tua-wali' || tipe == 'orang-tua-wali-dan-mahasiswa', 
                                                inputJudulKonsul2: tipe == 'grup-angkatan', 
                                            }" type="text" class="dropdown-toggle" placeholder="Masukan judul perwalian" v-model="judul">
                                            <button v-if="tipe ==='grup-angkatan'" class="btn btn-secondary dropdown-toggle toggle2 " type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                
                                            </button>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a class="dropdown-item" href="#" @click="judul='Catatan Perwalian Pra-Registrasi'" >Catatan Perwalian Pra-Registrasi</a>
                                                <a class="dropdown-item" href="#" @click="judul='Catatan Perwalian Pra-UTS'" >Catatan Perwalian Pra-UTS</a>
                                                <a class="dropdown-item" href="#" @click="judul='Catatan Perwalian Pra-UAS'" >Catatan Perwalian Pra-UAS</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                            <div class="row ml-sm-1">
                                <div class="col-12 mt-0 pl-0 mb-2">
                                    <span v-if="tipe != 'grup-angkatan'"  :key="peserta" id="judulItemPerCatatan2" class="mb-5" >Tambah Peserta ({{peserta}})</span>

                                    <transition> 
                                        <div v-if="tipe != 'grup-angkatan'">
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
                                                <div v-if="filteredList.length >= 1 && tipe != 'grup-angkatan'" id="daftarPesertaLainnya" >
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
                                        <span v-if="tipe === 'grup-angkatan' ? false : true" id="judulItemPerCatatan" :key="peserta">
                                            Daftar Peserta Lain ({{peserta}})
                                        </span>
                                    </div>


                                    <div class="pt-2" v-if="tipe === 'grup-angkatan' ? false : true">
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
                </div>
            </div>

            <div v-if="tipe === 'grup-angkatan'" class="d-flex justify-content-center">
                <div id="inputanMultiline">
                   <div id="containerPresensi" class="mt-5">
                        <div id="judulPresensi">
                            <p class="font-weight-bold">Presensi Mahasiswa Perwalian Angkatan {{tahunAngkatan}}</p>
                        </div>
                        <div v-if="tahunAngkatan == '2016' || tahunAngkatan == '2017'" id="presensiMahasiswa">
                            <!-- <div class="list-group">
                                <div v-for="(mahasiswa,index) in listPresensi" :key="index" id="itemMahasiswa" class="list-group-item list-group-item-action d-flex flex-row align-items-center">
                                    <div class="col-xl-6 px-0">
                                        <p class="m-xl-0">{{index+=1}}. {{mahasiswa.nama}} / {{mahasiswa.nim}}</p>
                                    </div>
                                    <div class="col-xl-3 px-0">
                                        <button :class="{'btn btn-outline-danger btn-sm mr-xl-3': mahasiswa.status === 'Absen', 'btn btn-danger btn-sm mr-xl-3': mahasiswa.status !== 'Absen'}" @click="presensiAbsen(index)" :disabled="mahasiswa.status === 'Absen'">
                                            Absen
                                        </button>
                                        
                                        <button :class="{'btn btn-outline-success btn-sm': mahasiswa.status === 'Hadir', 'btn btn-success btn-sm': mahasiswa.status !== 'Hadir'}" @click="presensiHadir(index)" :disabled="mahasiswa.status === 'Hadir'">
                                            Hadir
                                        </button>
                                    </div>

                                    <div class="col-xl-3 ">
                                        <p v-if="mahasiswa.status==='Hadir'" class="m-xl-0"><b>Status</b> : <span class="text-success">{{mahasiswa.status}}</span></p>
                                        <p v-else-if="mahasiswa.status==='Absen'" class="m-xl-0"><b>Status</b> : <span class="text-danger">{{mahasiswa.status}}</span></p>
                                        <p v-else class="m-xl-0"><b>Status</b> : <span class="text-dark">{{mahasiswa.status}}</span></p>
                                    </div>
                                </div>
                            </div> -->

                            <div class="list-group" id="listPresensi">
                                <div v-for="(mahasiswa,index) in this.listPresensi" :key="index" id="itemMahasiswa" class="list-group-item list-group-item-action d-flex flex-row align-items-center">

                                    <div class="col-xl-4 px-0">
                                        <p class="m-xl-0">{{index+=1}}. {{mahasiswa.nama}} / {{mahasiswa.nim}}</p>
                                    </div>

                                    <div class="col-xl-2 px-0">
                                        <v-select
                                            id="btnPresensi"
                                            v-model="this.listPresensi[index-1].status"
                                            density="compact"
                                            :items="['Absen','Hadir']"
                                            variant="solo"
                                            rounded="lg"
                                            hide-details="true"
                                            :bg-color="this.listPresensi[index-1].status === 'Belum Presensi' ? 'white' : this.listPresensi[index-1].status === 'Absen' ? 'red-darken-3' : 'success'"
                                        ></v-select>
                                    </div>

                                    <div class="col-xl-3 ml-3 pr-0">
                                        <p v-if="mahasiswa.status==='Hadir'" class="m-xl-0"><b>Status</b> : <span class="text-success">{{mahasiswa.status}}</span></p>
                                        <p v-else-if="mahasiswa.status==='Absen'" class="m-xl-0"><b>Status</b> : <span class="text-danger">{{mahasiswa.status}}</span></p>
                                        <p v-else class="m-xl-0"><b>Status</b> : <span class="text-dark">Belum Presensi</span></p>
                                    </div>

                                    <div class="col-3 pr-5 pl-0">
                                        <v-text-field placeholder="Keterangan"
                                        v-model="this.listPresensi[index-1].keterangan"
                                        density="compact"
                                        rounded="lg"
                                        variant="solo"
                                        class="keteranganPresensi" hide-details="true"></v-text-field>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div v-else id="presensiMahasiswa2" class="d-flex align-items-end">
                            <div class="presensiMahasiswa">
                                <p>Silahkan pilih tahun angkatan terlebih dahulu, untuk melakukan presensi mahasiswa</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <div id="buttonBatalSimpan" class="mt-3">
                <div class="row justify-content-between">
                    <div class="col-xl-6 col-sm-6">
                        <button id="buttonBatal" @click="batal">Batal</button>
                    </div>

                    <div class="col-xl-6 col-sm-6 d-flex justify-content-end mb-5">
                        <button id="buttonSimpan" @click="simpan">Simpan</button>
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
    name: "TambahCatatanPerwalian",
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
            nama: "",
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
            myPlaceholder: "Masukan nama atau NIM mahasiswa",
            myValueJudul: "",
            inputanPeserta: "",
            hasil: "",
            listPresensi: [],
            listMahasiswa: [
                new MahasiswaLain("Immanuel Sindu Kristian Pratama", "71190426"),
                new MahasiswaLain("Christan Farel Pamungkas", "71190422"),
                new MahasiswaLain("Harris Kurniadi Sumbogo", "71190434"),
                new MahasiswaLain("Yonathan", "71190413"),
                new MahasiswaLain("Gabriel Immaanuel Tumakaka", "71190427"),
                new MahasiswaLain("Revyn Pradana Putra", "71190420"),
            ],
            listMahasiswaPesertaLainnya: [],
            listDaftarPesertaLainnya: [],
            isHoverCariPeserta: "",
            hasilPencarianNamaHover: [],
        }
    },
    methods: {
        updatePeserta() {
            switch (this.tipe) {
                case "mahasiswa":
                    this.peserta = "Mahasiswa"
                    break;
                case "orangTuaWali":
                    this.peserta = "Orang Tua / Wali"
                    break;
                case "orangTuaWaliMahasiswa":
                    this.peserta = "Orang Tua / Wali dan Mahasiswa"
                    break;
                case "grupAngkatan":
                    this.inputanNama = "Grup Angkatan";
                    break;
            }
        },
        presensiHadir(index) {
            var myIndex = index - 1;
            this.listPresensi[myIndex].status = "Hadir";
        },
        presensiAbsen(index) {
            var myIndex = index - 1;
            this.listPresensi[myIndex].status = "Absen";
        },
        addPeserta(inputNim, nama) {
            if (!this.isMahasiswaExits(inputNim)) {
                var newMahasiswa = new MahasiswaLain(nama, inputNim);
                this.listDaftarPesertaLainnya.push(newMahasiswa);
            } else {
                alert("Mahasiswa tersebut sudah ada di daftar peserta lainnya")
            }

        },
        isMahasiswaExits(inputNim) {
            return this.listDaftarPesertaLainnya.some(mahasiswa => mahasiswa.nim === inputNim);
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
        scrollTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth" // Animasi smooth scrolling
            })
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
                { data: this.listPresensi },
                false,
            );
            this.$store.commit("tambahCatatanPerwalianDosen", catatanBaru)
            this.$router.push("/daftar-catatan-perwalian-dosen")
        },
        batal() {
            this.$router.back()
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
        selectedIndex(item) {
            this.nama = item.nama + " / " + item.nim;
            this.nim = item.nim;
            this.hasil = false;
        },
        checkYearExists(yearToCheck) {
            const tempListPresensi = this.$store.getters.getListPresensiAngkatanAll
            const isYearExists = tempListPresensi.some(item => item.tahunAngkatan === yearToCheck);
            return isYearExists
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
        this.waktuAwal = this.getWaktuSekarang();
        this.waktu = this.getTanggalSekarang();
    },
    watch: {
        tahunAngkatan: {
            handler: async function (newVal) {
                if (this.checkYearExists(newVal)) {
                    const hasil = await this.$store.getters.getTemplateListPresensiAngkatan(this.tahunAngkatan)
                    this.listPresensi = hasil["data"]
                }
            }
        },
        nama: {
            handler: function (newVal) {
                let hasilPencarian = this.listMahasiswa.filter(Mahasiswa => {
                    const lowerCaseNama = Mahasiswa.nama.toLowerCase();
                    const lowerCaseNIM = Mahasiswa.nim.toLowerCase();
                    const lowerCaseInput = newVal.toLowerCase();

                    return lowerCaseNama.includes(lowerCaseInput) || lowerCaseNIM.includes(lowerCaseInput);
                });

                if (hasilPencarian.length > 0) {
                    this.isHoverCariPeserta = true
                    this.hasilPencarianNamaHover = hasilPencarian
                } else {
                    this.isHoverCariPeserta = false
                }

            }
        }

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
    }
}


</script>

<style scoped src="../../public/frontend/styling/tambahCatatan.css"></style>