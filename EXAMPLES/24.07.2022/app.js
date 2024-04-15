const app = Vue.createApp({
    data() {
        return {
            redStyle:false,
            orangeStyle:false

        }
    },
    methods: {
        Message(message,e){
            alert(message);
            console.log(e);
        }
    },
    computed:{

    }
}).mount("#app");