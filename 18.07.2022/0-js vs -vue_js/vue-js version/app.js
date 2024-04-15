const app = Vue.createApp({
    data() {
        return {
            itemList:[],
            listItem:null
        }
    },
    methods: {
        addToList(event){
            console.log(event);
           
            this.itemList.push(this.listItem);
            this.listItem="";
        }
    },
});

app.mount("#app");