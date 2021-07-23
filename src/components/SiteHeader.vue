<template>
  <header class="outer-border">
    <header class="middle-border">
      <header class="inner-border">
        <header class="header">
          <router-link to="/">
            <h1>Catalyst Media Inc.</h1>
          </router-link>
        </header>
      </header>
    </header>
  </header>
</template>

<script>
export default {
  name: "SiteHeader",
};
</script>

<style>
@media (min-width: 300px) {
  .header h1 {
    padding-top: 5px;
    font-family: "UnifrakturMaguntia", cursive;
    font-size: 2.4rem;
  }
}
</style>
