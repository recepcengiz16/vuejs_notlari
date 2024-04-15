<template>
  <div>
    <!-- <Label>
      Başlık
      <Input></Input>
      <Select></Select>
    </Label> -->

    <Form.Label>
      Başlık
      <Form.Input></Form.Input>
      <Form.Select></Form.Select>
    </Form.Label>
  </div>
</template>

<script setup>
  // import Input  from './components/Forms/Input.vue';
  // import Select from './components/Select.vue';
  // import Label  from './components/Forms/Label.vue';

  import * as Form from "./components/form-components"; // * ne gelirse gelsin al demek as Form da form olarak bana getir. Adı form yani
</script>