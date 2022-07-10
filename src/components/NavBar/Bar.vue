<template>
  <b-navbar type="dark" variant="info">
    <div class="container-fluid">
      <b-navbar-brand :to="{name: 'MainPage'}">ZNote</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{name: 'NotesPage'}">Notes</b-nav-item>
          <b-nav-item :to="{name: 'LabelsPage'}">Labels</b-nav-item>
        </b-navbar-nav>
      </b-collapse>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <LoginButton/>
      </b-navbar-nav>
    </div>
  </b-navbar>
</template>

<script>
import LoginButton from "@/components/NavBar/LoginItem";

export default {
  name: "NavBar",
  components: {LoginButton}
}
</script>
