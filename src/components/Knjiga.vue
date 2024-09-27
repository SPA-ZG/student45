<template>
  <div class="book-card">
    <div class="book-info">
      <h2><strong> {{ book.title }}</strong></h2>
      <p><strong>Autor: </strong> {{ book.author }}</p>
      <p><strong>Žanr: </strong> {{ book.genre }}</p>
      <p><strong>Izdavač: </strong> {{ book.publisher }}</p>
      <p><strong>Godina: </strong> {{ book.year }}</p>
      <p><strong>Opis: </strong> {{ book.opis }}</p>
      <p><strong>Cijena: </strong>{{ formattedPrice }}</p>
      <p><strong>Prosječna ocjena: </strong>{{ prosjecnaOcjena }}</p>
      <form @submit.prevent="submitRating">
        <label for="rating">Unesite ocjenu (1-5): </label>
        <input type="number" id="rating" v-model="newRating" min="1" max="5" required>
        <button type="submit">Ocijeni</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'prikaz-jedne-knjige',
  props: {
    book: {
      type: Object,
      required: true
    },
    currency: {
      type: String,
      required: true,
    },
  },
  computed: {
    formattedPrice() {
      if (this.currency === '€') {
        return `${this.book.price} €`;
      } else if (this.currency === 'kn') {
        return `${(this.book.price * 7.5345).toFixed(2)} kn`;
      }

      return 'N/A';
    },
  },
  data() {
    return {
      prosjecnaOcjena: 'N/A', 
      newRating: null,
    };
  },
  methods: {
    calculateAverageRating() {
      const ratings = this.book.ratings
      if (!ratings || ratings.length === 0) {
        this.prosjecnaOcjena = 'N/A';
        return
      }
      var sum = this.newRating !== null ? this.newRating : 0
      sum += ratings.reduce((acc, rating) => acc + rating, 0);
      const average = sum / (ratings.length + (this.newRating !== null ? 1 : 0));
      this.prosjecnaOcjena = average.toFixed(2);
    },

    submitRating() {
      if (this.newRating && !isNaN(this.newRating) && this.newRating >= 1 && this.newRating <= 5) {
        this.calculateAverageRating();

        this.$emit('updateRatings', this.newRating, this.book.id);

        this.newRating = null;

      } else {
        alert('Unesite valjanu ocjenu od 1 do 5.');
      }
    },
  },
  created() {
    this.calculateAverageRating()
  }
};
</script>

<style scoped>
.book-card {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.book-info {
  font-family: Arial, sans-serif;
}

.book-info p {
  margin: 5px 0;
}
</style>
