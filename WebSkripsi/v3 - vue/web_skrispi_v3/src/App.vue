<template>
    <router-view></router-view>
</template>
 
<script>
export default {
    name: 'App',
    data() {
        return {

        }
    },
    created() {
        this.handleZoom();
    },
    methods: {
        handleZoom() {
            if (window.innerWidth < 1360 || window.innerHeight < 768) {
                document.body.style.zoom = "97%";
            } else {
                document.body.style.zoom = "100%";
            }
        }
    }
}
</script>
  
<style ></style>
