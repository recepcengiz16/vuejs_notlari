<template>
    <div class="container">
       <div class="row justify-content-center m-5">
            <div class="col-md-8">
                <div class="header">
                    <slot name="title">
                        SLOT YAPISI TİTLE
                    </slot> <!-- Named Slots:Bu özellik ile yollamak istediğimiz html taglerine isim vererek onları farklı farklı slotlarda çağırabiliriz. -->
                </div>
                <hr>
                <div class="content my-2">
                    <slot name="content">
                        SLOT YAPISI CONTENT
                    </slot>
                </div>
                
                <slot></slot> <!-- default slotu göstermek için, isimlendirilmemişse defaulttur. -->

                <div class="footer d-flex justify-content-end">
                    <button class="btn btn-danger me-2">Kapat</button>
                    <button class="btn btn-success me-2" @click="onSave">Kaydet</button>
                </div>
            </div>
       </div>
    </div>
</template>


<script> 

    export default {
        props:["onSave"]
    }

</script>