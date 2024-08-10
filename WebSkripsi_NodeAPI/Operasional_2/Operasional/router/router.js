const router = require("express").Router();
const {
    loginDosen,
    getCatatanPerwalianDosenTerbaru,
    insertCatatanPerwalianDosen,
    updateIsArsipCatatanPerwalianDosen,
    updateIsDeleteCatatanPerwalianDosen,
    updateCatatanPerwalianDosen,
    getCatatanPerwalianDosenFiltered,
    getCatatanPerwalianDosenArsipFiltered,
    searchCatatanPerwalianDosen,
    getCatatanDosenFiltered,
    insertCatatanDosen,
    updateCatatanDosen,
    updateIsArsipCatatanDosen,
    updateIsDeleteCatatanDosen,
    searchCatatanDosen,
    gettAllCatatanGrupAngkatanDetail,
    getCatatanAngkatanArsipFiltered,
    getCatatanPerwalianDosenById,
    getCatatanDosenById,
    getCatatanDosenTerbaru,
    getCatatanMahasiswaTerbaru,
    getCatatanMahasiswaHistory,
    getCatatanMahasiswaFiltered,
    getCatatanMahasiswaArsipFiltered,
    getTahunArsipCatatanPerwalianDosen,
    getTahunArsipCatatanDosen,
    getCatatanDosenArsipFiltered,
    getTahunArsipCatatanAngkatan,
    getCatatanGrupAngkatanTerbaru,
    getOpsiUrutanBeranda,
    setOpsiUrutanBeranda,
    updateTambahPesertaCatatanPerwalian,
    getOpsiUrutanDetailAngkatan,
    setOpsiUrutanDetailAngkatan,

    //// api baru 
    loginDosen2

} = require("../controller/perwalian");

router.get("/loginDosen", loginDosen); //list tahun angkatan mahasiswa perwalian
router.get("/catatanPerwalianDosenTerbaru", getCatatanPerwalianDosenTerbaru); // get catatan perwalian dosen
router.post("/tambahCatatanPerwalianDosen", insertCatatanPerwalianDosen); // tambah catatan perwalian dosen
router.put("/updateIsArsipCatatanPerwalianDosen", updateIsArsipCatatanPerwalianDosen); // update is arsip catatan perwalian dosen
router.put("/deleteCatatanPerwalianDosen", updateIsDeleteCatatanPerwalianDosen); // update is deleted catatan perwalian dosen
router.put("/updateCatatanPerwalianDosen", updateCatatanPerwalianDosen); //update catatan perwalian dosen
router.get("/filteredCatatanPerwalianDosen", getCatatanPerwalianDosenFiltered); // get list catatan perwalian dosen filtered dari halaman detail catatan perwalian dosen
router.get("/filteredCatatanPerwalianDosenArsip", getCatatanPerwalianDosenArsipFiltered); // get list catatan perwalian dosen filtered
router.get("/searchCatatanPerwalianDosen", searchCatatanPerwalianDosen); // get list nim nama mahasiswa
router.get("/filteredCatatanDosen", getCatatanDosenFiltered); // get list nim nama mahasiswa
router.post("/tambahCatatanDosen", insertCatatanDosen); // get list nim nama mahasiswa
router.put("/updateIsArsipCatatanDosen", updateIsArsipCatatanDosen); // update is arsip catatan dosen
router.put("/deleteCatatanDosen", updateIsDeleteCatatanDosen); // update is delete catatan dosen
router.put("/updateCatatanDosen", updateCatatanDosen); // update catatan dosen
router.get("/searchCatatanDosen", searchCatatanDosen); // get catatan dosen
router.get("/filteredCatatanAngkatan", gettAllCatatanGrupAngkatanDetail); // get semua catatan dari halaman detail angkatan
router.get("/filteredCatatanAngkatanArsip", getCatatanAngkatanArsipFiltered); // get semua catatan angkatan dari halaman arsip catatan angkatan
router.get("/getCatatanPerwalianDosen", getCatatanPerwalianDosenById); // get catatan perwalian dosen by id
router.get("/getCatatanDosen", getCatatanDosenById); // get catatan dosen
router.get("/catatanDosenTerbaru", getCatatanDosenTerbaru); // get catatan dosen terbaru
router.get("/catatanMahasiswaTerbaru", getCatatanMahasiswaTerbaru); // get catatan maahsiswa terbaru
router.get("/filteredCatatanMahasiswa", getCatatanMahasiswaFiltered); // get list catatan mahasiswa by nim
router.get("/filteredCatatanMahasiswaArsip", getCatatanMahasiswaArsipFiltered); // get list catatan mahasiswa arsip filtered
router.get("/catatanMahasiswaHistory", getCatatanMahasiswaHistory); // get list catatan mahasiswa untuk mode histori
router.get("/getTahunCatatanArsipPerwalianDosen", getTahunArsipCatatanPerwalianDosen); // get tahun catatan arsip perwalian dosen
router.get("/getTahunCatatanArsipDosen", getTahunArsipCatatanDosen); // get tahun catatan arsip perwalian dosen
router.get("/getCatatanDosenArsipFiltered", getCatatanDosenArsipFiltered); // get tahun catatan arsip perwalian dosen
router.get("/getTahunCatatanArsipAngkatan", getTahunArsipCatatanAngkatan); // get tahun catatan arsip perwalian dosen
router.get("/getTahunCatatanAngkatanTerbaru", getCatatanGrupAngkatanTerbaru); // get tahun catatan arsip perwalian dosen
router.get("/getOpsiBeranda", getOpsiUrutanBeranda); // get opsi item beranda
router.put("/setOpsiBeranda", setOpsiUrutanBeranda); // set opsi item beranda
router.put("/updateTambahPesertaCatatan", updateTambahPesertaCatatanPerwalian); // set opsi item beranda
router.get("/getOpsiDetailAngkatan", getOpsiUrutanDetailAngkatan); // get opsi item beranda
router.put("/setOpsiDetailAngkatan", setOpsiUrutanDetailAngkatan); // set opsi item beranda

/// API Baru 
router.get("/loginDosen2", loginDosen2); //list tahun angkatan mahasiswa perwalian

module.exports = router;

