<script setup lang="ts">
import { useState } from '@apus.run/vue-hooks';
import { ref, onMounted, watchEffect } from 'vue';
const inputRef = ref();
const [msg, setMsg] = useState('hello');
onMounted(() => {
  console.log('打印:', inputRef.value.value);
});
watchEffect(() => {
  inputRef.value = msg.value;
});
</script>

<template>
  <h1>{{ msg }}</h1>
  <input ref="inputRef" v-model="msg"/>
  <button @click="setMsg('')">清空</button>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
</style>
