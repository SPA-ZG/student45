<template>
  <div class="container">
    <h1>404 - Stranica nije pronađena</h1>
    <p>Žao nam je, ali tražena stranica ne postoji.</p>
    <router-link to="/" class="notfound">Povratak na početnu stranicu</router-link>
  </div>
</template>

<script>
export default {
  name: 'not-found',
};
</script>

<style>
.notfound {
  color: blue;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  font-family: Arial, sans-serif;
  color: #333;
}
</style>
