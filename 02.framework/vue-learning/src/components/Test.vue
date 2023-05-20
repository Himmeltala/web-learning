<script setup lang="ts">
import { reactive, toRef, isRef } from "vue";

const obj = {
  foo: 1
};

const foo = toRef(obj, "foo");
</script>

<template>
  <div>
    {{ foo }}
  </div>
  <button @click="foo++">Add</button>
</template>
