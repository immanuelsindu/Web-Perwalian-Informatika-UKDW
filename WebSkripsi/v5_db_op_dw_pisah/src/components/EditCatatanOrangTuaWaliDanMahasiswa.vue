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
        <div id="content" class="container-fluid px-0">
            <div class="col-12 mt-4 mb-4">
                <BreadcrumbModule class="m-0 ml-5 breadCrumb"></BreadcrumbModule>
            </div>
        
            <div class="d-flex flex-column">
                <div class="container-fluid px-0 mt-4 pt-2">
                    <div id="judulCatatan" class="mb-5">
                        <p>Edit Catatan Orang Tua / Wali dan Mahasiswa</p>
                    </div>
            
                    <div id="tambahCatatan" class="myContainer d-flex">
    
                    
                        <!-- bagian isi waktu nama judul -->
                        <div class="col-lg-4 col-md-9 col-sm-9">
                            <div class="row">
                                <div class="col-12 mt-2 pl-0 mb-2">
                                    <p id="judulItemPerCatatan" class="mb-0">Data Catatan</p>
                                </div>
            
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
            
                                <div class="col-12 mb-3 pl-2">
                                    <div class="row">
                                        <div class="col-2 align-self-center pl-2">
                                            <span class="font-weight-bold">Nama</span>
                                        </div>
                                        <div class="col-9 align-self-center">          
                                            <input id="inputKiri" readonly disabled type="text" v-model="nama">
                                        </div>
                                    </div>
                                </div>
            
                                <div class="col-12 mb-4 pl-2">
                                    <div class="row">
                                        <div class="col-2 align-self-center pl-2">
                                            <span class="mr-4 font-weight-bold">Judul</span>
                                        </div>
                                        <div class="col-9">
                                            <input id="inputJudulKonsul" type="text" class="dropdown-toggle" v-model="judul">
                                        </div>
                                    </div>
                                </div>
    
                                <!-- bagian nama orang tua wali -->
                                <div class="col-12 mb-3 mt-1 pl-2">
                                    <div class="row">
                                        <div class="col-12 pl-2 mb-2 align-self-center">
                                            <span class="font-weight-bold">Nama Orang Tua / Wali</span>
                                        </div>
                                        <div class="col-9 pl-2 align-self-center">          
                                            <input id="inputKiri" type="text" v-model="namaOrangTua" placeholder="Nama orang tua / wali">
                                        </div>
                                    </div>
                                </div>
    
                                <!-- bagian tambah peserta -->
                                <div class="col-lg-12 col-md-9 col-sm-9 mb-sm-2 pl-0" id="cariTambahMahasiswa">
                                    <div class="pt-1">
                                        <p class="mb-0">
                                            <b>Tambah Peserta (Mahasiswa)</b>
                                        </p>
                                    </div>
                                    
                                    
                                    <div id="kolomTambahMahasiswa" class="d-flex align-items-center">
                                        <span class="material-symbols-outlined search ml-2">
                                            search
                                            </span>
                                        <input class="inputCariMahasiswa" type="text" placeholder="Cari nama mahasiswa" v-model="inputanNamaMahasiswa" v-bind:class="{inputCariMahasiswaFocus:showSuggestionList}">
                                    </div>
    
                                    <Transition>
                                        <div v-if="this.listCariNamaMahasiswa.length > 0 && this.inputanNamaMahasiswa != ''" id="hoverCariNamaMahasiswa">
                                            <div id="listNamaPesertaLain" class="py-1 px-0">
                                                <ol class="pr-4">
                                                    <li v-for="(mahasiswa,index) in this.listCariNamaMahasiswa" :key="index">
                                                        <div class="row">
                                                            <div class="col-10">
                                                                <p class="mb-0">{{mahasiswa.nama}} {{mahasiswa.nim}}</p>
                                                            </div>
    
                                                            <div class="col-2 px-0 d-flex align-items-center">
                                                                <span class="material-symbols-outlined delete text-success" @click="addPeserta(mahasiswa.nim, mahasiswa.nama)">
                                                                    add_box
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ol>
                                            </div>
                                        </div>
                                        <div v-else-if="this.listCariNamaMahasiswa.length == 0 && this.inputanNamaMahasiswa != ''" id="hoverCariNamaMahasiswa">
                                            <div id="listNamaPesertaLain" class="py-1 px-0 text-center">
                                                <ol class="list-group">
                                                    <li class="list-group-item">
                                                        <div class="row">
                                                            <div class="col-12">
                                                                <p class="mb-0">Nama mahasiswa tidak ditemukan</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ol>
                                            </div>
                                        </div>
                                    </Transition>
                                </div>
                            </div>
                        </div>
    
                        
    
                        <!-- bagian tipe perwalian -->
                        <div class="col-lg-3 col-md-8 col-sm-9 mb-sm-2 px-0">
                            <transition>
                                <div v-if="this.listMahasiswaPesertaLainnya.length > 0 ">
                                    <div class="mt-2">
                                        <p id="judulItemPerCatatan">Daftar Peserta Lainnya</p>
                                    </div>
    
                                    <div id="kolomDaftarPesertaLainnya">
                                        <div id="listNamaPesertaLain" class="py-2 pl-0 pr-3">
                                           <ol class="mb-0">
                                                <TransitionGroup>
                                                    <li v-for="(mahasiswa, index) in this.listMahasiswaPesertaLainnya" :key="index">
                                                        <div class="d-flex">
                                                            <div class="col px-0 d-inline d-flex">
                                                                <p class="mb-0">
                                                                    {{mahasiswa.nama}} / {{mahasiswa.nim}}
                                                                </p>
                                                                <div v-if="'is_head' in mahasiswa" class="col-1 px-0 ml-2 d-inline d-flex align-items-center">
                                                                    <v-icon class="text-dark" size="default">
                                                                        mdi-crown
                                                                    </v-icon>
                                                                    <v-tooltip activator="parent" content-class="bg-grey-darken-1" location="bottom">Penggagas
                                                                        perwalian</v-tooltip>
                                                                </div>
                                                            </div>
                                                            <div v-if="mahasiswa.id_catatan_perwalian_dosen == 0" class="col-1 px-0 d-flex align-items-center">
                                                                <span class="pl-1 material-symbols-outlined delete text-danger" @click="
                                                                            deletePeserta(index)">
                                                                    delete</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </TransitionGroup>
                                            </ol>
                                        </div>
                                    </div>
                                </div> 
                            </transition> 
                        </div>
                    </div>
                </div>
            </div>
            

            <div class="d-flex flex-column">
                <div class="myContainer mb-2">
                    <div class="d-flex justify-content-end">
                        <div id="hapusCatatan" class="mr-3 d-flex align-items-center" @click="showPopUpHapus(this.$route.params.id)">
                            <p class="text-right m-0">
                                <span class="material-symbols-outlined delete text-danger">
                                    delete
                                    </span>
                                Hapus Catatan
                            </p>
                        </div>

                        <div id="arsipCatatan" class="mr-3 d-flex align-items-center" @click="showPopUpArsip(this.$route.params.id)">
                            <p class="text-right m-0">
                                <span class="material-symbols-outlined archive text-success">
                                    archive
                                    </span>
                                Arsipkan Catatan
                            </p>
                        </div>

                        <div id="salinCatatan" class="mr-3 d-flex align-items-center" @click="this.salinCatatan()">
                            <p class="text-right m-0">
                                <span class="material-symbols-outlined copy text-primary">
                                    content_copy
                                    </span>
                                Salin Catatan
                            </p>
                        </div>
                    </div>
                </div>

                <div class="d-flex justify-content-center">
                    <div id="inputanMultiline">
                        <div id="kolomInputan">
                            <textarea name="agendaPerwalian" id="agendaPerwalian" cols="160" rows="10" v-model="agendaPerwalian"></textarea>
                        </div>
            
                        <div id="buttonBatalSimpan" class="mt-3">
                            <div class="row justify-content-between">
                                <div class="col-xl-6 col-sm-6">
                                    <v-btn id="buttonBatal" type="submit" @click="this.batal()" >Batal</v-btn>
                                </div>
            
                                <div class="col-xl-6 col-sm-6 d-flex justify-content-end mb-5">
                                    <v-btn id="buttonSimpan" :disabled="this.tombolTidakAktif" type="submit" @click="this.simpan()" >Simpan</v-btn>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         

            <!-- overlay hapus arsipkan catatan -->
           <Transition>
            <div id="overlay" v-if="this.showWarningHapus" class="d-flex justify-content-center align-items-center">
                <div id="windowPreferensi">
                    <div id="contentPreferensi" class="p-4">
                        <p class="text-center font-weight-bold mb-3">Yakin hapus catatan ? </p>
                        <p class="px-3 text-center text-danger">Catatan ini akan dihapus secara permanen dan tidak bisa
                            dikembalikan.
                        </p>

                        <!-- bagian tombol simpan batal -->
                        <div class="row mt-4">
                            <div class="col-4 px-0 d-flex justify-content-center">
                                <button class="btn batal" @click="hapusCatatanTidak()">Tidak</button>
                            </div>
                            <div class="col-4 offset-4 px-0 d-flex justify-content-center">
                                <button class="btn simpan" @click="hapusCatatanYa()">Ya</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>

        <!-- overlay hapus warning catatan -->
        <Transition>
            <div id="overlay" v-if="this.showWarningArsip" class="d-flex justify-content-center align-items-center">
                <div id="windowPreferensi">
                    <div id="contentPreferensi" class="p-4">
                        <p class="text-center font-weight-bold mb-3">Yakin arsipkan catatan ? </p>
                        <p class="px-3 text-justify">Ketika catatan ini diarsipkan, Anda tidak bisa
                            mengaksesnya. Namun, Anda dapat memulihkan catatan tersebut melalui menu <span><b>'Lihat
                                    catatan yang diarsipkan'</b></span> yang berada di pojok kanan atas halaman ini
                        </p>

                        <div class="row mt-4">
                            <div class="col-4 px-0 d-flex justify-content-center">
                                <button class="btn batal" @click="arsipCatatanTidak()">Tidak</button>
                            </div>
                            <div class="col-4 offset-4 px-0 d-flex justify-content-center">
                                <button class="btn simpan" @click="arsipCatatanYa()">Ya</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>

        <div id="snackbar">
            <p class="m-0">{{ this.pesanSnackBar }}</p>
        </div>

        </div>
    </div>
</template>

<script>
import axios from "axios";
import BreadcrumbModule from "./BreadcrumbModule.vue";

export default {
  name: "EditCatatanOrangTuaWaliDanMahasiswa",
  components: {
    BreadcrumbModule,
  },
  data() {
    return {
      inputanNimMhs: "",
      data: "",
      waktu: "",
      waktuAwal: "",
      waktuAkhir: "",
      nama: "",
      judul: "",
      namaOrangTua: "",
      tambahPeserta: "",
      agendaPerwalian: "",
      /////////////////////////////////////////////////////////////////
      kodeDosen: "",
      idCatatanPerwalianDosen: 0,
      listCariNamaMahasiswa: [],
      inputanNamaMahasiswa: "",
      listMahasiswaPesertaLainnya: [],
      pesanSnackBar: "",
      tombolTidakAktif: false,
      namaDosen: localStorage.getItem("namaDosen"),
      idHapus: 0,
      idArsip: 0,
      showWarningHapus: false,
      showWarningArsip: false,
    };
  },
  created() {
    this.scrollTop();
    this.initData();
  },
  methods: {
    async initData() {
      this.kodeDosen = localStorage.getItem("kodeDosen");
      this.idCatatanPerwalianDosen = this.$route.params.id;

      //get catatan perwalian dosen by id_catatan_perwalian_dosen
      try {
        const response = await axios.get(
          process.env.VUE_APP_API_OPERASIONAL + `/getCatatanPerwalianDosen/`,
          {
            params: {
              kode_dosen: this.kodeDosen,
              id_catatan_perwalian_dosen: this.idCatatanPerwalianDosen,
            },
          }
        );

        if (response.data.error === false) {
          this.data =
            response.data.response.list_catatan_dosen_perwalian_dosen[0];
        } else {
          this.data = [];
        }
      } catch (error) {
        console.error("Terjadi kesalahan saat mengambil data:", error);
        this.data = [];
      }

      // assign nilai this.data ke v-model yang ada
      this.waktu = this.convertTimestamp(this.data.waktu);
      this.waktuAwal = this.getWaktuSekarangTime();
      this.nim = this.data.nim;
      this.nama = this.data.nama;
      this.judul = this.data.judul;
      this.agendaPerwalian = this.data.agenda_perwalian;

      if (this.data != null) {
        if (this.data.nama_orang_tua == "") {
          this.namaOrangTua = "";
        } else {
          this.namaOrangTua = this.data.nama_orang_tua;
        }
        // daftar peserta lainnya
        if (this.data.tambah_peserta.length > 0) {
          this.listMahasiswaPesertaLainnya = this.data.tambah_peserta;
        } else {
          this.listMahasiswaPesertaLainnya = [];
        }
      }
    },
    snackbar() {
      var x = document.getElementById("snackbar");
      x.className = "show";
      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 3000);
    },
    getWaktuSekarangTime() {
      const waktu = new Date();

      // Mengambil nilai jam, menit, dan detik dari objek Date
      const jam = waktu.getHours();
      const menit = waktu.getMinutes();
      const detik = waktu.getSeconds();

      // Mengonversi nilai jam ke format 2 digit (misalnya: 10 menjadi "10")
      const jamDalamFormat = jam.toString().padStart(2, "0");
      const menitDalamFormat = menit.toString().padStart(2, "0");
      const detikDalamFormat = detik.toString().padStart(2, "0");

      // Menggabungkan nilai jam, menit, dan detik ke dalam format "10:00:00"
      const waktuSekarangWIB = `${jamDalamFormat}:${menitDalamFormat}:${detikDalamFormat}`;

      return waktuSekarangWIB;
    },
    convertToWIB(waktu) {
      const [jam, menit] = waktu.split(":");
      return `${jam}:${menit} WIB`;
    },
    convertTimestamp(timestamp) {
      const date = new Date(timestamp);
      const options = { day: "numeric", month: "long", year: "numeric" };
      const formattedDate = date.toLocaleDateString("id-ID", options);
      return formattedDate;
    },
    addPeserta(nim, nama) {
      if (this.nim != nim) {
        if (!this.isMahasiswaExists(nim)) {
          if (this.listMahasiswaPesertaLainnya.length < 5) {
            const mahasiswa = {
              nim: nim,
              nama: nama,
              id_catatan_perwalian_dosen: 0,
            };
            this.listMahasiswaPesertaLainnya.push(mahasiswa);
          } else {
            this.pesanSnackBar = "Maksimal peserta lain hanya 5 orang";
            this.snackbar();
          }
        } else {
          this.pesanSnackBar =
            "Peserta tersebut sudah ditambahkan di peserta lainnya";
          this.snackbar();
        }
      } else {
        this.pesanSnackBar =
          "Tidak bisa menambahkan mahasiswa yang sedang dalam perwalian";
        this.snackbar();
      }
    },
    isMahasiswaExists(nim) {
      return (
        this.listMahasiswaPesertaLainnya.find(
          (mahasiswa) => mahasiswa.nim === nim
        ) !== undefined
      );
    },
    deletePeserta(index) {
      this.listMahasiswaPesertaLainnya.splice(index, 1);
    },
    presensiHadir(index) {
      var myIndex = index - 1;
      this.listPresensi[myIndex].status = "Hadir";
    },
    presensiAbsen(index) {
      var myIndex = index - 1;
      this.listPresensi[myIndex].status = "Absen";
    },
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Animasi smooth scrolling
      });
    },
    isMahasiswaExists(nim) {
      return (
        this.listMahasiswaPesertaLainnya.find(
          (mahasiswa) => mahasiswa.nim === nim
        ) !== undefined
      );
    },
    async simpan() {
      this.tombolTidakAktif = true;
      this.waktuAkhir = this.getWaktuSekarangTime();
      if (!this.isFieldKosong()) {
        const paramObject = {
          judul: this.judul,
          tipe: "orang-tua-wali-dan-mahasiswa",
          nim: this.nim,
          nama: this.nama,
          nama_orang_tua: "", // sengaja dibuat kosong agar nama orang tua peserta lainnya tidak berubah
          agenda_perwalian: this.agendaPerwalian,
          tambah_peserta: this.listMahasiswaPesertaLainnya,
          waktu: this.getWaktuSekarangDatabase(),
          waktu_awal: this.waktuAwal,
          waktu_akhir: this.waktuAkhir,
          data_presensi_mahasiswa: this.data.data_presensi_mahasiswa,
          id_catatan_perwalian_dosen: this.$route.params.id,
        };

        //mengecek apakah ada peserta lainnya yang baru ditambahkan (memiliki id_catatan_perwalian == 0)
        const isIdNol = this.listMahasiswaPesertaLainnya.some(
          (item) => item.id_catatan_perwalian_dosen === 0
        );

        //update catatan daftar peserta lain
        if (this.listMahasiswaPesertaLainnya.length > 0) {
          for (let i = 0; i < this.listMahasiswaPesertaLainnya.length; i++) {
            if (this.listMahasiswaPesertaLainnya[i].nim != this.nim) {
              if (
                this.listMahasiswaPesertaLainnya[i].hasOwnProperty(
                  "id_catatan_perwalian_dosen"
                ) &&
                this.listMahasiswaPesertaLainnya[i]
                  .id_catatan_perwalian_dosen != 0
              ) {
                //ubah id catatan ke id peserta lain dahulu
                const tempIdCatatan =
                  this.listMahasiswaPesertaLainnya[i]
                    .id_catatan_perwalian_dosen;
                let tempParamObject = paramObject;
                tempParamObject.id_catatan_perwalian_dosen = tempIdCatatan;
                tempParamObject.nim = this.listMahasiswaPesertaLainnya[i].nim;
                tempParamObject.nama = this.listMahasiswaPesertaLainnya[i].nama;
                tempParamObject.nama_orang_tua = ""; // sengaja dibuat kosong agar nama orang tua peserta lainnya tidak berubah

                //update catatan peserta lain berdasarkan id catatannya
                try {
                  await axios.put(
                    process.env.VUE_APP_API_OPERASIONAL + `/updateCatatanPerwalianDosen/`,
                    tempParamObject
                  );
                } catch (error) {
                  console.error(
                    "Terjadi kesalahan saat mengambil data:",
                    error
                  );
                }
              }
              // jika peserta lain tidak punya id_catatan yang di insert sebelumnya , berarti dia peserta baru => insert data baru
              else {
                let tempParamObject = {
                  kode_dosen: this.kodeDosen,
                  judul: this.judul,
                  tipe: "orang-tua-wali-dan-mahasiswa",
                  nim: this.listMahasiswaPesertaLainnya[i].nim,
                  nama: this.listMahasiswaPesertaLainnya[i].nama,
                  nama_orang_tua: "", //nama orang tua mahasiswa memang kosong, karena catatan tipe mahasiswa tidak ada kolom nama orang tua
                  agenda_perwalian: this.agendaPerwalian,
                  tambah_peserta: [], // data objek
                  waktu_awal: this.waktuAwal,
                  waktu_akhir: this.waktuAkhir,
                  data_presensi_mahasiswa: [], // data objek
                  tahun_angkatan: "", // data tahun_angkatan hanya untuk catatan tipe grup-angkatan
                };

                try {
                  const response = await axios.post(
                    process.env.VUE_APP_API_OPERASIONAL + `/tambahCatatanPerwalianDosen/`,
                    tempParamObject
                  );
                  if (response.data.success) {
                    //menambahkan id_catatan_perwalian_dosen dari catatan yang baru saja dibuat
                    this.listMahasiswaPesertaLainnya[
                      i
                    ].id_catatan_perwalian_dosen =
                      response.data.id_catatan_perwalian_dosen;
                  }
                } catch (error) {
                  console.error(
                    "Terjadi kesalahan saat menambah data peserta lainnya",
                    error
                  );
                }
              }
            }
          }
        }

        //atur nilai ke nilai mahasiswa ybs lagi, karena (mungkin) sudah di pakai di tahap sebelumnya
        paramObject.id_catatan_perwalian_dosen = this.$route.params.id;
        paramObject.nim = this.nim;
        paramObject.nama = this.nama;
        paramObject.nama_orang_tua = this.namaOrangTua;
        paramObject.tambah_peserta = this.listMahasiswaPesertaLainnya;

        // update catatan mahasiswa ybs
        try {
          const response = await axios.put(
            process.env.VUE_APP_API_OPERASIONAL + `/updateCatatanPerwalianDosen/`,
            paramObject
          );

          if (response.data.success) {
            //update tambah_peserta di catatan mahasiswa bersangkutan (jika ada peserta baru di this.listMahasiswaPesertaLainnya)
            if (isIdNol) {
              for (
                let i = 0;
                i < this.listMahasiswaPesertaLainnya.length;
                i++
              ) {
                try {
                  let paramObject = {
                    tambah_peserta: this.listMahasiswaPesertaLainnya,
                    id_catatan_perwalian_dosen:
                      this.listMahasiswaPesertaLainnya[i]
                        .id_catatan_perwalian_dosen,
                  };
                  await axios.put(
                    process.env.VUE_APP_API_OPERASIONAL + `/updateTambahPesertaCatatan/`,
                    paramObject
                  );
                } catch (error) {
                  console.error(
                    "Terjadi kesalahan saat mengambil data:",
                    error
                  );
                }
              }
            }

            this.pesanSnackBar = "Berhasil memperbarui catatan";
            this.snackbar();

            const waktuTunggu = 2000;
            setTimeout(() => {
              this.$router.push("/daftar-catatan-perwalian-dosen");
            }, waktuTunggu);
          } else {
            this.pesanSnackBar = "Gagal memperbarui data";
            this.snackbar();
          }
        } catch (error) {
          console.error("Terjadi kesalahan saat mengambil data:", error);
        }
      } else {
        this.pesanSnackBar = "Agenda perwalian atau judul tidak boleh kosong";
        this.snackbar();
      }
    },
    isFieldKosong() {
      //return true kalau fieldnya kosong
      return this.judul == "" && this.agendaPerwalian == "";
    },
    batal() {
      this.$router.back();
    },
    getTanggalSekarang() {
      const months = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
      ];

      const currentDate = new Date();
      const day = currentDate.getDate();
      const month = currentDate.getMonth();
      const year = currentDate.getFullYear();

      const formattedDate = day + " " + months[month] + " " + year;

      return formattedDate;
    },
    getWaktuSekarang() {
      const currentDate = new Date();
      const hours = currentDate.getHours().toString().padStart(2, "0");
      const minutes = currentDate.getMinutes().toString().padStart(2, "0");
      const formattedTime = `${hours}:${minutes} WIB`;

      return formattedTime;
    },
    getWaktuSekarangDatabase() {
      // 2023-07-17 22:07:38.303466 => untuk insert ke database
      const waktu = new Date();

      // Mengambil nilai tahun, bulan, tanggal, jam, menit, detik, dan milidetik dari objek Date
      const tahun = waktu.getFullYear();
      const bulan = String(waktu.getMonth() + 1).padStart(2, "0");
      const tanggal = String(waktu.getDate()).padStart(2, "0");
      const jam = String(waktu.getHours()).padStart(2, "0");
      const menit = String(waktu.getMinutes()).padStart(2, "0");
      const detik = String(waktu.getSeconds()).padStart(2, "0");
      const milidetik = String(waktu.getMilliseconds()).padStart(6, "0");

      // Menggabungkan nilai-nilai tersebut ke dalam format "YYYY-MM-DD HH:mm:ss.SSSSSS"
      const waktuSekarang = `${tahun}-${bulan}-${tanggal} ${jam}:${menit}:${detik}.${milidetik}`;

      return waktuSekarang;
    },
    async cariNamaMahasiswa() {
      try {
        const response = await axios.get(
          process.env.VUE_APP_API_DATAWAREHOUSE + `/searchMahasiswa/`,
          {
            params: {
              kode_dosen: this.kodeDosen,
              inputan: this.inputanNamaMahasiswa,
            },
          }
        );

        if (response.data.error === false) {
          this.listCariNamaMahasiswa = response.data.response.list_mahasiswa;
        } else {
          this.listCariNamaMahasiswa = [];
        }
      } catch (error) {
        console.error("Terjadi kesalahan saat mengambil data:", error);
        this.listCariNamaMahasiswa = [];
      }
    },
    logoutDosen() {
      localStorage.clear();
      this.$router.push("/login");
    },
    showPopUpHapus(id) {
      this.showWarningHapus = true;
      this.idHapus = id;
    },
    hapusCatatanTidak() {
      this.showWarningHapus = false;
    },
    async hapusCatatanYa() {
      try {
        const paramObject = {
          id_catatan_perwalian_dosen: this.idHapus,
        };
        const response = await axios.put(
          process.env.VUE_APP_API_OPERASIONAL + `/deleteCatatanPerwalianDosen/`,
          paramObject
        );

        if (response.data.error === false) {
          this.showWarningHapus = false;

          setTimeout(() => {
            this.pesanSnackBar = "Catatan berhasil dihapus";
            this.snackbar();
            setTimeout(() => {
              this.$router.push({
                name: "DaftarCatatanPerwalianMahasiswa",
                params: { id: this.nim },
              });
            }, 2000);
          }, 200);
        } else {
          console.log("Gagal hapus data");
        }
      } catch (error) {
        console.error("Terjadi kesalahan saat mengambil data:", error);
        this.listMahasiswaPerwalianFiltered = [];
      }
    },
    showPopUpArsip(id) {
      this.showWarningArsip = true;
      this.idArsip = id;
    },
    arsipCatatanTidak() {
      this.showWarningArsip = false;
    },
    async arsipCatatanYa() {
      //melakukan arsip catatan perwalian menjadi true
      //melakukan arsip catatan perwalian menjadi true

      //update catatan untuk daftar peserta lainnya (jika ada)
      let tempCatatan = [];
      try {
        const response = await axios.get(
          process.env.VUE_APP_API_OPERASIONAL + `/getCatatanPerwalianDosen/`,
          {
            params: {
              kode_dosen: this.kodeDosen,
              id_catatan_perwalian_dosen: this.idArsip,
            },
          }
        );

        if (response.data.error === false) {
          tempCatatan = await response.data.response
            .list_catatan_dosen_perwalian_dosen[0];
        } else {
          tempCatatan = [];
        }
      } catch (error) {
        console.error("Terjadi kesalahan saat mengambil data:", error);
      }

      // cek apakah catatan tersebut memiliki daftar peserta lain yang ikut di-update data juga
      if (
        tempCatatan.tambah_peserta != [] &&
        tempCatatan.tambah_peserta != undefined
      ) {
        const daftarPesertaLainnya = tempCatatan.tambah_peserta;

        for (let i = 0; i < daftarPesertaLainnya.length; i++) {
          //update catatan mahasiswa daftar peserta lain
          try {
            const paramObject = {
              id_catatan_perwalian_dosen:
                daftarPesertaLainnya[i].id_catatan_perwalian_dosen,
              is_arsip: true,
            };
            await axios.put(
              process.env.VUE_APP_API_OPERASIONAL + `/updateIsArsipCatatanPerwalianDosen/`,
              paramObject
            );
          } catch (error) {
            console.error("Terjadi kesalahan saat mengambil data:", error);
          }
        }
      }

      /////////////////////////////////////////////////////////////////////

      // update catatan mahasiswa ybs
      try {
        const paramObject = {
          id_catatan_perwalian_dosen: this.idArsip,
          is_arsip: true,
          filter_arsip: "current_time",
        };
        const response = await axios.put(
          process.env.VUE_APP_API_OPERASIONAL + `/updateIsArsipCatatanPerwalianDosen/`,
          paramObject
        );

        if (response.data.error === false) {
          this.showWarningArsip = false;
          setTimeout(() => {
            this.pesanSnackBar = "Berhasil mengarsipkan catatan";
            this.snackbar();
            setTimeout(() => {
              this.$router.push({
                name: "DaftarCatatanPerwalianMahasiswa",
                params: { id: this.nim },
              });
            }, 2000);
          }, 200);
        } else {
          this.listMahasiswaPerwalianFiltered = [];
        }
      } catch (error) {
        console.error("Terjadi kesalahan saat mengambil data:", error);
      }
    },
    salinCatatan() {
      // agendaPerwalian
      let copyGfGText = document.getElementById("agendaPerwalian");
      copyGfGText.select();
      document.execCommand("copy");

      const selection = window.getSelection();
      selection.removeAllRanges();

      this.pesanSnackBar = "Catatan disalin ke clipboard";
      this.snackbar();
    },
  },
  mounted() {
    const script1 = document.createElement("script");
    script1.src = "https://code.jquery.com/jquery-3.5.1.slim.min.js";
    script1.integrity =
      "sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj";
    script1.crossOrigin = "anonymous";
    document.head.appendChild(script1);

    //popper.min.js
    const script2 = document.createElement("script");
    script2.src =
      "https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js";
    script2.integrity =
      "sha384-hSM2mzKd06KfNmOz6mK6+sfuLdYVjI1MKOpnE+O+hNEZmZ+zQp8hJz3uPL2twNJX";
    script2.crossOrigin = "anonymous";
    document.head.appendChild(script2);

    //bundle.min.js
    const script3 = document.createElement("script");
    script3.src =
      "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js";
    script3.integrity =
      "sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx";
    script3.crossOrigin = "anonymous";
    document.head.appendChild(script3);
  },
  watch: {
    inputanNamaMahasiswa: {
      handler: function (namaMahasiswa) {
        this.cariNamaMahasiswa();
      },
    },
  },
};
</script>

<style scoped src="../../public/frontend/styling/editCatatanMahasiswa.css"></style>