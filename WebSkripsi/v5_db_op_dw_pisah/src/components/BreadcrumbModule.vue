<template>
	<v-breadcrumbs :items="myIsi" :key="breadcrumbKey" class="myBreadCrumb mb-3">
		<template v-slot:title="{ item }">
			<v-breadcrumbs-item :to="item.to">
				<span >
					{{ item.text }}
				</span>
			</v-breadcrumbs-item>
		</template>
	</v-breadcrumbs>
</template>

<script>
import {
    VBreadcrumbs,
    VBreadcrumbsItem
} from "vuetify/lib/components/VBreadcrumbs";
import Cookies from 'js-cookie';

export default {
    name: "BreadcrumbModule",

    data() {
        return {
            myIsi: [],
            breadcrumbKey: 0
        }
    },
    components: {
        VBreadcrumbs,
        VBreadcrumbsItem
    },
    created() {
        // # Case kalau di reload pasti kosong #  
        // 1. ketika di reload, cek jika storeCrumbs kosong atau tidak (pasti kosong, isinya dummy)
        const isBreadCrumbEmpty = this.getterStoreCrumbs() // get breadcrumb yang sekarang 
        // 2. pas ngambil ini ^ datanya kosong karena waktu 
        // panggil method ini tidak di wait dulu
        // di store, tempBreadCrumb == [ ] 
        // lalu listDataBreadCrumbStore sudah diupdate dari cookies 
        // tapi di sini tidak pernah di pakai (?)

        //cek jika BreadCrumb kosong
        // 5. karena di sini checkednya kosong, berarti update this.myIsi langsung dari cookies
        if (isBreadCrumbEmpty[0].text == this.$route.text) {
            //update (isi) data breadcrumb dari cookies 
            this.updateBreadCrumbsFromCookies();
        } else {
            this.saveBreaCrumbsToCookies();
            this.updateBreadcrumbs();
            this.$store.commit('updateStoreBreadCrumbs', this.myIsi);
        }
	
    },
    methods: {
        updateBreadcrumbs() {
            this.myIsi = this.getterStoreCrumbs();
        },
        getterStoreCrumbs() {
            // 3. waktu method di bawah di jalankan perlu waktu
            this.updateRouterBreadCrumbs()
            // 4. karena di atas masih proses jadi langsung di return dalam keadaan kosong [ ]
            return this.$store.getters.getStoreBreadCrumbs;
        },
        updateRouterBreadCrumbs() {
            // 6. tapi waktu ini sudah selesai selang beberapa milidetik, 
            // ini dijalankan dan di store melakukan update 
            // listDataBreadCrumbStore yang sudah ada isinya
            if (typeof this.$route.meta.breadCrumb === "function") {
                this.$route.meta.breadCrumb.call(this, this.$route);
            }
        },
        //=== Local storage ===
        saveBreadCrumbsToLocalStorage() {
            localStorage.setItem('localBreadCrumbs', JSON.stringify(this.getterStoreCrumbs()));
        },
        updateBreadCrumbsFromLocalStorage() {
            const savedData = localStorage.getItem('localBreadCrumbs');
            if (savedData) {
                const localDataCrumbs = JSON.parse(savedData);
                this.myIsi = localDataCrumbs;
                this.$store.commit('updateStoreBreadCrumbs', localDataCrumbs);
            }
        },
        // === Cookies ==
        saveBreaCrumbsToCookies() {
            Cookies.set('listKey', JSON.stringify(this.getterStoreCrumbs()));
        },
        updateBreadCrumbsFromCookies() {
            const savedData = Cookies.get('listKey');
            if (savedData) {
                this.myIsi = JSON.parse(savedData);
                this.$store.commit('updateStoreBreadCrumbs', JSON.parse(savedData));
            }
        },
    }
};
</script>

<style>
.myBreadCrumb {
    font-size: 1rem !important;
}
</style>
