<template>
          <!--!Bookmark Items -->
          <div>
        <div class="p-2 grid grid-cols-8 gap-4">
            <bookmark-list-item v-for="item in items" :key="item.id" :item="item"></bookmark-list-item>
        </div>
      </div>
      <!--!Bookmark Items -->
</template>

<script>
    import BookmarkListItem from "./BookmarkListItem.vue"; // . ile bulunduğun klasörün altındaki dedik
export default {
    components:{
        BookmarkListItem
    },
    props:{
        items:{
            type:Array,
            required:true,
            default:()=>[] //defaultu fonks. şeklinde yazarız proposda 
        }
    }
}
</script>