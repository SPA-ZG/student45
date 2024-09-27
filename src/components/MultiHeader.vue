<template>
  <header>
    <div class="header-content">
      <h1>{{ naslov }}</h1>
      <nav>
        <router-link to="/">Knjige</router-link>
        <router-link to="/autori">Autori</router-link>
        <router-link to="/korisnici">Korisnici</router-link>
      </nav>
      <div class="currency-section">
        <span class="trenutna">Trenutna valuta:</span>
        <span v-if="currencyStore.selectedCurrency === '€'">€</span>
        <span v-if="currencyStore.selectedCurrency === 'kn'">kn</span>
        <button class="currency-button" @click="toggleCurrency">Promijeni Valutu</button>
      </div>
    </div>
  </header>
</template>

<script>
import { useCurrencyStore } from '../stores/currency';

export default {
  name: 'multi-header',
  props: {
    naslov: String,
  },
  setup() {
    const currencyStore = useCurrencyStore();

    const toggleCurrency = () => {
      currencyStore.setCurrency(currencyStore.selectedCurrency === '€' ? 'kn' : '€');
    };

    return {
      currencyStore,
      toggleCurrency,
    };
  },
};
</script>

<style scoped>
header {
  background-color: #007BFF;
  color: white;
  padding: 10px;
  text-align: center;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  margin: 0;
}

nav {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

.router-link {
  margin-right: 10px;
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 16px;
}

.currency-section {
  display: flex;
  align-items: center;
}

.currency-button {
  background-color: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 4px;
  padding: 8px 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 5px;
}

.currency-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.trenutna {
    margin-right: 4px;
}
</style>