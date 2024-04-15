<template>
  <div class="container d-flex justify-content-center m-5">
      <!-- <UserSection :items="this.provideData.userList" @new-item="this.provideData.userList.push($event)"></UserSection> -->
      <UserSection></UserSection>
     
      <!-- neyi pushlayacak bana childdan gelen veriyi -->
  </div>

</template>

<script>
import UserSection from "@/components/UserSection.vue";

  export default{
    data() {
        return {
            // userList: ["İsmail","Lütfiye","Recep","Emin","Rukiye"]
            provideData:{
                userList: ["İsmail","Lütfiye","Recep","Emin","Rukiye"]
            }
        };
    },
    methods: {
      newItem(item){
        this.provideData.userList.push(item);
      }
    },
    components: { UserSection },
    provide(){
      return {
          userList:this.provideData.userList,
          newItem:this.newItem
      };
    }
}
</script>