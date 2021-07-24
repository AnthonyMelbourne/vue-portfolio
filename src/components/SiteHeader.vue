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

@media (max-width: 599px) {
  .header h1 {
    padding-top: 5px;
    font-family: "UnifrakturMaguntia", cursive;
    font-size: 2rem;
  }
}

@media (min-width: 600px) {
  .header h1 {
    padding-top: 5px;
    font-family: "UnifrakturMaguntia", cursive;
    font-size: 4rem;
  }
}

@media (min-width: 980px) {
  .header h1 {
    padding-top: 5px;
    font-family: "UnifrakturMaguntia", cursive;
    font-size: 6rem;
  }
}
</style>
