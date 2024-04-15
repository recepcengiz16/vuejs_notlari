<template>
    <div>
        <section class="my-5">
              <input type="text" @keydown.enter="newItem" class="form-control p-2 rounded-pill" placeholder="Nedir?"/>
        </section>
    </div>
</template>


<script>
export default {
    props:{
        AddTodo:Function
    },
    setup(props) {
        const newItem=(event)=>{
            props.AddTodo(event.target.value);
            event.target.value="";
        }

        return {newItem};
    }
}
</script>