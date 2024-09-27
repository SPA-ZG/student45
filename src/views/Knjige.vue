<template>
  <div>
    <multi-header naslov="Knjige" />
    <div class="knjiga-grid">
      <knjiga v-for="knjiga in knjige" :key="knjiga.id" :book="knjiga" :currency="currencyStore.selectedCurrency" @updateRatings="updateRatings" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { db } from '../firebase.js';
import Knjiga from '../components/Knjiga.vue';
import MultiHeader from '../components/MultiHeader.vue'; 

import { collection, query, getDocs, updateDoc, doc } from 'firebase/firestore';
import { useCurrencyStore } from '../stores/currency.js';

export default {
  name: 'prikaz-knjiga',
  components: {
    Knjiga,
    MultiHeader,
  },
  setup() {
    const knjige = ref([]);
	  const currencyStore = useCurrencyStore();

    const updateRatings = async (newRating, bookId) => {
      const targetBook = knjige.value.find(book => book.id === bookId);

      if (targetBook) {
        targetBook.ratings.push(newRating);
        
        const bookRef = doc(db, 'knjige', bookId);
        await updateDoc(bookRef, { ratings: targetBook.ratings });
      }
    };

    onMounted(async () => {
      console.log("ovdje sam")
      const q = query(collection(db, 'knjige'));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(doc => {
        knjige.value.push({
          id: doc.id,
          ...doc.data()
        });
      });
    })

    return {
      knjige, currencyStore, updateRatings
    };
  }
};
</script>

<style scoped>

.knjiga-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px; 
}

</style>
