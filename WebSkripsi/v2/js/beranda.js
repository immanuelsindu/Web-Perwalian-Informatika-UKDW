window.addEventListener('scroll', function() {
    var scrollTop = window.scrollY;
    var screenWidth = window.innerWidth;
    if (scrollTop > 100 && screenWidth >= 1000) {
        document.querySelector('.mySticky').classList.add('paddingTop');
        document.querySelector('.mySticky').classList.add('heightScroll');
    } else {
        document.querySelector('.mySticky').classList.remove('paddingTop');
        document.querySelector('.mySticky').classList.remove('heightScroll');
    }
});


//tool tip
$(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});


var app = Vue.createApp({
    data() {
        return {
            angkatan: 2015,
            isOn:false,
            radioValue:"pilihan1",
            counter:[0,0],
            showInfoAngkatan:[false,false,],
            tahunAngkatan:[2016,2017],
            test:["Sindu0","Sindu1"],
            items:[
                {
                    myRadioValue:"pilihan1",
                    data:
                        [
                            {id:"bagianCatatan",pos:1},
                            {id:"bagianCatatanDosen",pos:2},
                            {id:"bagianGrupAngkatan",pos:3},
                            
                        ]
                },
                {
                    myRadioValue:"pilihan2",
                    data:
                    [
                        {id:"bagianGrupAngkatan",pos:1},
                        {id:"bagianCatatan",pos:2},
                        {id:"bagianCatatanDosen",pos:3},
                    ]
                }
            ]
        }
    },
    methods:{
        simpan(){
            if(this.radioValue == "pilihan1"){
                this.isOn = false;
                /*mulai atur urutan berdasarkan pilihan pengguna*/
                this.items[0].data.forEach(dataPosisi=>{
                        const element = document.getElementById(dataPosisi.id);
                        element.style.order = dataPosisi.pos;
                    })
                this.isChecked1 = true;
                this.isChecked2 = false;
                
            }else if(this.radioValue == "pilihan2"){
                this.isOn = false;
                /*mulai atur urutan berdasarkan pilihan pengguna*/
                this.items[1].data.forEach(dataPosisi=>{
                    const element = document.getElementById(dataPosisi.id);
                    element.style.order = dataPosisi.pos;
                })
                this.isChecked1 = false;
                this.isChecked2 = true;
            }
            var x = document.getElementById("snackbar");
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        },
        reorder(){
            this.items.forEach(item => {
                const element = document.getElementById(item.id);
                element.style.order = item.pos;
            });
        },
        showPopUpPreferensi(){
            this.isOn = true;
        },
        batal(){
            this.isOn = false;
        },
        showinfoAngkatan(index){
            // blok kode 1
            if(this.counter[index-1] != 1){
                console.log("Ini Counter = "+ index)
                console.log("Ini nama = "+this.test[index-1]);
                const scrollable = document.querySelector('.mySticky');
                const scrollHeight = scrollable.scrollHeight - scrollable.clientHeight;
                    scrollable.scrollTo({
                    top: scrollHeight,
                    behavior: 'smooth'
                });

                // blok kode 2 
                this.showInfoAngkatan[index-1] = !this.showInfoAngkatan[index-1]

                this.counter[index-1] += 1;
            }else{
                const scrollable = document.querySelector('.mySticky');
                    scrollable.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                this.showInfoAngkatan[index-1] = !this.showInfoAngkatan[index-1]
                this.counter[index-1] = 0;
            }
           
        },
    }
})

app.mount("#content")