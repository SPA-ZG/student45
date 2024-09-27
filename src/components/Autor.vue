<template>
  <div class="author-card">
    <div class="author-info">
      <h2><strong>{{author.name}} {{author.surname}}</strong></h2>
      <p><strong>Datum rođenja:</strong> {{ author.DOB }}</p>
      <p><strong>Država:</strong> {{ author.country }}</p>
      <p><strong>Opis:</strong> {{ author.opis }}</p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'prikaz-jednog-autora',
    props: {
        author: {
            type: Object,
            required: true
        }
    }
};
</script>

<style scoped>
.author-card {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.author-info {
  font-family: Arial, sans-serif;
}

.author-info p {
  margin: 5px 0;
}
</style>
