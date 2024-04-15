const app = Vue.createApp({
    data() {
        return {
          showBorder:false,
          redBG:false,
          boxClass:"kenarlik",
          bgColor:"cyan",
          activeClass: 'active',
          errorClass: 'text-danger'
           
        };
    },
    computed:{
          boxClasses(){
               return {kenarlik:this.showBorder, red:this.redBG}
          },
          customStyle(){
            return {backgroundColor:this.bgColor}
          }
    }
  
}).mount("#app");
