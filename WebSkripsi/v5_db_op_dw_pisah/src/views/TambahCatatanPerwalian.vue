<template lang="">
    <div>
        <head> 
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css">
        </head>

        <!-- Navbar -->
        <Header :namaDosen="this.namaDosen" @click="this.logoutDosen()" />

        <!-- Content -->
        <div id="content" class="container-fluid px-0">
            <div class="col-12 mt-4">
                <BreadcrumbModule class="m-0 ml-5 breadCrumb"></BreadcrumbModule>

            </div>
         
            <div class="d-flex flex-column">
                <div class="container-fluid px-0 mb-xl-1 mb-sm-1">
                    <div id="judulCatatan">
                        <p class="mb-5">Tambah Catatan Perwalian Dosen </p>
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
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"  value="mahasiswa" id="flexRadioDefault1" 
                                        v-model="tipe" :checked="tipe === 'mahasiswa' ? true : false" @click="labelKolomNama = 'Nama',peserta = 'Mahasiswa', myPlaceholder = 'Masukan nama atau NIM mahasiswa'">
                                        <label class="form-check-label ml-4 pt-1 font-weight-normal" for="flexRadioDefault1" id="labelMahasiswa">
                                            Mahasiswa
                                        </label>
                                    </div>
                
                                    <div class="col-12 mb-1 d-flex align-items-center" >
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" value="orang-tua-wali" id="flexRadioDefault2" 
                                        v-model="tipe" :checked="tipe === 'orang-tua-wali' ? true : false" @click="labelKolomNama = 'Nama', peserta = 'Orang Tua', myPlaceholder = 'Masukan nama atau NIM mahasiswa'">
                                        <label class="form-check-label ml-4 pt-1 font-weight-normal" for="flexRadioDefault2" id="labelOrangTuaWali">
                                            Orang Tua / Wali
                                        </label>
                                    </div>
                
                                    <div class="col-12 mb-1 d-flex align-items-center">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" value="orang-tua-wali-dan-mahasiswa" id="flexRadioDefault3" v-model="tipe" :checked="tipe === 'orang-tua-wali-dan-mahasiswa' ? true : false" 
                                        @click="labelKolomNama = 'Nama',peserta = 'Orang Tua & Mahasiswa',myPlaceholder = 'Masukan nama atau NIM mahasiswa'">
                                        <label class="form-check-label ml-4 pt-1 font-weight-normal" for="flexRadioDefault3" id="labelOrangTuaDanMahasiswa">
                                            Orang Tua / Wali dan Mahasiswa
                                        </label>
                                    </div>
                
                                    <div class="col-12 mb-3 d-flex align-items-center">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" value="grup-angkatan" id="flexRadioDefault4" v-model="tipe" :checked="tipe === 'grup-angkatan' ? true : false" @click="labelKolomNama = 'Tahun Angkatan',myPlaceholder = 'Masukan tahun angkatan'">
                                        <label class="form-check-label ml-4 pt-1 font-weight-normal" for="flexRadioDefault4" id="labelGrupAngkatan">
                                            Grup Angkatan
                                        </label>
                                    </div>
                                
                                    <transition>
                                        <!-- bagian input nama orang tua  -->
                                        <div v-if="tipe === 'orang-tua-wali' || tipe === 'orang-tua-wali-dan-mahasiswa' ? true : false" class="col-12 px-0 mt-2" >
                                            <input id="inputNamaOrangTua" type="text" placeholder="Masukan nama orang tua / wali" v-model="this.namaOrangTua">
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
            
                                <!-- nama mahasiswa / peserta -->
                                <div class="col-12 mb-3 pl-2">
                                    <div class="row">
                                        <div class="col-2 align-self-center pl-2">
                                            <Transition name="slide-fade" mode="out-in">
                                                <span class="font-weight-bold" >{{this.labelKolomNama}}</span>
                                            </Transition>
                                    
                                        </div>
                                        <div class="col-9 align-self-center">    
                                            <div v-if="tipe === 'mahasiswa' || tipe === 'orang-tua-wali' || tipe === 'orang-tua-wali-dan-mahasiswa' ? true : false">
                                                <input id="inputKiri" type="text" :placeholder="[[myPlaceholder]]" v-model="this.inputanCariNama" required>

                                                <div v-if="this.listCariMahasiswa.length > 0" id="hoverCariPeserta" class="mt-2">
                                                    <ul class="list-group">
                                                        <li v-for="(mahasiswa,index) in this.listCariMahasiswa" :key="index" class="list-group-item py-2" @click="selectedIndex(mahasiswa)">
                                                            {{mahasiswa.nama}} / {{mahasiswa.nim}}
                                                        </li>
                                                    </ul>    
                                                </div>
                                                <div v-else-if="this.handlingInputCariNama" id="hoverCariPeserta" class="mt-2 py-4 text-center">
                                                    <ul class="list-group">
                                                        <li class="list-group-item py-2" >
                                                            Mahasiswa yang dicari tidak ditemukan
                                                        </li>
                                                    </ul>  
                                                </div>
                                            </div>      

                                            <div v-else>
                                                <div class="input-group" id="inputanTahunAngkatan">
                                                    <v-combobox
                                                        :items=this.listTahunAngkatanPerwalianDosen
                                                        v-model="this.tahunAngkatan"
                                                        density="compact"
                                                        hide-details
                                                        rounded="lg"
                                                        variant="solo"
                                                        flat
                                                        bg-color="white"
                                                        placeholder="Masukan tahun grup angkatan perwalian"
                                                        persistent-placeholder
                                                        class="dropDownJudul"
                                                        single-line
                                                        clearable
                                                        autofocus
                                                        id="dropDownTahunAngkatan"
                                                    ></v-combobox> 
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
                                        <div class="col-9 align-self-center">
                                            <div v-if="this.tipe !== 'grup-angkatan'">
                                                <input v-bind:class="{
                                                    inputJudulKonsul: this.tipe == 'mahasiswa' || this.tipe == 'orang-tua-wali' || this.tipe == 'orang-tua-wali-dan-mahasiswa', 
                                                }" type="text" class="dropdown-toggle" id="inputJudulCatatan" placeholder="Masukan judul perwalian" v-model="this.judul">
                                            </div>
                                            <div v-else>
                                                <div class="input-group" id="inputanJudulGrupAngkatan">
                                                    <v-combobox
                                                    :items=this.listSaranJudul
                                                    v-model="this.judul"
                                                    rounded="lg"
                                                    density="compact"
                                                    hide-details
                                                    variant="solo"
                                                    flat
                                                    bg-color="white"
                                                    placeholder="Masukan judul catatan"
                                                    persistent-placeholder
                                                    class="dropDownJudul"
                                                    single-line
                                                    clearable
                                                    autofocus
                                                    id="dropDownJudul"
                                                ></v-combobox> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                            <div class="row ml-sm-1">
                                <div class="col-12 mt-0 pl-0 mb-2">
                                    <span v-if="tipe != 'grup-angkatan'"  id="judulItemPerCatatan2" class="mb-5" >Tambah Peserta ({{this.peserta}})</span>

                                    <transition> 
                                        <div v-if="tipe != 'grup-angkatan'">
                                            <div class="mb-3 pt-3 d-flex align-items-center">
                                                <span id="iconCari" class="material-symbols-outlined search ml-2" >
                                                    search
                                                    </span>
                                                    <input id="inputCariMahasiswa" class="readonlyInput" type="text" placeholder="Cari nama peserta lain" title="Mulailah dengan memilih nama mahasiswa, sebelum menambahkan peserta lainnya" v-model='inputanPeserta' @click="scrollPage()" :readonly="this.isReadonly">

                                                <span v-if="inputanPeserta != ''" id="iconClose" class="material-symbols-outlined close ml-2" @click="deleteInputanPeserta()" >
                                                    close
                                                </span>
                                            </div>
                                            
                                             <!-- hasil inputan pencarian daftar peserta lainnya -->
                                            <transition>
                                                <div v-if="this.listDaftarPesertaLainnya.length > 0  && tipe != 'grup-angkatan'" id="daftarPesertaLainnya" >
                                                    <ol class="p-0 list-group" >
                                                        <li v-for="(mahasiswa,index) in this.listDaftarPesertaLainnya" :key="index" class="list-group-item list-group-item-action" id="itemPesertaLain">
                                                            <div class="row" >
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
                                        <span v-if="tipe != 'grup-angkatan'" id="judulItemPerCatatan" >
                                            Daftar Peserta Lain ({{this.peserta}})
                                        </span>
                                    </div>

                                    <!-- wadah untuk peserta lainnya -->
                                    <div class="pt-2" v-if="tipe != 'grup-angkatan'">
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
                </div>
            </div>

            <!-- presensi mahasiswa perwalian  -->
            <div v-if="tipe === 'grup-angkatan'" class="d-flex justify-content-center">
                <div id="inputanMultiline">
                <div id="containerPresensi" class="mt-5">
                        <div id="judulPresensi">
                            <p class="font-weight-bold">Presensi Mahasiswa Perwalian Angkatan {{this.tahunAngkatan}}</p>
                            <v-btn v-if="this.listPresensi.length != 0" class="mb-3" :color="this.btnHadirSemuaColor" @click="this.btnUbahWarna()">
                                {{this.pesanBtnHadirSemua}}
                            </v-btn>
                        </div>
                        <div v-if="this.listPresensi.length > 0" id="presensiMahasiswa">
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
                            <v-btn type="submit" id="buttonBatal" @click="this.batal()">Batal</v-btn>
                        </div>
    
                        <div class="col-xl-6 col-sm-6 d-flex justify-content-end mb-5">
                            <v-btn type="submit" :disabled="this.tombolTidakAktif" id="buttonSimpan" @click="this.simpan()">Simpan</v-btn>
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
import BreadcrumbModule from '@/views/BreadcrumbModule.vue';
import Header from "@/components/header/Header.vue"
import axios from 'axios'

export default {
  name: "TambahCatatanPerwalian",
  components: {
    BreadcrumbModule, Header
  },
  data() {
    return {
      //variabel untuk tambah catatan 
      nim: null,
      waktu: null,
      namaOrangTua: null,
      agendaPerwalian: null,
      waktuAwal: null,
      waktuAkhir: null,
      //variabel untuk DOMS
      textNama: "Nama",
      peserta: "Mahasiswa",
      labelKolomNama: "Nama",
      myPlaceholder: "Masukan nama atau NIM mahasiswa",
      myValueJudul: null,
      hasil: null,
      listDaftarPesertaLainnya: [],
      /////////////////////////////////////////////
      kodeDosen: null,
      inputanCariNama: "",
      listCariMahasiswa: [],
      nimMahasiswa: null,
      namaMahasiswa: null,
      inputanPeserta: null,
      listDaftarPesertaLainnya: [],
      wadahPesertaLainnya: [],
      pesanSnackBar: null,
      listTahunAngkatanPerwalianDosen: [],
      listPresensi: [],
      isReadonly: true,
      tombolTidakAktif: false,
      isCariNamaNotFound: false,
      tipe: "mahasiswa",
      tahunAngkatan: null,
      listSaranJudul: [
        "Catatan Perwalian Pra-Registrasi",
        "Catatan Perwalian Pra-UTS",
        "Catatan Perwalian Pra-UAS"
      ],
      judul: null,
      namaDosen: localStorage.getItem("namaDosen"),
      btnHadirSemuaColor: "success",
      pesanBtnHadirSemua: "Buat 'Hadir' Semua Mahasiswa"

    }
  },
  created() {
    this.scrollTop();
    this.initData()
  },
  methods: {
    async initData() {
      this.waktuAwal = this.getWaktuSekarang();
      this.waktu = this.getTanggalSekarang();

      this.kodeDosen = localStorage.getItem("kodeDosen")

      try {
        const response = await axios.get(process.env.VUE_APP_API_DATAWAREHOUSE + `/angkatanMahasiswaPerwalian/`, {
          params: {
            kode_dosen: this.kodeDosen,
          },
        });

        if (response.data.error === false) {
          this.listTahunAngkatanPerwalianDosen = response.data.response.tahun_angkatan;
        } else {
          this.listTahunAngkatanPerwalianDosen = [];
        }
      } catch (error) {
        console.error("Terjadi kesalahan saat mengambil data:", error);
        this.listTahunAngkatanPerwalianDosen = [];
      }
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
    addPesertaKeWadahPesertaLainnya(mahasiswa) {
      let checkExists = this.isMahasiswaExits(mahasiswa.nim)

      switch (checkExists) {
        case "push":
          if (this.wadahPesertaLainnya.length < 5) {
            const objectMahasiswa = {
              nama: mahasiswa.nama,
              nim: mahasiswa.nim,
              id_catatan_perwalian_dosen: 0
            }
            this.wadahPesertaLainnya.push(objectMahasiswa);
            break;
          } else {
            this.pesanSnackBar = "Maksimal peserta lain hanya 5 orang"
            this.snackbar()
            break;
          }
        case "mahasiswa-sudah-ada":
          this.pesanSnackBar = "Mahasiswa tersebut sudah ada di daftar peserta lainnya"
          this.snackbar()
          break;
        case "mahasiswa-input":
          this.pesanSnackBar = "Tidak bisa menambahkan mahasiswa yang sedang dalam perwalian"
          this.snackbar()
          break;
      }
    },
    isMahasiswaExits(inputNim) {
      let checkExists = this.wadahPesertaLainnya.some(mahasiswa => mahasiswa.nim === inputNim);
      let hasilCode = ""
      if (inputNim !== this.nimMahasiswa) {  //cek apakah nim peserta lain merupakan mahasiswa yang sedang melakukan perwalian
        if (!checkExists) { // cek apakah nim peserta lain sudah ada di wadahPesertaLainnya
          hasilCode = "push"
        } else {
          hasilCode = "mahasiswa-sudah-ada"
        }
      } else {
        hasilCode = 'mahasiswa-input'
      }
      console.log(hasilCode);
      return hasilCode
    },
    deletePesertaLain(index) {
      console.log(index);
      this.wadahPesertaLainnya.splice(index, 1);
    },
    async getMahasiswaPerwalianByTahun() {
      try {
        const response = await axios.get(process.env.VUE_APP_API_DATAWAREHOUSE + `/mahasiswaPerwalianPerTahun/`, {
          params: {
            kode_dosen: this.kodeDosen,
            tahun_angkatan: this.tahunAngkatan,
          },
        });

        if (response.data.error === false) {
          this.listPresensi = response.data.response.list_mahasiswa;
        } else {
          this.listPresensi = [];
        }
      } catch (error) {
        console.error("Terjadi kesalahan saat mengambil data:", error);
        this.listPresensi = [];
      }
    },
    async simpan() {
      if (!this.isFieldKosong()) { //mengecek apakah ada field yang kosong 
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

        //insert catatan baru mahasiswa peserta lainnya
        if (this.wadahPesertaLainnya.length > 0) {
          for (let i = 0; i < this.wadahPesertaLainnya.length; i++) {
            const tempParamObject = paramObject
            tempParamObject.nim = this.wadahPesertaLainnya[i].nim
            tempParamObject.nama = this.wadahPesertaLainnya[i].nama
            tempParamObject.nama_orang_tua = null //sementara orang tua peserta lainnya kosong
            tempParamObject.tambah_peserta = []

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
            is_head: true, //flag kalau mahasiswa YBS adalah mahasiswa yang ajak teman"nya perwalian bersama
          }

          //buat variable baru untuk wadahPesertaLainnya (karena jika ditambah langsung ke this.wadahPesertaLainnya, akan update di ui websitenya)
          tempWadah = []
          for (let i = 0; i < this.wadahPesertaLainnya.length; i++) {
            tempWadah.push(this.wadahPesertaLainnya[i])
          }
          // push objek mahasisw YBS ke indekx 0
          tempWadah.unshift(objectMahasiswaYBS);

          //ubah ke nilai awal mahasiswa ybs
          paramObject.nim = this.nimMahasiswa
          paramObject.nama = this.namaMahasiswa
          paramObject.nama_orang_tua = this.namaOrangTua //sementara orang tua peserta lainnya kosong
          paramObject.tambah_peserta = tempWadah // re assign nilai wadahPesertaLainnya dengan nilai yang baru (karena ada id catatan yang baru)
        }

        //insert catatan baru mahasiswa ybs perwalian (juga untuk tipe perwalian grup angkatan)
        //=== Tambah Catatan YBS ====
        try {
          const response = await axios.post(process.env.VUE_APP_API_OPERASIONAL + `/tambahCatatanPerwalianDosen/`, paramObject);

          if (response.data.success) {
            //update tambah_peserta di catatan mahasiswa bersangkutan
            if (tempWadah != null) {
              for (let i = 0; i < tempWadah.length; i++) {
                try {
                  let paramObject = {
                    tambah_peserta: tempWadah,
                    id_catatan_perwalian_dosen: tempWadah[i].id_catatan_perwalian_dosen,
                  }
                  await axios.put(process.env.VUE_APP_API_OPERASIONAL + `/updateTambahPesertaCatatan/`, paramObject);

                } catch (error) {
                  console.error("Terjadi kesalahan saat mengambil data:", error);
                }
              }
            }

            this.pesanSnackBar = "Berhasil menambahkan catatan"
            this.snackbar()

            const waktuTunggu = 2000;
            setTimeout(() => {
              this.$router.push("/daftar-catatan-perwalian-dosen");
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
    isFieldKosong() { // true jika ada field yang kosong
      if (this.tipe == 'grup-angkatan') {
        return (
          this.judul == null ||
          this.agendaPerwalian == null ||
          this.tahunAngkatan == null
        )
      } else if (this.tipe == 'orang-tua' || this.tipe == 'orang-tua-wali-dan-mahasiswa') {
        return (
          this.judul == null ||
          this.nimMahasiswa == null ||
          this.namaMahasiswa == null ||
          this.namaOrangTua == null ||
          this.agendaPerwalian == null
        )
      }
      else {
        return (
          this.judul == null ||
          this.nimMahasiswa == null ||
          this.namaMahasiswa == null ||
          this.agendaPerwalian == null
        )
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
      const now = new Date();
      const jam = now.getHours().toString().padStart(2, '0');
      const menit = now.getMinutes().toString().padStart(2, '0');
      const detik = now.getSeconds().toString().padStart(2, '0');

      return `${jam}:${menit}:${detik}`;
    },
    selectedIndex(item) {
      this.inputanCariNama = item.nama + " / " + item.nim
      this.nimMahasiswa = item.nim
      this.namaMahasiswa = item.nama
    },
    logoutDosen() {
      localStorage.clear();
      this.$router.push("/login")
    },
    btnUbahWarna() {
      switch (this.btnHadirSemuaColor) {
        case "success":
          this.btnHadirSemuaColor = "blue-grey-lighten-2"
          this.pesanBtnHadirSemua = "Buat 'Belum Presensi' Semua Mahasiswa"

          //ubah semua mahasiswa menjadi hadir
          this.listPresensi.forEach((mahasiswa) => {
            mahasiswa.status = "Hadir";
          });
          break;
        case "blue-grey-lighten-2":
          this.btnHadirSemuaColor = "success"
          this.pesanBtnHadirSemua = "Buat 'Hadir' Semua Mahasiswa"
          //ubah semua mahasiswa menjadi Belum Presensi
          this.listPresensi.forEach((mahasiswa) => {
            mahasiswa.status = "Belum Presensi";
          });

          break;
      }
      this.btnHadirSemuaColor
    }

  }, mounted() {
    import('bootstrap');
    import('bootstrap/dist/css/bootstrap.min.css');

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
  watch: {
    tahunAngkatan: {
      handler: async function (newVal) {
        this.getMahasiswaPerwalianByTahun()
      }
    },
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
  },
  computed: {
    handlingInputCariNama() {
      if (!this.inputanCariNama.includes("/") && this.listCariMahasiswa.length == 0 && this.inputanCariNama != '') {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped src="../../public/frontend/styling/tambahCatatan.css"></style>