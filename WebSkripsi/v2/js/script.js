function login(){
    document.getElementById("login").onclick = location.href = "beranda.html";
};

//tool tip
$(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});


  
// function onSignIn(googleUser) {
//     var profile = googleUser.getBasicProfile();
//     console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
//     console.log('Name: ' + profile.getName());
//     console.log('Image URL: ' + profile.getImageUrl());
//     console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
// }


var app = Vue.createApp({
    data() {
        return {
            radioValue:"pilihan1",
            textNama:"Nama",
            peserta:"Mahasiswa",
            inputanNama:"Nama",
            myPlaceholder:"Masukan nama atau NIM mahasiswa"
        }
    },
    methods:{
        updatePeserta(){
            console.log(this.radioValue)
           switch(this.radioValue){
            case "pilihan1":
                this.peserta = "Mahasiswa"
                break;
            case "pilihan2":
                this.peserta = "Orang Tua"
                break;
            case "pilihan3":
                this.peserta = "Orang Tua & Mahasiswa"
                break;
            case "pilihan4":
                this.inputanNama = "Tahun Angkatan";
                break;
           }
        }
        
    }
})

app.mount("#content")