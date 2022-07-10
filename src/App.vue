<template>
  <div id="app" class="vh-100">
    <NavBar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar/Bar";

export default {
  components: {NavBar}
}
</script>

<style lang="scss" scoped>

</style>