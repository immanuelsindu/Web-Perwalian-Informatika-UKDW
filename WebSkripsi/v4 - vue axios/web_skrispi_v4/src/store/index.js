import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
    state() {
        return {
            storeBreadcrumb: [],
        };
    },
    mutations: {
        // untuk update breadcrumb dinamis
        updateStoreBreadCrumbs(state, listBreadCrumbs) {
            state.storeBreadcrumb = listBreadCrumbs;
        },
        pushStoreBreadCrumbs(state, payload) {
            state.storeBreadcrumb.push(payload);
        },
        sliceStoreBreadCrumbs(state, index) {
            if (index == 0) {
                state.storeBreadcrumb = state.storeBreadcrumb.slice(0, 1);
            } else {
                state.storeBreadcrumb = state.storeBreadcrumb.slice(
                    0,
                    index + 1
                );
            }

        },
    },
    getters: {
        // untuk get breadcrumb dinamis
        getStoreBreadCrumbs(state) {
            return state.storeBreadcrumb;
        },
    },
});

export default store;
