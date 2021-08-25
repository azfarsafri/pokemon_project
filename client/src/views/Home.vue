<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <generations-list />
  </div>
</template>

<script>
// @ is an alias to /src
import GenerationsList from "@/components/GenerationsList.vue";

export default {
  name: "Home",
  components: {
    GenerationsList
  },
};
</script>
