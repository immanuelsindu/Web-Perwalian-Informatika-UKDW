import { createStore } from "vuex";
import Cookies from 'js-cookie';

// Create a new store instance.
const store = createStore({
    state() {
        return {
            storeBreadcrumb: [],
            aksesLogin: undefined,
            isShouldLogin: undefined
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
        setAksesLogin(state, aksesLogin) {
            Cookies.set('auth', aksesLogin);
        },
        setIsDiplayShouldLogin(state, shouldLogin) {
            Cookies.set("isDisplayShouldLogin", shouldLogin)
        }
    },
    getters: {
        // untuk get breadcrumb dinamis
        getStoreBreadCrumbs(state) {
            return state.storeBreadcrumb
        },
        getAksesLogin(state) {
            let authData = Cookies.get("auth")
            switch (authData) {
                case 'false':
                    state.aksesLogin = false
                    break;
                case 'true':
                    state.aksesLogin = true
                    break;
                default:
                    break
            }
            return state.aksesLogin
        },
        getIsShouldDisplayLogin(state) {
            let isShouldLogin = Cookies.get("isDisplayShouldLogin")
            switch (isShouldLogin) {
                case 'false':
                    state.isShouldLogin = false
                    break;
                case 'true':
                    state.isShouldLogin = true
                    break;
                default:
                    break
            }
            return state.isShouldLogin
        }

    },
});

export default store;
