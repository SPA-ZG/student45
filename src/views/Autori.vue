<template>
  <div>
    <multi-header naslov="Autori" />
    <div class="autor-grid">
      <autor v-for="autor in autori" :key="autor.id" :author="autor" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { db } from '../firebase.js';
import Autor from '../components/Autor.vue';
import MultiHeader from '../components/MultiHeader.vue'; 

import { collection, query, getDocs } from 'firebase/firestore';

export default {
  name: 'prikaz-autora',
  components: {
    Autor,
    MultiHeader,
  },
  setup() {
    const autori = ref([]);

    onMounted(async () => {
      console.log("ovdje sam")
      const q = query(collection(db, 'autori'));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(doc => {
        autori.value.push({
          id: doc.id,
          ...doc.data()
        });
      });
    })

    return {
      autori
    };
  }
};
</script>

<style scoped>
.autor-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 20px; 
}
</style>