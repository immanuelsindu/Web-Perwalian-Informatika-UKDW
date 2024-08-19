<template>
  <div id="body">

    <head>
      <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css">
    </head>

    <!-- Navbar -->
    <Header :namaDosen="this.namaDosen" @click="this.logoutDosen()" />
    <div id="drawerContainer" class="mt-4 ">
      <div id="navDrawer">
        <v-icon color="brown-darken-4" size="large" @click.stop="this.drawer = !this.drawer">
          mdi-menu
        </v-icon>
        <v-tooltip activator="parent" content-class="bg-grey-darken-1" location="bottom">Menu Pintas
        </v-tooltip>
      </div>

      <div id="sideDrawer">
        <template>
          <v-card>
            <v-layout>
              <v-navigation-drawer v-model="this.drawer" temporary width="300">

                <div class="text-right pt-5 mt-4 pr-2">
                  <v-icon color="brown-darken-4" size="large" @click.stop="this.drawer = !this.drawer">
                    mdi-close
                  </v-icon>
                </div>

                <div class="pl-3 listItemSideDrawer">
                  <v-list-item><b>Menu Pintas</b></v-list-item>
                  <v-list-item link title="Catatan Perwalian Mahasiswa"
                    @click="this.scrollTo('catatan-perwalian-mahasiswa')"></v-list-item>
                  <v-list-item link title="Indeks Prestasi" @click="this.scrollTo('indeks-prestasi')"></v-list-item>
                  <v-list-item link title="Presensi" @click="this.scrollTo('presensi')"></v-list-item>
                  <v-list-item link title="Poin Keaktifan" @click="this.scrollTo('poin-keaktifan')"></v-list-item>
                  <v-list-item link title="Profil Profesional Mandiri"
                    @click="this.scrollTo('profil-profesional-mandiri')"></v-list-item>
                  <v-list-item link title="Pembayaran" @click="this.scrollTo('pembayaran')"></v-list-item>
                  <v-list-item link title="Yudisium" @click="this.scrollTo('yudisium')"></v-list-item>
                  <v-list-item link title="Surat Peringatan" @click="this.scrollTo('surat-peringatan')"></v-list-item>
                  <v-list-item link title="Riwayat Cekal" @click="this.scrollTo('riwayat-cekal')"></v-list-item>
                  <v-list-item link title="Kartu Rencana Studi" @click="this.scrollTo('krs')"></v-list-item>
                </div>
              </v-navigation-drawer>
            </v-layout>
          </v-card>
        </template>
      </div>
    </div>

    <!-- Content -->
    <div id="content" class=" row container-fluid">
      <div class="col-12 mt-4">
        <BreadcrumbModule class="m-0 ml-5 breadCrumb"></BreadcrumbModule>

      </div>
      <div id="contentKiri" class="col-lg-3 col-sm-12 px-0 pl-2">
        <div class="mySticky">
          <div class="d-flex justify-content-center">
            <img id="fotoMahasiswa" src="../../public/frontend/media/fotoMahasiswa.jpg" alt="">
          </div>

          <div id="infoDosen" class="mt-3">
            <p class="namaMahasiswa px-2">{{ this.namaMahasiswa }}</p>
            <p class="text-center mb-2">{{ this.$route.params.id }}</p>
            <div class="garis"></div>
            <div class="row mt-3 ml-5 pl-3">
              <div id="itemMahasiswaKiri" class="col-5 px-0 d-flex justify-content-start">
                <p>Total SKS</p>
              </div>
              <div id="itemMahasiswaKanan" class="col-5 d-flex justify-content-end">
                <p>{{ this.totalSKSMahasiswa }} / 144</p>
              </div>
            </div>

            <div class="row mt-2 ml-5 pl-3">
              <div id="itemMahasiswaKiri" class="col-5 px-0 d-flex justify-content-start">
                <p>IP Kumulatif</p>
              </div>
              <div id="itemMahasiswaKanan" class="col-5 d-flex justify-content-end">
                <p>{{ this.ipkMahasiswa }} / 4.00</p>
              </div>
            </div>

            <div class="row mt-2 ml-5 pl-3">
              <div id="itemMahasiswaKiri" class="col-5 px-0 d-flex justify-content-start">
                <p>Poin Keaktifan</p>
              </div>
              <div id="itemMahasiswaKanan" class="col-5 d-flex justify-content-end">
                <p>{{ this.sacMahasiswa.poin_keaktifan }} / 50 </p>
              </div>
            </div>

            <div class="row mt-2 ml-5 pl-3">
              <div id="itemMahasiswaKiri" class="col-5 px-0 d-flex justify-content-start">
                <p>Status</p>
              </div>
              <div id="itemMahasiswaKanan" class="col-5 d-flex justify-content-end">
                <p class="statusMahasiswa">{{ this.getStatus(this.statusMahasiswa) }}</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div id="contentKanan" class="col-lg-9 col-sm-12 mb-md-5 pl-0">
        <div class="row mt-4">
          <div class="col-12 ml-3">
            <div class="row">
              <div class="col-lg-6 col-sm-12">
                <p id="judulListCatatan">Catatan Perwalian Mahasiswa</p>
                <p id="tipeCatatanCircle">
                  <span class="material-symbols-outlined bullet align-middle">
                    circle
                  </span>
                  <span class="mr-1">Mahasiswa</span>
                  <span class="material-symbols-outlined bullet align-middle">
                    circle
                  </span>
                  <span class="mr-1"> Orang Tua / Wali</span>
                  <span class="material-symbols-outlined bullet align-middle">
                    circle
                  </span>
                  <span class="mr-1"> Orang Tua / Wali & Mahasiswa</span>
                </p>
              </div>
              <div class="col-lg-5 col-sm-12 d-flex justify-content-end ml-5">
                <div class="d-flex align-items-center">

                  <router-link
                    :to="{ name: 'TambahCatatanMahasiswa', params: { id: this.$route.params.id, canBack: 1 } }"
                    id="tambahCatatan" class="align-middle col-2">
                    <span class="material-symbols-outlined mr-1 pt-1">
                      add_box
                    </span>
                  </router-link>

                  <router-link
                    :to="{ name: 'TambahCatatanMahasiswa', params: { id: this.$route.params.id, canBack: 1 } }"
                    id="tambahCatatan" class="judulTambahCatatan">
                    Tambah Catatan Perwalian
                  </router-link>

                </div>

              </div>
            </div>

          </div>

          <div class="col-12 mt-2 pr-5 ml-3" id="listCatatanMahasiswaTerbaru">
            <div v-if="this.listCatatanMahasiswaTerbaru.length > 0" class="row mr-2" id="listCatatanMahasiswaTerbaru">
              <div v-for="(catatan, index) in this.listCatatanMahasiswaTerbaru" :key="index"
                class="col-xl-3 col-md-4 mb-4 mr-3 col-sm-6 pl-3" id="itemCatatan">
                <div id="itemCatatanPerwalian" class="card">
                  <div class="card-body">

                    <span v-if="catatan.tipe === 'mahasiswa'" id="garisMahasiswa"></span>
                    <span v-else-if="catatan.tipe === 'orang-tua-wali'" id="garisOrangTua"></span>
                    <span v-else-if="catatan.tipe === 'orang-tua-wali-dan-mahasiswa'"
                      id="garisOrangTuaMahasiswa"></span>

                    <h5 class="card-title mb-2 text-center">{{ catatan.judul }}</h5>
                    <h5 class="card-subtitle mb-4 text-muted">{{ this.convertTimestamp(catatan.waktu) }}
                    </h5>
                    <p class="card-text text-justify">{{ this.limitAgenda(catatan.agenda_perwalian) }}
                      <span>
                        <router-link
                          :to="{ name: 'EditCatatanMahasiswa', params: { id: catatan.id_catatan_perwalian_dosen } }"
                          class="font-weight-bold">
                          <u>Lihat selengkapnya</u>
                        </router-link>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="row mr-2">
              <div class="col-xl-3 col-md-4 mb-4 mr-3 col-sm-6 pl-3">
                <div id="itemCatatanPerwalian" class="card">
                  <div class="card-body">

                    <span id="garisMahasiswa"></span>

                    <h5 class="card-title mb-4 mt-3 text-center" id="judulCatatan">Tidak ada catatan
                    </h5>
                    <h5 class="card-subtitle mb-2 text-muted">Tidak ada catatan perwalian terbaru
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 d-flex justify-content-start ml-3 pr-5 mb-5">
            <div id="lihatSemuaCatatan" class="mr-4">
              <router-link id="lihatSemuaCatatanPerwalianMahasiswa"
                :to="{ name: 'DaftarCatatanPerwalianMahasiswa' }">Lihat
                semua catatan perwalian
                mahasiswa</router-link>
            </div>
          </div>

          <div id="resumeMahasiswa" class="col-12 mb-5 ml-3">
            <div id="resumeBaris1" class="row mb-5">
              <div id="presensiMahasiswa" class="col-xl-3 col-md-4 col-sm-6">
                <div class="d-flex align-items-center mb-3">
                  <p id="judulPresensi" class="m-0">Presensi</p>
                  <div class="pl-2">
                    <v-icon size="default" color="grey-darken-1">
                      mdi-information-outline
                    </v-icon>
                    <v-tooltip activator="parent" location="bottom" content-class="bg-grey-darken-1">Presensi di bawah
                      merupakan Presensi Mahasiswa di semester berjalan saat ini.
                    </v-tooltip>
                  </div>
                </div>

                <div id="cardPresensi" class="card">
                  <div class="card-body">
                    <h5 class="card-title">Kuliah Minggu ke - 8</h5>
                    <h6 class="card-subtitle mb-3 ">Semester 7</h6>
                    <div v-for="item in matkul" :key="item" id="infoPresensi" class="row">
                      <div id="namaMatkul" class="col-7 offset-1">
                        <p>{{ item[0] }}</p>
                      </div>
                      <div id="jumlahHadir" class="d-flex align-items-center col-4 ">
                        <p class="text-center ">{{ item[1] }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="poinKeaktifan" class="col-xl-3 col-md-4 col-sm-6">
                <p>Poin Keaktifan</p>
                <div id="cardPoinKeaktifan" class="card">
                  <div class="card-body">
                    <div class="row ">
                      <div class="col-9">
                        <h5 class="card-title">Syarat Poin Keaktifan</h5>
                      </div>
                      <div class="d-flex justify-content-end ml-2 col-2">
                        <p class="card-title align-self-center">{{ this.sacMahasiswa.syarat }}</p>
                      </div>
                      <div class="col-12">
                        <h5 class="card-title">Poin Keaktifan saat ini</h5>
                        <div class="row">
                          <div class="col-7">
                            <ol>
                              <li>Kegiatan</li>
                              <li>Jabatan</li>
                              <li>Prestasi</li>
                            </ol>
                          </div>
                          <div class="col-3 px-0 d-flex justify-content-end">
                            <ol id="poinPerItem">
                              <li>{{ this.sacMahasiswa.kegiatan }}</li>
                              <li>{{ this.sacMahasiswa.jabatan }}</li>
                              <li>{{ this.sacMahasiswa.prestasi }}</li>
                            </ol>
                          </div>

                          <div id="garisPoinKeaktifan" class="col-9"></div>

                          <div id="totalPoinKeaktifan" class="row  ">
                            <div class="col-6 px-0 offset-1">
                              <p id="judulTotal">Total</p>
                            </div>
                            <div class="col-4 offset-1 px-0 pr-1 text-center">
                              <p class="cekalSAC">
                                <v-tooltip v-if="this.sacMahasiswa.poin_keaktifan < this.sacMahasiswa.syarat"
                                  activator="parent" width="400" location="bottom"
                                  content-class="bg-grey-darken-1">Mahasiswa ini memiliki
                                  poin keaktifan di bawah 50% dari total Syarat Poin
                                  Keaktifan, dalam 2 tahun perkuliahan
                                </v-tooltip>
                                {{ this.sacMahasiswa.poin_keaktifan }}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="indeksPrestasi" class="col-xl-5 col-md-8 col-sm-10 mb-sm-3">
                <p id="judulIP">Indeks Prestasi</p>
                <div id="itemIPK" class="card">
                  <div class="card-body">
                    <div class="row">
                      <div id="batasTengah" class="">
                      </div>
                      <div id="ipKiri" class="col-6">
                        <p>Indeks Prestasi Semester</p>
                        <div v-for="(item, index) in this.listIPSMahasiswa" :key="item" class="row ml-1 mb-2">
                          <div id="infoSemesterSKSKiriA" class="mr-3 col-6">
                            <p class="mb-0">Semester {{ index + 1 }}</p>
                            <p class="mb-0">{{ item.total_sks }} SKS</p>
                          </div>
                          <p id="infoSemesterSKSKananA" class="my-auto  col-3">{{ item.ips }}</p>
                        </div>
                      </div>

                      <div id="ipKanan" class="col-6">
                        <p>Indeks Prestasi Kumulatif</p>
                        <div class="row mx-1 mb-2">
                          <div id="infoSemesterSKSKiriB" class="col-7">
                            <p class="mb-0">Total SKS</p>
                          </div>
                          <div id="infoSemesterSKSKananB" class="col-5 px-0">
                            <p class="my-auto">{{ this.totalSKSMahasiswa }}</p>
                          </div>
                        </div>
                        <div class="row mx-1 mb-2">
                          <div id="infoSemesterSKSKiriB" class="col-6">
                            <p class="mb-0">IPK</p>
                          </div>
                          <div id="infoSemesterSKSKananB" class="col-6">
                            <p class="my-auto">{{ this.ipkMahasiswa }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div id="resumeBaris2" class="row mb-5">
              <div class="col-xl-4 col-md-8 mb-lg-3 mb-sm-3 col-sm-8">
                <p id="judulProfilMahasiswa">Profil Lulusan Prodi Informatika</p>
                <div class="card d-flex justify-content-center" id="cardProfilMahasiswa">
                  <div class="card-body pb-0" id="containerProfilMahasiswa">
                    <div v-for="(profil, index) in this.profil" :key="index" id="judulProfil">
                      <p>
                        {{ profil[0] }}
                      </p>
                      <div class="row">
                        <div class="col-8 px-0 d-flex align-items-center">
                          <ol class="orderedList">
                            <li>Mata Kuliah Wajib Profil</li>
                            <li>Mata Kuliah Opsional</li>
                          </ol>
                        </div>
                        <div class="col-4 px-0 d-flex align-items-center" id="jumlahMatkulProfil">
                          <ol class="orderedList">
                            <li>{{ this.listTotalMataKuliahProfilDiambil[index] }}/{{ profil[1]
                              }}
                            </li><br>
                            <li>{{ this.listTotalMataKuliahOpsionalProfilDiambil[index] }}/{{
                              profil[2] }}</li>
                          </ol>
                        </div>
                      </div>

                    </div>
                    <div class="col-12 d-flex justify-content-end pb-4 pr-4">
                      <router-link id="lihatSelengkapnya"
                        :to="{ name: 'ProfilMahasiswa', params: { id: $route.params.id } }"
                        class="font-weight-bold">Lihat
                        selengkapnya</router-link>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xl-4 col-md-6 mb-xl-4 col-sm-6">
                <p id="judulPembayaran">Pembayaran</p>
                <div id="cardPembayaran" class="card">
                  <div class="card-body">
                    <div id="bayarBaris1" class="d-flex flex-row mb-2">
                      <div class="d-flex align-items-center col-6 pl-0">
                        <p class="mb-0">SPP Semester 7</p>
                      </div>
                      <div class="col-6 text-center pr-0">
                        <p class="mb-0">Sudah Bayar</p>
                      </div>
                    </div>
                    <div id="bayarBaris2" class="d-flex flex-column">
                      <div class="col-12 pl-1">
                        <p class="mb-1"><b>Riwayat Beasiswa</b></p>
                        <ol class="pl-4">
                          <li>Insentif Biaya Pendidikan Genap 2020/2021</li>
                          <li>Beasiswa MBKM Dikti</li>
                          <li>Bantuan UKT GASAL 2021/2022</li>
                          <li>Beasiswa UNITED BOARD HONGKONG</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-md-6 col-sm-6">
                <p id="judulPembayaran">Yudisium</p>
                <div id="cardPembayaran" class="card">
                  <div class="card-body">
                    <div id="infoYudisium" class="row">
                      <div class="col-7">
                        <p class="pr-0 mb-2">Aturan Umum</p>
                      </div>
                      <div class="col-5 text-right ml-0" id="jumlahProgresYudisium">
                        <p>2/2</p>
                      </div>

                      <div class="col-8">
                        <p class="pr-0 mb-2">Prosedur Pendaftaran Yudisium</p>
                      </div>
                      <div class="col-4 text-right ml-0" id="jumlahProgresYudisium">
                        <p>3/5</p>
                      </div>

                      <div class="col-7">
                        <p class="pr-0 mb-2">Berkas Yudisium</p>
                      </div>
                      <div class="col-5 text-right ml-0" id="jumlahProgresYudisium">
                        <p>7/10</p>
                      </div>

                      <div class="col-12 d-flex justify-content-end">
                        <router-link id="lihatSelengkapnya"
                          :to="{ name: 'DetailYudisium', params: { id: $route.params.id } }"
                          class="font-weight-bold">Lihat
                          selengkapnya</router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="resumeBaris3" class="row mb-5">
              <!-- surat peringatan -->
              <div class="col-xl-4 col-lg-6 col-md-5 col-sm-7">
                <p id="judulSuratPeringatan">Surat Peringatan</p>
                <div id="cardSuratPeringatan" class="card">
                  <div class="card-body">
                    <div v-for="index in suratPeringatan.length" :key="index" class="row mb-2">
                      <div class="col-2">
                        <p>{{ index }}.</p>
                      </div>
                      <div class="col pl-0">
                        <div class="row">
                          <div class="col-12 pl-0">
                            <p class="mb-0"><b>{{ suratPeringatan[index - 1][0] }}</b></p>
                          </div>
                          <div class="col-12 pl-0">
                            <p class="mb-0">{{ suratPeringatan[index - 1][1] }}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <!-- riwayat cekal -->
              <div class="col-xl-3 col-lg-6 col-md-5 col-sm-7">
                <p id="judulSuratPeringatan">Riwayat Cekal</p>
                <div id="cardSuratPeringatan" class="card">
                  <div v-if="this.cekalMahasiswa.length > 0" class="card-body">
                    <div v-for="(cekal, index) in this.cekalMahasiswa" :key="index" class="row mb-2">
                      <div class="col-3 text-center pl-1">
                        <p>{{ index + 1 }}.</p>
                      </div>
                      <div class="col pl-0">
                        <div class="row">
                          <div class="col-12 pl-0">
                            <p class="mb-0"> <b>{{ cekal.jenis }}</b> </p>
                          </div>
                          <div class="col-12 pl-0">
                            <p class="mb-0">{{ cekal.deskripsi }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div v-else class="card-body">
                    <div class="row">
                      <div class="col-3 text-center pl-1">
                        <p></p>
                      </div>
                      <div class="col pl-0">
                        <div class="row">
                          <div class="col-12 pl-0">
                            <p class="mb-0"> <b>Mahasiswa ini tidak memiliki data cekal</b> </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="resumeBaris4" class="row">
              <div class="col-sm-12">
                <div class="d-flex align-items-center mb-2">
                  <p id="judulKRS" class="mb-0 col-2 p-0">Kartu Rencana Studi</p>
                  <div class="col-1 pl-2 pr-0">
                    <v-icon size="default" color="grey-darken-1">
                      mdi-information-outline
                    </v-icon>
                    <v-tooltip activator="parent" location="bottom" content-class="bg-grey-darken-1">KRS di bawah
                      merupakan
                      KRS Mahasiswa di semester berjalan saat ini.
                    </v-tooltip>
                  </div>
                </div>

                <div id="krsMahasiswa">
                  <p class="mb-3"><b>
                      <span class="mr-5">NIM : {{ this.$route.params.id }}</span> Nama : {{
                        this.namaMahasiswa }}
                    </b>
                  </p>

                  <table class="table">
                    <thead>
                      <tr>
                        <th>
                          No
                        </th>
                        <th>
                          Kode
                        </th>
                        <th>
                          Matakuliah
                        </th>
                        <th>
                          Grup
                        </th>
                        <th>
                          SKS
                        </th>
                        <th>
                          Harga
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(matakuliah, index) in this.krsMahasiswa" :key="index">
                        <td>
                          {{ index + 1 }}
                        </td>
                        <td>
                          {{ matakuliah.kode_matakuliah }}
                        </td>
                        <td>
                          {{ matakuliah.nama_matakuliah }}
                        </td>
                        <td>
                          {{ matakuliah.grup }}
                        </td>
                        <td>
                          {{ matakuliah.sks }}
                        </td>
                        <td>
                          {{ matakuliah.harga }}
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><b>Total SKS </b></td>
                        <td>{{ this.totalSKS_KRS }}</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
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
  name: "DetailMahasiswa",
  components: {
    BreadcrumbModule, Header
  },
  data() {
    return {
      //TODO: Hapus atas 
      matkul: [
        ["Riset Teknologi Informasi", "7/14"],
        ["Pemodelan Proses Bisnis", "5/14"],
        ["Pemrograman Web Lanjut", "8/14"],
        ["Riset Teknologi Informasi", "7/14"],
        ["Pemodelan Proses Bisnis", "5/14"],
        ["Pemrograman Web Lanjut", "8/14"],
      ],
      suratPeringatan: [
        ["Semester 14", "Masuk daftar Drop Out (DO)"],
        ["Semester 12", "Surat Peringatan ke-3"],
        ["Semester 10", "Surat Peringatan ke-2"],
        ["Semester 8", "Surat Peringatan ke-1"],
      ],
      //TODO: Hapus bawah 
      listCatatanMahasiswaTerbaru: [],
      kodeDosen: '',
      listIPSMahasiswa: [],
      ipkMahasiswa: 0,
      totalSKSMahasiswa: 0,
      namaMahasiswa: '',
      sacMahasiswa: 0,
      statusMahasiswa: '',
      cekalMahasiswa: [],
      listMataKuliahMahasiswa: [],
      krsMahasiswa: '',
      drawer: false,
      totalSKS_KRS: 0,
      profil: [
        //profil, jumlah matakuliah wajib, jumlah matakuliah opsional
        ["Programming and Software Development", 5, 5],
        ["Artificial Intelligence", 4, 9],
        ["Database Management System", 5, 5],
        ["Network and Infrastructure", 4, 4],
      ],
      ///////////////////////// MATA KULIAH WAJIB PROFIL ////////////////////////////////
      mataKuliahUIUX: [
        "Pola Desain Antar Pengguna",
        "Desain Eksperimental",
        "Desain Dan Evaluasi Antarmuka",
        "Pemodelan Proses Bisnis",
        "Test Engineering",
      ],
      mataKuliahDA: [
        "Administrasi Basis Data",
        "Data Warehouse",
        "Basis Data Terdistribusi",
        "Keamanan Basis Data",
        "Administrasi Basis Data Non Relasional"
      ],
      mataKuliahNSS: [
        "Enterprise Network",
        "Cloud Infrastructure",
        "Pengantar Keamanan Jaringan",
        "Jaringan Nir Kabel"
      ],
      mataKuliahISD: [
        "Internet of Things",
        "Machine Learning",
        "Jaringan Syaraf Tiruan",
        "Knowledge-Based System",
      ],
      /////////////////////////// MATA KULIAH OPSIONAL PROFIL  //////////////////////////////////////
      //opsional UIUX & DA 
      matakuliahOpsional_UIUX_DA: [
        "Pemrograman Perangkat Bergerak Android",
        "Pemrograman Perangkat Bergerak iOS",
        "Pemrograman Perangkat Bergerak Hybrid",
        "Pemrograman Desktop",
        "Pemrograman Web Lanjut"
      ],
      //opsional NSS 
      matakuliahOpsional_NSS: [
        "Otomasi Jaringan",
        "Teknologi WAN",
        "Keamanan Jaringan",
        "Internet of Things",
      ],
      //opsional ISD 
      matakuliahOpsional_ISD: [
        "Pemrosesan Bahasa Natural",
        "Pemrosesan Citra Digital",
        "Pemrosesan Sinyal Digital",
        "Game Engine",
        "Pemrograman Perangkat Bergerak Android",
        "Pemrograman Perangkat Bergerak iOS",
        "Pemrograman Perangkat Bergerak Hybrid",
        "Pemrograman Desktop",
        "Pemrograman Web Lanjut"
      ],
      //untuk wadah matakuliah profil yang diambil mahasiswa
      wadahUIUX: [],
      wadahISD: [],
      wadahDA: [],
      wadahNSS: [],
      //untuk wadah matakuliah opsional profil  yang diambil mahasiswa
      wadahUIUX_opsional: [],
      wadahISD_opsional: [],
      wadahDA_opsional: [],
      wadahNSS_opsional: [],
      //urut profil UIUX, ISD, DA, NSS
      listTotalMataKuliahProfilDiambil: [0, 0, 0, 0],
      listTotalMataKuliahOpsionalProfilDiambil: [0, 0, 0, 0],
      mapMatakuliahWajibMahasiswa: {
        "UIUX": [],
        "ISD": [],
        "DA": [],
        "NSS": []
      }, // wadah untuk matkul wajib profil yang sudah diambil mahasiswa 
      mapMatakuliahOpsionalMahasiswa: {
        "UIUX": [],
        "ISD": [],
        "DA": [],
        "NSS": []
      }, // wadah untuk matkul opsional profil yang sudah diambil mahasiswa 
      namaDosen: localStorage.getItem("namaDosen")
    }
  },
  created() {
    this.scrollTop()
    this.initData()
  },
  methods: {
    async initData() {
      this.kodeDosen = localStorage.getItem("kodeDosen")

      this.getListMataKuliah()
      this.getCatatanMahasiswaTerbaru()
      this.getIPSMahasiswa()
      this.getIPKMahasiswa()
      this.getSACMahasiswa()
      this.getSACMahasiswa()
      this.getStatusMahasiswa()
      this.getCekalMahasiswa()
      this.getKRSMahasiswa()
    },
    async getKRSMahasiswa() {
      try {
        const response = await axios.get(process.env.VUE_APP_API_DATAWAREHOUSE + `/getKRSMahasiswa/`, {
          params: {
            nim: this.$route.params.id,
          },
        });

        if (response.data.error === false) {
          this.krsMahasiswa = response.data.list_matakuliah;
        } else {
          this.krsMahasiswa = [];
        }
      } catch (error) {
        console.error("Terjadi kesalahan saat mengambil data:", error);
        this.krsMahasiswa = [];
      }

      // hitung total sks krs mahasiswa
      for (let i = 0; i < this.krsMahasiswa.length; i++) {
        this.totalSKS_KRS += this.krsMahasiswa[i].sks
      }
    },
    async getCekalMahasiswa() {
      //get cekal mahasiswa 
      await axios.get(process.env.VUE_APP_API_DATAWAREHOUSE + `/cekalMahasiswa/`, {
        params: {
          nim: this.$route.params.id
        },
      }).catch((error) => console.log(error.toJSON()))
        .then((response) => {
          if (response !== undefined) {
            if (response.data.error === false) {
              this.cekalMahasiswa = response.data.response.cekal
            }
          }
        });
    },
    async getStatusMahasiswa() {
      //get status mahasiswa 
      await axios.get(process.env.VUE_APP_API_DATAWAREHOUSE + `/statusMahasiswa/`, {
        params: {
          nim: this.$route.params.id
        },
      }).catch((error) => console.log(error.toJSON()))
        .then((response) => {
          if (response !== undefined) {
            if (response.data.error === false) {
              this.statusMahasiswa = response.data.response.status[0];
            }
          }
        });

    },
    async getSACMahasiswa() {
      //get sac mahasiswa
      await axios.get(process.env.VUE_APP_API_DATAWAREHOUSE + `/sacMahasiswa/`, {
        params: {
          nim: this.$route.params.id
        },
      }).catch((error) => console.log(error.toJSON()))
        .then((response) => {
          if (response !== undefined) {
            if (response.data.error === false) {
              this.sacMahasiswa = response.data.response.data_sac[0];
            }
          }
        });
    },
    async getIPKMahasiswa() {
      //get ipk mahasiswa
      await axios.get(process.env.VUE_APP_API_DATAWAREHOUSE + `/ipkSKSMahasiswa/`, {
        params: {
          nim: this.$route.params.id
        },
      }).catch((error) => console.log(error.toJSON()))
        .then((response) => {
          if (response !== undefined) {
            if (response.data.error === false) {
              this.ipkMahasiswa = response.data.response.list_ips[0].ipk;
              this.totalSKSMahasiswa = response.data.response.list_ips[0].total_sks;
              //ambil nama mahasiswa dari api ipkSKSMahasiswa
              this.namaMahasiswa = response.data.response.list_ips[0].nama_mahasiswa;
            }
          }
        });
    },
    async getIPSMahasiswa() {
      //get ips mahasiswa 
      try {
        const response = await axios.get(process.env.VUE_APP_API_DATAWAREHOUSE + `/ipsMahasiswa/`, {
          params: {
            nim: this.$route.params.id
          },
        });

        if (response.data.error === false) {
          this.listIPSMahasiswa = response.data.response.list_ips
        }
      } catch (error) {
        console.error("Terjadi kesalahan saat mengambil data:", error);
      }
    },
    async getCatatanMahasiswaTerbaru() {
      //get catatan mahasiswa terbaru 
      await axios.get(process.env.VUE_APP_API_OPERASIONAL + `/catatanMahasiswaTerbaru/`, {
        params: {
          kode_dosen: this.kodeDosen,
          nim: this.$route.params.id
        },
      }).catch((error) => console.log(error.toJSON()))
        .then((response) => {
          if (response != undefined) {
            if (response.data.error === false) {
              this.listCatatanMahasiswaTerbaru = response.data.response.list_catatan_mahasiswa;
            }
          }
        }
        )
    },
    async getListMataKuliah() {
      //get list mata kuliah mahasiswa 
      await axios.get(process.env.VUE_APP_API_DATAWAREHOUSE + `/matakuliahMahasiswa/`, {
        params: {
          nim: this.$route.params.id
        },
      }).catch((error) => console.log(error.toJSON()))
        .then((response) => {
          if (response !== undefined) {
            if (response.data.error === false) {
              // listMataKuliahMahasiswa digunakan untuk menentukan profil mahasiswa 
              // sesuai dengan matakuliah yang sudah diambil
              this.listMataKuliahMahasiswa = response.data.response.data_matakuliah
            }
          }
        });
    },
    filterProfilMataKuliah() {
      for (let i = 0; i < this.listMataKuliahMahasiswa.length; i++) {
        const matkul = this.listMataKuliahMahasiswa[i]

        // mata kuliah wajib profil 
        // cek UI UX
        if (this.mataKuliahUIUX.includes(matkul)) {
          this.listTotalMataKuliahProfilDiambil[0] += 1
          this.wadahUIUX.push(matkul)
        }
        //cek ISD
        else if (this.mataKuliahISD.includes(matkul)) {
          this.listTotalMataKuliahProfilDiambil[1] += 1
          this.wadahISD.push(matkul)
        }
        //cek DA
        else if (this.mataKuliahDA.includes(matkul)) {
          this.listTotalMataKuliahProfilDiambil[2] += 1
          this.wadahDA.push(matkul)
        }
        //cek NSS
        else if (this.mataKuliahNSS.includes(matkul)) {
          this.listTotalMataKuliahProfilDiambil[3] += 1
          this.wadahNSS.push(matkul)
        }

        // mata kuliah opsional profil , ururtan profil = UIUX, ISD, DA, NSS
        const listMatkulOpsionalYangSama = [
          "Pemrograman Perangkat Bergerak Android",
          "Pemrograman Perangkat Bergerak iOS",
          "Pemrograman Perangkat Bergerak Hybrid",
        ]
        // UI UX dan DA
        if (this.matakuliahOpsional_UIUX_DA.includes(matkul)) {
          if (listMatkulOpsionalYangSama.includes(matkul)) {
            // karena mata kuliah opsionalnya 
            this.listTotalMataKuliahOpsionalProfilDiambil[0] += 1 // UIUX
            this.listTotalMataKuliahOpsionalProfilDiambil[2] += 1 // DA

            // karena matakuliah UI UX & DA ada yang sama dengan ISD
            this.listTotalMataKuliahOpsionalProfilDiambil[1] += 1 // ISD 
          } else {
            // karena mata kuliah opsionalnya 
            this.listTotalMataKuliahOpsionalProfilDiambil[0] += 1 // UIUX
            this.listTotalMataKuliahOpsionalProfilDiambil[2] += 1 // DA
          }
          // cek ISD
        } else if (this.matakuliahOpsional_ISD.includes(matkul)) {
          this.listTotalMataKuliahOpsionalProfilDiambil[1] += 1
          //cek NSS
        } else if (this.matakuliahOpsional_NSS.includes(matkul)) {
          this.listTotalMataKuliahOpsionalProfilDiambil[3] += 1
        }
      }
    },
    convertToWIB(waktu) {
      const [jam, menit] = waktu.split(':');
      return `${jam}:${menit} WIB`;
    },
    convertTimestamp(timestamp) {
      const date = new Date(timestamp);
      const options = { day: 'numeric', month: 'long', year: 'numeric' };
      const formattedDate = date.toLocaleDateString('id-ID', options);
      return formattedDate;
    },
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth" // Animasi smooth scrolling
      });
    },
    limitAgenda(fullString) {
      if (fullString.length > 140) {
        let slicedString = fullString.slice(0, 140);
        return slicedString;
      } else {
        return fullString
      }
    },
    logoutDosen() {
      localStorage.clear();
      this.$router.push("/login")
    },
    scrollTo(tujuan) {
      let element = ""
      let y = ""
      switch (tujuan) {
        case 'catatan-perwalian-mahasiswa':
          element = document.getElementById("judulListCatatan");
          y = element.getBoundingClientRect().top + window.pageYOffset + -100;
          window.scrollTo({ top: y, behavior: 'smooth' });

          break;
        case 'indeks-prestasi':
          element = document.getElementById("indeksPrestasi");
          y = element.getBoundingClientRect().top + window.pageYOffset + -100;
          window.scrollTo({ top: y, behavior: 'smooth' });

          break;
        case 'presensi':
          element = document.getElementById("judulPresensi");
          y = element.getBoundingClientRect().top + window.pageYOffset + -100;
          window.scrollTo({ top: y, behavior: 'smooth' });

          break;
        case 'poin-keaktifan':
          element = document.getElementById("poinKeaktifan");
          y = element.getBoundingClientRect().top + window.pageYOffset + -100;
          window.scrollTo({ top: y, behavior: 'smooth' });

          break;
        case 'profil-profesional-mandiri':
          element = document.getElementById("judulProfilMahasiswa");
          y = element.getBoundingClientRect().top + window.pageYOffset + -100;
          window.scrollTo({ top: y, behavior: 'smooth' });

          break;
        case 'pembayaran':
          element = document.getElementById("judulPembayaran");
          y = element.getBoundingClientRect().top + window.pageYOffset + -100;
          window.scrollTo({ top: y, behavior: 'smooth' });

          break;
        case 'yudisium':
          element = document.getElementById("judulPembayaran");
          y = element.getBoundingClientRect().top + window.pageYOffset + -100;
          window.scrollTo({ top: y, behavior: 'smooth' });

          break;
        case 'surat-peringatan':
          element = document.getElementById("judulSuratPeringatan");
          y = element.getBoundingClientRect().top + window.pageYOffset + -100;
          window.scrollTo({ top: y, behavior: 'smooth' });

          break;
        case 'riwayat-cekal':
          element = document.getElementById("judulSuratPeringatan");
          y = element.getBoundingClientRect().top + window.pageYOffset + -150;
          window.scrollTo({ top: y, behavior: 'smooth' });

          break;
        case 'krs':
          element = document.getElementById("judulKRS");
          y = element.getBoundingClientRect().top + window.pageYOffset + -100;
          window.scrollTo({ top: y, behavior: 'smooth' });

          break;
      }
    },
    getStatus(status) {
      switch (status) {
        case "UD":
          return "Undur Diri"
        case "AK":
          return "Aktif"
        case "DO":
          return "Dropped Out"
        case "CS":
          return "Cuti Studi"
        case "TA":
          return "Tidak Aktif"
        case "AN":
          return "Undur Diri"
        case "LS":
          return "Lulus"
      }
    }
  },
  mounted() {
    const script1 = document.createElement("script");
    script1.src = "https://code.jquery.com/jquery-3.5.1.slim.min.js";
    script1.integrity = "sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj";
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

    import('bootstrap');
    import('bootstrap/dist/css/bootstrap.min.css');

    window.addEventListener('scroll', function () {
      var scrollTop = window.scrollY;
      var screenWidth = window.innerWidth;
      var myStickyElement = document.querySelector('.mySticky');
      if (myStickyElement) {
        if (scrollTop > 100 && screenWidth >= 1000) {
          myStickyElement.classList.add('paddingTop');
          myStickyElement.classList.add('heightScroll');
        } else {
          myStickyElement.classList.remove('paddingTop');
          myStickyElement.classList.remove('heightScroll');
        }
      }
    });
  },
  watch: {
    listMataKuliahMahasiswa() {
      //filter profil mata kuliah
      this.filterProfilMataKuliah()
    }
  }
}
</script>

<style scoped src="../../public/frontend/styling/detailMahasiswa.css"></style>