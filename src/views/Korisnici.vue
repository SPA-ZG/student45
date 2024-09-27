<template>
  <div>
    <multi-header naslov="Korisnici" />
    <div class="search-container">
      <label for="searchInput">Traži korisnike:</label>
      <input
        type="text"
        id="searchInput"
        v-model="searchTerm"
        placeholder="Unesite ime korisnika"
      />
    </div>
    <div class="users-container">
        <p>Imam prava za pregledavanje ovih podataka: {{ statementIsTrue }}</p>
        <input type="checkbox" v-model="statementIsTrue" />   
        <table>
            <thead>
            <tr>
                <th>Ime</th>
                <th>Prezime</th>
                <th>Dob</th>
                <th>Broj posuđenih knjiga</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in filteredUsers" :key="user.id">
                <td>{{ user.name }}</td>
                <td>{{ user.surname }}</td>
                <td>{{ user.age }}</td>
                <td>{{ user.borrowed }}</td>
            </tr>
            </tbody>
        </table>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { collection, query, getDocs } from 'firebase/firestore';
import MultiHeader from '../components/MultiHeader.vue';
import { db } from '../firebase.js';

export default {
  name: 'prikaz-korisnika',
  components: {
    MultiHeader,
  },
  setup() {
    const users = ref([]);
    const searchTerm = ref('');
    const statementIsTrue = ref(true);

    onMounted(async () => {
      const q = query(collection(db, 'korisnici'));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(doc => {
        users.value.push({
          id: doc.id,
          ...doc.data(),
        });
      });
    });

    const filteredUsers = computed(() =>
      users.value.filter(
        user =>
          user.name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          user.surname.toLowerCase().includes(searchTerm.value.toLowerCase())
      )
    );

    return {
      users,
      searchTerm,
      filteredUsers,
      statementIsTrue,
    };
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


  .users-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  table {
    width: 50%;
    border-collapse: collapse;
    margin-top: 20px;
  }

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f2f2f2;
  }
</style>
