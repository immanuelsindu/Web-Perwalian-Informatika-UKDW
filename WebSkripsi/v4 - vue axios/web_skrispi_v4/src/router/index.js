import { createWebHistory, createRouter } from "vue-router";

import LoginPage from "@/components/LoginPage.vue";
import BerandaPageVue from "@/components/BerandaPage.vue";
import DetailMahasiswa from "@/components/DetailMahasiswa.vue";
import DetailAngkatan from "@/components/DetailAngkatan.vue";
import DetailYudisium from "@/components/DetailYudisium.vue";
import ProfilMahasiswa from "@/components/ProfilMahasiswa.vue";
import ArsipDosen from "@/components/ArsipDosen.vue";
import TambahCatatanPerwalian from "@/components/TambahCatatanPerwalian.vue";
import TambahCatatanAngkatan from "@/components/TambahCatatanAngkatan.vue";
import TambahCatatanDosen from "@/components/TambahCatatanDosen.vue";
import TambahCatatanMahasiswa from "@/components/TambahCatatanMahasiswa.vue";
import ArsipPerwalianDosen from "@/components/ArsipPerwalianDosen.vue";
import ArsipPerwalianMahasiswa from "@/components/ArsipPerwalianMahasiswa.vue";
import ArsipPerwalianGrupAngkatan from "@/components/ArsipPerwalianGrupAngkatan.vue";
import EditCatatanGrupAngkatan from "@/components/EditCatatanGrupAngkatan.vue";
import EditCatatanKhusus from "@/components/EditCatatanKhusus.vue";
import EditCatatanMahasiswa from "@/components/EditCatatanMahasiswa.vue";
import EditCatatanOrangTuaWali from "@/components/EditCatatanOrangTuaWali.vue";
import EditCatatanOrangTuaWaliDanMahasiswa from "@/components/EditCatatanOrangTuaWaliDanMahasiswa.vue";
import EditCatatanRefleksiDosen from "@/components/EditCatatanRefleksiDosen.vue";
import DaftarCatatanDosen from "@/components/DaftarCatatanDosen.vue";
import DaftarCatatanPerwalianDosen from "@/components/DaftarCatatanPerwalianDosen.vue";
import DaftarCatatanPerwalianAngkatan from "@/components/DaftarCatatanPerwalianAngkatan.vue";
import DaftarCatatanPerwalianMahasiswa from "@/components/DaftarCatatanPerwalianMahasiswa.vue";
// import store from "@/store/index"

import Cookies from "js-cookie";
import PageNotFoundVue from "@/components/PageNotFound.vue";

// =============== Awal Routes =================

//memberikan data dummy agar ketika pertama setelah login
var tempBreadCrumbs = [
    {
        text: "dummy",
        to: {
            name: "dummy",
        },
    },
];

const routes = [
    {
        path: "/login",
        name: "LoginPage",
        component: LoginPage,
    },
    {
        path: "/",
        name: "Beranda",
        component: BerandaPageVue,
        meta: {
            breadCrumb(route) {
                if (tempBreadCrumbs.length != 0) {
                    const breadCrumbText = formatString(route.name);
                    // mengecek breadcrumb yang sudah ada dari store
                    const storeBreadcrumb =
                        this.$store.getters.getStoreBreadCrumbs;
                    
                    let isContains = storeBreadcrumb.some((crumb) =>
                        crumb.text.includes(breadCrumbText)
                    );

                    //jika belum ada tambahkan ke breadCrumbs
                    if (!isContains) {
                        this.$store.commit("pushStoreBreadCrumbs", {
                            text: breadCrumbText,
                            to: {
                                name: route.name,
                            },
                        });
                    } else {
                        this.$store.commit("sliceStoreBreadCrumbs", 0); //commit method sliceStoreBreadCrumbs dengan parameter 0
                    }

                    tempBreadCrumbs = tempBreadCrumbs.slice(0, 1); //kodingan formalitas
                    tempBreadCrumbs = this.$store.getters.getStoreBreadCrumbs;

                } else {
                    window.alert(
                        "KOSONG LENGTH ".concat(tempBreadCrumbs.length)
                    );
                }
            },
        },
    },
    {
        path: "/detail-mahasiswa/:id",
        name: "DetailMahasiswa",
        component: DetailMahasiswa,
        meta: {
            breadCrumb(route) {
                if (
                    tempBreadCrumbs.length == 1 &&
                    tempBreadCrumbs[0].text == "dummy"
                ) {
                    // ambil dari store isinya [ ]
                    const breadCrumbSimpanan =
                        this.$store.getters.getStoreBreadCrumbs;
                   
                    // tempBreadCrumbs di assign nilai si breadCrumbSimpanan yang nilai nya kosong
                    // tempBreadCrumbs sekarang [ ]
                    tempBreadCrumbs = breadCrumbSimpanan;

                    //ambil data dari cookies
                    var savedData = Cookies.get("listKey");
                    savedData = JSON.parse(savedData);
                    
                    // list breadcrumb di store di isi data list breadcrumb dari cookies
                    this.$store.commit("updateStoreBreadCrumbs", savedData);
                } else {
                    const breadCrumbText = formatString(route.name);
                    const storeBreadcrumb =
                        this.$store.getters.getStoreBreadCrumbs;
                    let isContains = storeBreadcrumb.some((crumb) =>
                        crumb.text.includes(breadCrumbText)
                    );

                    //jika belum ada tambahkan ke breadCrumbs
                    if (!isContains) {
                        this.$store.commit("pushStoreBreadCrumbs", {
                            text: breadCrumbText,
                            to: {
                                name: route.name,
                                params: {
                                    id: route.params.id,
                                },
                            },
                        });
                    } else {
                        let index = storeBreadcrumb.findIndex(
                            (obj) => obj.text === breadCrumbText
                        );
                        this.$store.commit("sliceStoreBreadCrumbs", index);

                        tempBreadCrumbs = tempBreadCrumbs.slice(0, 1); //kodingan formalitas
                        tempBreadCrumbs =
                            this.$store.getters.getStoreBreadCrumbs;
                    }
                }
            },
        },
    },
    {
        path: "/detail-angkatan/:id/:isHover",
        name: "DetailAngkatan",
        component: DetailAngkatan,
        meta: {
            breadCrumb(route) {
                if (
                    tempBreadCrumbs.length == 1 &&
                    tempBreadCrumbs[0].text == "dummy"
                ) {
                    const breadCrumbSimpanan =
                        this.$store.getters.getStoreBreadCrumbs;
                   
                    tempBreadCrumbs = breadCrumbSimpanan;

                    var savedData = Cookies.get("listKey");
                    savedData = JSON.parse(savedData);
                    
                    this.$store.commit("updateStoreBreadCrumbs", savedData);
                } else {
                    const breadCrumbText = formatString(route.name);
                    const storeBreadcrumb =
                        this.$store.getters.getStoreBreadCrumbs;
                    let isContains = storeBreadcrumb.some((crumb) =>
                        crumb.text.includes(breadCrumbText)
                    );

                    //jika belum ada tambahkan ke breadCrumbs
                    if (!isContains) {
                        this.$store.commit("pushStoreBreadCrumbs", {
                            text: breadCrumbText,
                            to: {
                                name: route.name,
                                params: {
                                    id: route.params.id,
                                    isHover: route.params.isHover,
                                },
                            },
                        });
                    } else {
                        let index = storeBreadcrumb.findIndex(
                            (obj) => obj.text === breadCrumbText
                        );
                        this.$store.commit("sliceStoreBreadCrumbs", index);

                        tempBreadCrumbs = tempBreadCrumbs.slice(0, 1); //kodingan formalitas
                        tempBreadCrumbs =
                            this.$store.getters.getStoreBreadCrumbs;
                    }
                }
            },
        },
    },
    {
        path: "/detail-yudisium/:id",
        name: "DetailYudisium",
        component: DetailYudisium,
        meta: {
            breadCrumb(route) {
                if (
                    tempBreadCrumbs.length == 1 &&
                    tempBreadCrumbs[0].text == "dummy"
                ) {
                    const breadCrumbSimpanan =
                        this.$store.getters.getStoreBreadCrumbs;
                   
                    tempBreadCrumbs = breadCrumbSimpanan;

                    var savedData = Cookies.get("listKey");
                    savedData = JSON.parse(savedData);
                    
                    this.$store.commit("updateStoreBreadCrumbs", savedData);
                } else {
                    const breadCrumbText = formatString(route.name);
                    const storeBreadcrumb =
                        this.$store.getters.getStoreBreadCrumbs;
                    let isContains = storeBreadcrumb.some((crumb) =>
                        crumb.text.includes(breadCrumbText)
                    );

                    //jika belum ada tambahkan ke breadCrumbs
                    if (!isContains) {
                        this.$store.commit("pushStoreBreadCrumbs", {
                            text: breadCrumbText,
                            to: {
                                name: route.name,
                                params: {
                                    id: route.params.id,
                                },
                            },
                        });
                    } else {
                        let index = storeBreadcrumb.findIndex(
                            (obj) => obj.text === breadCrumbText
                        );
                        this.$store.commit("sliceStoreBreadCrumbs", index);

                        tempBreadCrumbs = tempBreadCrumbs.slice(0, 1); //kodingan formalitas
                        tempBreadCrumbs =
                            this.$store.getters.getStoreBreadCrumbs;
                    }
                }
            },
        },
    },
    {
        path: "/profil-mahasiswa/:id",
        name: "ProfilMahasiswa",
        component: ProfilMahasiswa,
        meta: {
            breadCrumb(route) {
                if (
                    tempBreadCrumbs.length == 1 &&
                    tempBreadCrumbs[0].text == "dummy"
                ) {
                    const breadCrumbSimpanan =
                        this.$store.getters.getStoreBreadCrumbs;
                   
                    tempBreadCrumbs = breadCrumbSimpanan;

                    var savedData = Cookies.get("listKey");
                    savedData = JSON.parse(savedData);
                    
                    this.$store.commit("updateStoreBreadCrumbs", savedData);
                } else {
                    const breadCrumbText = formatString(route.name);
                    const storeBreadcrumb =
                        this.$store.getters.getStoreBreadCrumbs;
                    let isContains = storeBreadcrumb.some((crumb) =>
                        crumb.text.includes(breadCrumbText)
                    );

                    //jika belum ada tambahkan ke breadCrumbs
                    if (!isContains) {
                        this.$store.commit("pushStoreBreadCrumbs", {
                            text: breadCrumbText,
                            to: {
                                name: route.name,
                                params: {
                                    id: route.params.id,
                                },
                            },
                        });
                    } else {
                        let index = storeBreadcrumb.findIndex(
                            (obj) => obj.text === breadCrumbText
                        );
                        this.$store.commit("sliceStoreBreadCrumbs", index);

                        tempBreadCrumbs = tempBreadCrumbs.slice(0, 1); //kodingan formalitas
                        tempBreadCrumbs =
                            this.$store.getters.getStoreBreadCrumbs;
                    }
                }
            },
        },
    },
    {
        path: "/arsip-dosen",
        name: "ArsipDosen",
        component: ArsipDosen,
        meta: {
            breadCrumb(route) {
                if (
                    tempBreadCrumbs.length == 1 &&
                    tempBreadCrumbs[0].text == "dummy"
                ) {
                    const breadCrumbSimpanan =
                        this.$store.getters.getStoreBreadCrumbs;
                   
                    tempBreadCrumbs = breadCrumbSimpanan;

                    var savedData = Cookies.get("listKey");
                    savedData = JSON.parse(savedData);
                    
                    this.$store.commit("updateStoreBreadCrumbs", savedData);
                } else {
                    const breadCrumbText = formatString(route.name);
                    const storeBreadcrumb =
                        this.$store.getters.getStoreBreadCrumbs;
                    let isContains = storeBreadcrumb.some((crumb) =>
                        crumb.text.includes(breadCrumbText)
                    );

                    //jika belum ada tambahkan ke breadCrumbs
                    if (!isContains) {
                        this.$store.commit("pushStoreBreadCrumbs", {
                            text: breadCrumbText,
                            to: {
                                name: route.name,
                            },
                        });
                    } else {
                        let index = storeBreadcrumb.findIndex(
                            (obj) => obj.text === breadCrumbText
                        );
                        this.$store.commit("sliceStoreBreadCrumbs", index);

                        tempBreadCrumbs = tempBreadCrumbs.slice(0, 1); //kodingan formalitas
                        tempBreadCrumbs =
                            this.$store.getters.getStoreBreadCrumbs;
                    }
                }
            },
        },
    },
    {
        path: "/tambah-catatan-perwalian/:canBack",
        name: "TambahCatatanPerwalian",
        component: TambahCatatanPerwalian,
        meta: {
            breadCrumb(route) {
                if (
                    tempBreadCrumbs.length == 1 &&
                    tempBreadCrumbs[0].text == "dummy"
                ) {
                    const breadCrumbSimpanan =
                        this.$store.getters.getStoreBreadCrumbs;
                   
                    tempBreadCrumbs = breadCrumbSimpanan;

                    var savedData = Cookies.get("listKey");
                    savedData = JSON.parse(savedData);
                    
                    this.$store.commit("updateStoreBreadCrumbs", savedData);
                } else {
                    const breadCrumbText = formatString(route.name);
                    const storeBreadcrumb =
                        this.$store.getters.getStoreBreadCrumbs;
                    let isContains = storeBreadcrumb.some((crumb) =>
                        crumb.text.includes(breadCrumbText)
                    );

                    //jika belum ada tambahkan ke breadCrumbs
                    if (!isContains) {
                        this.$store.commit("pushStoreBreadCrumbs", {
                            text: breadCrumbText,
                            to: {
                                name: route.name,
                                params: {
                                    canBack: 0,
                                },
                            },
                        });
                    } else {
                        let index = storeBreadcrumb.findIndex(
                            (obj) => obj.text === breadCrumbText
                        );
                        this.$store.commit("sliceStoreBreadCrumbs", index);

                        tempBreadCrumbs = tempBreadCrumbs.slice(0, 1); //kodingan formalitas
                        tempBreadCrumbs =
                            this.$store.getters.getStoreBreadCrumbs;
                    }
                }
            },
        },
    },
    {
        path: "/tambah-catatan-angkatan/:id/:canBack",
        name: "TambahCatatanAngkatan",
        component: TambahCatatanAngkatan,
        meta: {
            breadCrumb(route) {
                if (
                    tempBreadCrumbs.length == 1 &&
                    tempBreadCrumbs[0].text == "dummy"
                ) {
                    const breadCrumbSimpanan =
                        this.$store.getters.getStoreBreadCrumbs;
                   
                    tempBreadCrumbs = breadCrumbSimpanan;

                    var savedData = Cookies.get("listKey");
                    savedData = JSON.parse(savedData);
                    
                    this.$store.commit("updateStoreBreadCrumbs", savedData);
                } else {
                    const breadCrumbText = formatString(route.name);
                    const storeBreadcrumb =
                        this.$store.getters.getStoreBreadCrumbs;
                    let isContains = storeBreadcrumb.some((crumb) =>
                        crumb.text.includes(breadCrumbText)
                    );

                    //jika belum ada tambahkan ke breadCrumbs
                    if (!isContains) {
                        this.$store.commit("pushStoreBreadCrumbs", {
                            text: breadCrumbText,
                            to: {
                                name: route.name,
                                params: {
                                    id: route.params.id,
                                    canBack : 0
                                },
                            },
                        });
                    } else {
                        let index = storeBreadcrumb.findIndex(
                            (obj) => obj.text === breadCrumbText
                        );
                        this.$store.commit("sliceStoreBreadCrumbs", index);

                        tempBreadCrumbs = tempBreadCrumbs.slice(0, 1); //kodingan formalitas
                        tempBreadCrumbs =
                            this.$store.getters.getStoreBreadCrumbs;
                    }
                }
            },
        },
    },
    {
        path: "/tambah-catatan-dosen/:canBack",
        name: "TambahCatatanDosen",
        component: TambahCatatanDosen,
        meta: {
            breadCrumb(route) {
                if (
                    tempBreadCrumbs.length == 1 &&
                    tempBreadCrumbs[0].text == "dummy"
                ) {
                    const breadCrumbSimpanan =
                        this.$store.getters.getStoreBreadCrumbs;
                   
                    tempBreadCrumbs = breadCrumbSimpanan;

                    var savedData = Cookies.get("listKey");
                    savedData = JSON.parse(savedData);
                    
                    this.$store.commit("updateStoreBreadCrumbs", savedData);
                } else {
                    const breadCrumbText = formatString(route.name);
                    const storeBreadcrumb =
                        this.$store.getters.getStoreBreadCrumbs;
                    let isContains = storeBreadcrumb.some((crumb) =>
                        crumb.text.includes(breadCrumbText)
                    );

                    //jika belum ada tambahkan ke breadCrumbs
                    if (!isContains) {
                        this.$store.commit("pushStoreBreadCrumbs", {
                            text: breadCrumbText,
                            to: {
                                name: route.name,
                                canBack : 0
                            },
                        });
                    } else {
                        let index = storeBreadcrumb.findIndex(
                            (obj) => obj.text === breadCrumbText
                        );
                        this.$store.commit("sliceStoreBreadCrumbs", index);

                        tempBreadCrumbs = tempBreadCrumbs.slice(0, 1); //kodingan formalitas
                        tempBreadCrumbs =
                            this.$store.getters.getStoreBreadCrumbs;
                    }
                }
            },
        },
    },
    {
        path: "/tambah-catatan-mahasiswa/:id/:canBack",
        name: "TambahCatatanMahasiswa",
        component: TambahCatatanMahasiswa,
        meta: {
            breadCrumb(route) {
                if (
                    tempBreadCrumbs.length == 1 &&
                    tempBreadCrumbs[0].text == "dummy"
                ) {
                    const breadCrumbSimpanan =
                        this.$store.getters.getStoreBreadCrumbs;
                   
                    tempBreadCrumbs = breadCrumbSimpanan;

                    var savedData = Cookies.get("listKey");
                    savedData = JSON.parse(savedData);
                    
                    this.$store.commit("updateStoreBreadCrumbs", savedData);
                } else {
                    const breadCrumbText = formatString(route.name);
                    const storeBreadcrumb =
                        this.$store.getters.getStoreBreadCrumbs;
                    let isContains = storeBreadcrumb.some((crumb) =>
                        crumb.text.includes(breadCrumbText)
                    );

                    //jika belum ada tambahkan ke breadCrumbs
                    if (!isContains) {
                        this.$store.commit("pushStoreBreadCrumbs", {
                            text: breadCrumbText,
                            to: {
                                name: route.name,
                                params: {
                                    id: route.params.id,
                                    canBack: 0,
                                },
                            },
                        });
                    } else {
                        let index = storeBreadcrumb.findIndex(
                            (obj) => obj.text === breadCrumbText
                        );
                        this.$store.commit("sliceStoreBreadCrumbs", index);

                        tempBreadCrumbs = tempBreadCrumbs.slice(0, 1); //kodingan formalitas
                        tempBreadCrumbs =
                            this.$store.getters.getStoreBreadCrumbs;
                    }
                }
            },
        },
    },
    {
        //arsip-perwalian-dosen
        path: "/arsip-perwalian-dosen",
        name: "ArsipPerwalianDosen",
        component: ArsipPerwalianDosen,
        meta: {
            breadCrumb(route) {
                if (
                    tempBreadCrumbs.length == 1 &&
                    tempBreadCrumbs[0].text == "dummy"
                ) {
                    const breadCrumbSimpanan =
                        this.$store.getters.getStoreBreadCrumbs;
                    tempBreadCrumbs = breadCrumbSimpanan;

                    var savedData = Cookies.get("listKey");
                    savedData = JSON.parse(savedData);
                    
                    this.$store.commit("updateStoreBreadCrumbs", savedData);
                } else {
                    const breadCrumbText = formatString(route.name);
                    const storeBreadcrumb =
                        this.$store.getters.getStoreBreadCrumbs;
                    let isContains = storeBreadcrumb.some((crumb) =>
                        crumb.text.includes(breadCrumbText)
                    );

                    //jika belum ada tambahkan ke breadCrumbs
                    if (!isContains) {
                        this.$store.commit("pushStoreBreadCrumbs", {
                            text: breadCrumbText,
                            to: {
                                name: route.name,
                            },
                        });
                    } else {
                        let index = storeBreadcrumb.findIndex(
                            (obj) => obj.text === breadCrumbText
                        );
                        this.$store.commit("sliceStoreBreadCrumbs", index);

                        tempBreadCrumbs = tempBreadCrumbs.slice(0, 1); //kodingan formalitas
                        tempBreadCrumbs =
                            this.$store.getters.getStoreBreadCrumbs;
                    }
                }
            },
        },
    },
    {
        //arsip-perwalian-dosen
        path: "/arsip-perwalian-mahasiswa/:id",
        name: "ArsipPerwalianMahasiswa",
        component: ArsipPerwalianMahasiswa,
        meta: {
            breadCrumb(route) {
                if (
                    tempBreadCrumbs.length == 1 &&
                    tempBreadCrumbs[0].text == "dummy"
                ) {
                    const breadCrumbSimpanan =
                        this.$store.getters.getStoreBreadCrumbs;
                    tempBreadCrumbs = breadCrumbSimpanan;

                    var savedData = Cookies.get("listKey");
                    savedData = JSON.parse(savedData);
                    
                    this.$store.commit("updateStoreBreadCrumbs", savedData);
                } else {
                    const breadCrumbText = formatString(route.name);
                    const storeBreadcrumb =
                        this.$store.getters.getStoreBreadCrumbs;
                    let isContains = storeBreadcrumb.some((crumb) =>
                        crumb.text.includes(breadCrumbText)
                    );

                    //jika belum ada tambahkan ke breadCrumbs
                    if (!isContains) {
                        this.$store.commit("pushStoreBreadCrumbs", {
                            text: breadCrumbText,
                            to: {
                                name: route.name,
                                params: {
                                    id: route.params.id,
                                },
                            },
                        });
                    } else {
                        let index = storeBreadcrumb.findIndex(
                            (obj) => obj.text === breadCrumbText
                        );
                        this.$store.commit("sliceStoreBreadCrumbs", index);

                        tempBreadCrumbs = tempBreadCrumbs.slice(0, 1); //kodingan formalitas
                        tempBreadCrumbs =
                            this.$store.getters.getStoreBreadCrumbs;
                    }
                }
            },
        },
    },
    {
        path: "/arsip-perwalian-grup-angkatan/:id",
        name: "ArsipPerwalianGrupAngkatan",
        component: ArsipPerwalianGrupAngkatan,
        meta: {
            breadCrumb(route) {
                if (
                    tempBreadCrumbs.length == 1 &&
                    tempBreadCrumbs[0].text == "dummy"
                ) {
                    const breadCrumbSimpanan =
                        this.$store.getters.getStoreBreadCrumbs;
                   
                    tempBreadCrumbs = breadCrumbSimpanan;

                    var savedData = Cookies.get("listKey");
                    savedData = JSON.parse(savedData);
                    
                    this.$store.commit("updateStoreBreadCrumbs", savedData);
                } else {
                    const breadCrumbText = formatString(route.name);
                    const storeBreadcrumb =
                        this.$store.getters.getStoreBreadCrumbs;
                    let isContains = storeBreadcrumb.some((crumb) =>
                        crumb.text.includes(breadCrumbText)
                    );

                    //jika belum ada tambahkan ke breadCrumbs
                    if (!isContains) {
                        this.$store.commit("pushStoreBreadCrumbs", {
                            text: breadCrumbText,
                            to: {
                                name: route.name,
                                params: {
                                    id: route.params.id,
                                },
                            },
                        });
                    } else {
                        let index = storeBreadcrumb.findIndex(
                            (obj) => obj.text === breadCrumbText
                        );
                        this.$store.commit("sliceStoreBreadCrumbs", index);

                        tempBreadCrumbs = tempBreadCrumbs.slice(0, 1); //kodingan formalitas
                        tempBreadCrumbs =
                            this.$store.getters.getStoreBreadCrumbs;
                    }
                }
            },
        },
    },
    {
        path: "/edit-catatan-grup-angkatan/:id",
        name: "EditCatatanGrupAngkatan",
        component: EditCatatanGrupAngkatan,
        meta: {
            breadCrumb(route) {
                if (
                    tempBreadCrumbs.length == 1 &&
                    tempBreadCrumbs[0].text == "dummy"
                ) {
                    const breadCrumbSimpanan =
                        this.$store.getters.getStoreBreadCrumbs;
                   
                    tempBreadCrumbs = breadCrumbSimpanan;

                    var savedData = Cookies.get("listKey");
                    savedData = JSON.parse(savedData);
                    
                    this.$store.commit("updateStoreBreadCrumbs", savedData);
                } else {
                    const breadCrumbText = formatString(route.name);
                    const storeBreadcrumb =
                        this.$store.getters.getStoreBreadCrumbs;
                    let isContains = storeBreadcrumb.some((crumb) =>
                        crumb.text.includes(breadCrumbText)
                    );

                    //jika belum ada tambahkan ke breadCrumbs
                    if (!isContains) {
                        this.$store.commit("pushStoreBreadCrumbs", {
                            text: breadCrumbText,
                            to: {
                                name: route.name,
                                params: {
                                    id: route.params.id,
                                },
                            },
                        });
                    } else {
                        let index = storeBreadcrumb.findIndex(
                            (obj) => obj.text === breadCrumbText
                        );
                        this.$store.commit("sliceStoreBreadCrumbs", index);

                        tempBreadCrumbs = tempBreadCrumbs.slice(0, 1); //kodingan formalitas
                        tempBreadCrumbs =
                            this.$store.getters.getStoreBreadCrumbs;
                    }
                }
            },
        },
    },
    {
        path: "/edit-catatan-khusus/:id",
        name: "EditCatatanKhusus",
        component: EditCatatanKhusus,
        meta: {
            breadCrumb(route) {
                if (
                    tempBreadCrumbs.length == 1 &&
                    tempBreadCrumbs[0].text == "dummy"
                ) {
                    const breadCrumbSimpanan =
                        this.$store.getters.getStoreBreadCrumbs;
                   
                    tempBreadCrumbs = breadCrumbSimpanan;

                    var savedData = Cookies.get("listKey");
                    savedData = JSON.parse(savedData);
                    
                    this.$store.commit("updateStoreBreadCrumbs", savedData);
                } else {
                    const breadCrumbText = formatString(route.name);
                    const storeBreadcrumb =
                        this.$store.getters.getStoreBreadCrumbs;
                    let isContains = storeBreadcrumb.some((crumb) =>
                        crumb.text.includes(breadCrumbText)
                    );

                    //jika belum ada tambahkan ke breadCrumbs
                    if (!isContains) {
                        this.$store.commit("pushStoreBreadCrumbs", {
                            text: breadCrumbText,
                            to: {
                                name: route.name,
                                params: {
                                    id: route.params.id,
                                },
                            },
                        });
                    } else {
                        let index = storeBreadcrumb.findIndex(
                            (obj) => obj.text === breadCrumbText
                        );
                        this.$store.commit("sliceStoreBreadCrumbs", index);

                        tempBreadCrumbs = tempBreadCrumbs.slice(0, 1); //kodingan formalitas
                        tempBreadCrumbs =
                            this.$store.getters.getStoreBreadCrumbs;
                    }
                }
            },
        },
    },
    {
        path: "/edit-catatan-mahasiswa/:id",
        name: "EditCatatanMahasiswa",
        component: EditCatatanMahasiswa,
        meta: {
            breadCrumb(route) {
                if (
                    tempBreadCrumbs.length == 1 &&
                    tempBreadCrumbs[0].text == "dummy"
                ) {
                    const breadCrumbSimpanan =
                        this.$store.getters.getStoreBreadCrumbs;
                   
                    tempBreadCrumbs = breadCrumbSimpanan;

                    var savedData = Cookies.get("listKey");
                    savedData = JSON.parse(savedData);
                    
                    this.$store.commit("updateStoreBreadCrumbs", savedData);
                } else {
                    const breadCrumbText = formatString(route.name);
                    const storeBreadcrumb =
                        this.$store.getters.getStoreBreadCrumbs;
                    let isContains = storeBreadcrumb.some((crumb) =>
                        crumb.text.includes(breadCrumbText)
                    );

                    //jika belum ada tambahkan ke breadCrumbs
                    if (!isContains) {
                        this.$store.commit("pushStoreBreadCrumbs", {
                            text: breadCrumbText,
                            to: {
                                name: route.name,
                                params: {
                                    id: route.params.id,
                                },
                            },
                        });
                    } else {
                        let index = storeBreadcrumb.findIndex(
                            (obj) => obj.text === breadCrumbText
                        );
                        this.$store.commit("sliceStoreBreadCrumbs", index);

                        tempBreadCrumbs = tempBreadCrumbs.slice(0, 1); //kodingan formalitas
                        tempBreadCrumbs =
                            this.$store.getters.getStoreBreadCrumbs;
                    }
                }
            },
        },
    },
    {
        path: "/edit-catatan-orang-tua-wali/:id",
        name: "EditCatatanOrangTuaWali",
        component: EditCatatanOrangTuaWali,
        meta: {
            breadCrumb(route) {
                if (
                    tempBreadCrumbs.length == 1 &&
                    tempBreadCrumbs[0].text == "dummy"
                ) {
                    const breadCrumbSimpanan =
                        this.$store.getters.getStoreBreadCrumbs;
                   
                    tempBreadCrumbs = breadCrumbSimpanan;

                    var savedData = Cookies.get("listKey");
                    savedData = JSON.parse(savedData);
                    
                    this.$store.commit("updateStoreBreadCrumbs", savedData);
                } else {
                    const breadCrumbText = formatString(route.name);
                    const storeBreadcrumb =
                        this.$store.getters.getStoreBreadCrumbs;
                    let isContains = storeBreadcrumb.some((crumb) =>
                        crumb.text.includes(breadCrumbText)
                    );

                    //jika belum ada tambahkan ke breadCrumbs
                    if (!isContains) {
                        this.$store.commit("pushStoreBreadCrumbs", {
                            text: breadCrumbText,
                            to: {
                                name: route.name,
                                params: {
                                    id: route.params.id,
                                },
                            },
                        });
                    } else {
                        let index = storeBreadcrumb.findIndex(
                            (obj) => obj.text === breadCrumbText
                        );
                        this.$store.commit("sliceStoreBreadCrumbs", index);

                        tempBreadCrumbs = tempBreadCrumbs.slice(0, 1); //kodingan formalitas
                        tempBreadCrumbs =
                            this.$store.getters.getStoreBreadCrumbs;
                    }
                }
            },
        },
    },
    {
        path: "/edit-catatan-orang-tua-wali-dan-mahasiswa/:id",
        name: "EditCatatanOrangTuaWaliDanMahasiswa",
        component: EditCatatanOrangTuaWaliDanMahasiswa,
        meta: {
            breadCrumb(route) {
                if (
                    tempBreadCrumbs.length == 1 &&
                    tempBreadCrumbs[0].text == "dummy"
                ) {
                    const breadCrumbSimpanan =
                        this.$store.getters.getStoreBreadCrumbs;
                   
                    tempBreadCrumbs = breadCrumbSimpanan;

                    var savedData = Cookies.get("listKey");
                    savedData = JSON.parse(savedData);
                    
                    this.$store.commit("updateStoreBreadCrumbs", savedData);
                } else {
                    const breadCrumbText = formatString(route.name);
                    const storeBreadcrumb =
                        this.$store.getters.getStoreBreadCrumbs;
                    let isContains = storeBreadcrumb.some((crumb) =>
                        crumb.text.includes(breadCrumbText)
                    );

                    //jika belum ada tambahkan ke breadCrumbs
                    if (!isContains) {
                        this.$store.commit("pushStoreBreadCrumbs", {
                            text: breadCrumbText,
                            to: {
                                name: route.name,
                                params: {
                                    id: route.params.id,
                                },
                            },
                        });
                    } else {
                        let index = storeBreadcrumb.findIndex(
                            (obj) => obj.text === breadCrumbText
                        );
                        this.$store.commit("sliceStoreBreadCrumbs", index);

                        tempBreadCrumbs = tempBreadCrumbs.slice(0, 1); //kodingan formalitas
                        tempBreadCrumbs =
                            this.$store.getters.getStoreBreadCrumbs;
                    }
                }
            },
        },
    },
    {
        path: "/edit-catatan-refleksi-dosen/:id",
        name: "EditCatatanRefleksiDosen",
        component: EditCatatanRefleksiDosen,
        meta: {
            breadCrumb(route) {
                if (
                    tempBreadCrumbs.length == 1 &&
                    tempBreadCrumbs[0].text == "dummy"
                ) {
                    const breadCrumbSimpanan =
                        this.$store.getters.getStoreBreadCrumbs;
                   
                    tempBreadCrumbs = breadCrumbSimpanan;

                    var savedData = Cookies.get("listKey");
                    savedData = JSON.parse(savedData);
                    
                    this.$store.commit("updateStoreBreadCrumbs", savedData);
                } else {
                    const breadCrumbText = formatString(route.name);
                    const storeBreadcrumb =
                        this.$store.getters.getStoreBreadCrumbs;
                    let isContains = storeBreadcrumb.some((crumb) =>
                        crumb.text.includes(breadCrumbText)
                    );

                    //jika belum ada tambahkan ke breadCrumbs
                    if (!isContains) {
                        this.$store.commit("pushStoreBreadCrumbs", {
                            text: breadCrumbText,
                            to: {
                                name: route.name,
                                params: {
                                    id: route.params.id,
                                },
                            },
                        });
                    } else {
                        let index = storeBreadcrumb.findIndex(
                            (obj) => obj.text === breadCrumbText
                        );
                        this.$store.commit("sliceStoreBreadCrumbs", index);

                        tempBreadCrumbs = tempBreadCrumbs.slice(0, 1); //kodingan formalitas
                        tempBreadCrumbs =
                            this.$store.getters.getStoreBreadCrumbs;
                    }
                }
            },
        },
    },
    {
        path: "/daftar-catatan-dosen",
        name: "DaftarCatatanDosen",
        component: DaftarCatatanDosen,
        meta: {
            breadCrumb(route) {
                if (
                    tempBreadCrumbs.length == 1 &&
                    tempBreadCrumbs[0].text == "dummy"
                ) {
                    const breadCrumbSimpanan =
                        this.$store.getters.getStoreBreadCrumbs;
                    tempBreadCrumbs = breadCrumbSimpanan;

                    var savedData = Cookies.get("listKey");
                    savedData = JSON.parse(savedData);
                    this.$store.commit("updateStoreBreadCrumbs", savedData);
                } else {
                    const breadCrumbText = formatString(route.name);
                    const storeBreadcrumb =
                        this.$store.getters.getStoreBreadCrumbs;
                    let isContains = storeBreadcrumb.some((crumb) =>
                        crumb.text.includes(breadCrumbText)
                    );

                    //jika belum ada tambahkan ke breadCrumbs
                    if (!isContains) {
                        this.$store.commit("pushStoreBreadCrumbs", {
                            text: breadCrumbText,
                            to: {
                                name: route.name,
                            },
                        });
                    } else {
                        let index = storeBreadcrumb.findIndex(
                            (obj) => obj.text === breadCrumbText
                        );
                        this.$store.commit("sliceStoreBreadCrumbs", index);

                        tempBreadCrumbs = tempBreadCrumbs.slice(0, 1); //kodingan formalitas
                        tempBreadCrumbs =
                            this.$store.getters.getStoreBreadCrumbs;
                    }
                }
            },
        },
    },
    {
        //lihat-semua-catatan-perwalian
        path: "/daftar-catatan-perwalian-dosen",
        name: "DaftarCatatanPerwalianDosen",
        component: DaftarCatatanPerwalianDosen,
        meta: {
            breadCrumb(route) {
                if (
                    tempBreadCrumbs.length == 1 &&
                    tempBreadCrumbs[0].text == "dummy"
                ) {
                    const breadCrumbSimpanan =
                        this.$store.getters.getStoreBreadCrumbs;
                   
                    tempBreadCrumbs = breadCrumbSimpanan;

                    var savedData = Cookies.get("listKey");
                    savedData = JSON.parse(savedData);
                    
                    this.$store.commit("updateStoreBreadCrumbs", savedData);
                } else {
                    const breadCrumbText = formatString(route.name);
                    const storeBreadcrumb =
                        this.$store.getters.getStoreBreadCrumbs;
                    let isContains = storeBreadcrumb.some((crumb) =>
                        crumb.text.includes(breadCrumbText)
                    );

                    //jika belum ada tambahkan ke breadCrumbs
                    if (!isContains) {
                        this.$store.commit("pushStoreBreadCrumbs", {
                            text: breadCrumbText,
                            to: {
                                name: route.name,
                            },
                        });
                    } else {
                        let index = storeBreadcrumb.findIndex(
                            (obj) => obj.text === breadCrumbText
                        );
                        this.$store.commit("sliceStoreBreadCrumbs", index);

                        tempBreadCrumbs = tempBreadCrumbs.slice(0, 1); //kodingan formalitas
                        tempBreadCrumbs =
                            this.$store.getters.getStoreBreadCrumbs;
                    }
                }
            },
        },
    },
    {
        path: "/daftar-catatan-perwalian-angkatan/:id",
        name: "DaftarCatatanPerwalianAngkatan",
        component: DaftarCatatanPerwalianAngkatan,
        meta: {
            breadCrumb(route) {
                if (
                    tempBreadCrumbs.length == 1 &&
                    tempBreadCrumbs[0].text == "dummy"
                ) {
                    const breadCrumbSimpanan =
                        this.$store.getters.getStoreBreadCrumbs;
                   
                    tempBreadCrumbs = breadCrumbSimpanan;

                    var savedData = Cookies.get("listKey");
                    savedData = JSON.parse(savedData);
                    
                    this.$store.commit("updateStoreBreadCrumbs", savedData);
                } else {
                    const breadCrumbText = formatString(route.name);
                    const storeBreadcrumb =
                        this.$store.getters.getStoreBreadCrumbs;
                    let isContains = storeBreadcrumb.some((crumb) =>
                        crumb.text.includes(breadCrumbText)
                    );

                    //jika belum ada tambahkan ke breadCrumbs
                    if (!isContains) {
                        this.$store.commit("pushStoreBreadCrumbs", {
                            text: breadCrumbText,
                            to: {
                                name: route.name,
                                params: {
                                    id: route.params.id,
                                },
                            },
                        });
                    } else {
                        let index = storeBreadcrumb.findIndex(
                            (obj) => obj.text === breadCrumbText
                        );
                        this.$store.commit("sliceStoreBreadCrumbs", index);

                        tempBreadCrumbs = tempBreadCrumbs.slice(0, 1); //kodingan formalitas
                        tempBreadCrumbs =
                            this.$store.getters.getStoreBreadCrumbs;
                    }
                }
            },
        },
    },
    {
        path: "/daftar-catatan-perwalian-mahasiswa/:id",
        name: "DaftarCatatanPerwalianMahasiswa",
        component: DaftarCatatanPerwalianMahasiswa,
        meta: {
            breadCrumb(route) {
                if (
                    tempBreadCrumbs.length == 1 &&
                    tempBreadCrumbs[0].text == "dummy"
                ) {
                    const breadCrumbSimpanan =
                        this.$store.getters.getStoreBreadCrumbs;
                   
                    tempBreadCrumbs = breadCrumbSimpanan;

                    var savedData = Cookies.get("listKey");
                    savedData = JSON.parse(savedData);
                    
                    this.$store.commit("updateStoreBreadCrumbs", savedData);
                } else {
                    const breadCrumbText = formatString(route.name);
                    const storeBreadcrumb =
                        this.$store.getters.getStoreBreadCrumbs;
                    let isContains = storeBreadcrumb.some((crumb) =>
                        crumb.text.includes(breadCrumbText)
                    );

                    //jika belum ada tambahkan ke breadCrumbs
                    if (!isContains) {
                        this.$store.commit("pushStoreBreadCrumbs", {
                            text: breadCrumbText,
                            to: {
                                name: route.name,
                                params: {
                                    id: route.params.id,
                                },
                            },
                        });
                    } else {
                        let index = storeBreadcrumb.findIndex(
                            (obj) => obj.text === breadCrumbText
                        );
                        this.$store.commit("sliceStoreBreadCrumbs", index);

                        tempBreadCrumbs = tempBreadCrumbs.slice(0, 1); //kodingan formalitas
                        tempBreadCrumbs =
                            this.$store.getters.getStoreBreadCrumbs;
                    }
                }
            },
        },
    },
    {
        path: "/:catchAll(.*)",
        component: PageNotFoundVue,
    },
];

//mengubah 'DetailMahasiswa' => 'Detail Mahasiswa'
function formatString(string) {
    // Mencari posisi huruf besar setelah huruf kecil
    const regex = /([a-z])([A-Z])/g;
    // Mengganti setiap pasangan huruf kecil dan huruf besar dengan spasi di antaranya
    const formattedString = string.replace(regex, "$1 $2");
    // Mengubah huruf pertama menjadi huruf besar
    const finalString =
        formattedString.charAt(0).toUpperCase() + formattedString.slice(1);

    return finalString;
}

//untuk ubah 'Detail Mahasiswa' => 'DetailMahasiswa'
String.prototype.removeSpaces = function () {
    return this.replace(/\s/g, "");
};

//mengubah 'detail-mahasiswa' => 'Detail Mahasiswa'
// function convertToTitleCase(string) {
//   if(string != undefined){
//     // Memisahkan kata-kata berdasarkan tanda hubung (-)
//     const words = string.split('-');
//     // Mengubah setiap kata menjadi huruf kapital pada huruf pertama, dan menggabungkan kembali kata-kata
//     const convertedString = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

//     return convertedString;
//   }else{
//     return "";
//   }
// }

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.name === "TambahCatatanPerwalian" || to.name === "TambahCatatanMahasiswa" || to.name === "TambahCatatanAngkatan" || to.name === "TambahCatatanDosen") {
        if (to.params.canBack === "1") {
            next();
        } else {
            next('/PageNotFound');
        }
    } else {
        next(); 
    }
});
  


export default router;
