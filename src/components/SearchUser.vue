<template>
  <div class="search-container">
    <label for="searchInput">Traži korisnike:</label>
    <input
      type="text"
      id="searchInput"
      v-model="searchTerm"
      placeholder="Unesite ime korisnika"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: String,
  },
  data() {
    return {
      searchTerm: this.value || "",
    };
  },
  watch: {
    searchTerm(newVal) {
      this.$emit("update:value", newVal);
    },
  },
};
</script>

<style scoped>
  .search-container {
    max-width: 400px;
    margin: 15px auto;
    text-align: center;
  }

  label {
    display: block;
    margin-bottom: 8px;
    color: #007bff;
    font-weight: bold;
  }

  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border-color: #007bff;
    border-radius: 5px;
    border-width: 3px;
  }
</style>
