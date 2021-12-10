<template>
  <div class="bg-gray-200 min-h-screen text-gray-700">
    <SiteHeader></SiteHeader>

    <div class="bg-gray-200">
      <div class="flex container py-12">
        <div class="flex flex-col justify-center items-center">
          <img class="max-w-[280px] drop-shadow-md z-30 rounded-xl" :src="details.image" />
          <ul>
            <li v-for="(author, index) in details.authors" :key="index">Author: {{ author.name }}</li>
            <li>Title: {{  details.title}}</li>
            <li v-for="(narrator, index) in details.narrators" :key="index">Author: {{ narrator.name }}</li>
          </ul>
        </div>
        <div class="flex px-20">
          text about the book
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SiteHeader from '../../components/SiteHeader'
export default {
  name: 'Book',
  components: {
    SiteHeader
  },
  data () {
    return {
      details: []
    }
  },
  created () {
    this.getDetails()
  },
  methods: {
    /* async */getDetails () {
      /* this.details = await fetch('https://api.audnex.us/books/' + this.$route.params.asin).then(res =>
        res.json()
      ) */
      this.details = JSON.parse('{"_id":"6159262358c0b5ec959e2e15","asin":"B002V1OF70","authors":[{"asin":"B000APO5OM","name":"Frank Herbert"}],"description":"Set on a desert planet, Dune is the story of Paul Atreides, who would become the mysterious Maud\'dib, avenge a plot against his family, and bring to fruition humankind\'s most ancient dream....","formatType":"unabridged","image":"https://m.media-amazon.com/images/I/81-QB8jnTjL.jpg","language":"english","narrators":[{"name":"Scott Brick"},{"name":"Orlagh Cassidy"},{"name":"Euan Morton"},{"name":"Simon Vance"},{"name":"Ilyana Kadushin"}],"publisherName":"Macmillan Audio","rating":"4.6","releaseDate":"2006-12-31T00:00:00.000Z","runtimeLengthMin":1262,"summary":"<p><b>Soon to be a major motion picture directed by Denis Villeneuve, starring Timothée Chalamet, Josh Brolin, Jason Momoa, Zendaya, Rebecca Ferguson, Oscar Isaac, Javier Bardem, Dave Bautista, Stellan Skarsgård, and Charlotte Rampling. </b></p> <p>Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, who would become the mysterious man known as Maud\'dib. He would avenge the traitorous plot against his noble family - and would bring to fruition humankind\'s most ancient and unattainable dream. </p> <p>A stunning blend of adventure and mysticism, environmentalism and politics, <i>Dune </i>won the first Nebula Award, shared the Hugo Award, and formed the basis of what is undoubtedly the grandest epic in science fiction. </p> <p>Frank Herbert\'s death in 1986 was a tragic loss, yet the astounding legacy of his visionary fiction will live forever. </p>","title":"Dune","genres":[{"asin":"18580606011","name":"Science Fiction & Fantasy","type":"genre"},{"asin":"18580628011","name":"Science Fiction","type":"genre"},{"asin":"18580645011","name":"Space Opera","type":"tag"}],"seriesPrimary":{"asin":"B005NALAG0","name":"Dune","position":"Book 1"},"seriesSecondary":{"asin":"B006W3V2B0","name":"Dune Saga","position":"Book 1"}}')
    }
  }
}
</script>
