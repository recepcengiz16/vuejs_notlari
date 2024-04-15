const app = Vue.createApp({
    data() {
        return {
            fullName:"Küpeli"
        }
    },
    methods: {
        updateValue(e){
            this.fullName=e.target.value;
        }
    },
}).mount("#app");
