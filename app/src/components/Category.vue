<template>
    <v-col>
    <v-card
        class="ma-3 category mx-auto"
        tile>
        <v-img
            class="white--text align-end"
            height="140px"
            gradient="to top right, rgba(255,255,255,.33), rgba(255,255,255,.7)"
            v-bind:src="getCategoryImageUrl(category.icon)"
        >
            <v-icon color="white" size="5vh">mdi-{{category.icon}}</v-icon>
            <v-card-title v-bind:id="'cat_'+category.id" sm="4" class="categoryName justify-center" >{{category.name}}</v-card-title>
            <v-card-subtitle class="pb-0 white--text">{{category.suppliers.length}} fornecedores</v-card-subtitle>
        </v-img>
    <v-card-text class="text--primary" style="position:relative">
      <v-carousel v-model="model"
        continuous
        height="200"
        hide-delimiters
        interval="5000"
        :show-arrows="category.suppliers.length>1"
      >
            <v-carousel-item
              v-for="(supplier) in category.suppliers"
              :key="supplier.id"
            >
              <Supplier :supplier="supplier" />
            </v-carousel-item>
          </v-carousel>
    </v-card-text>
    </v-card>
    </v-col>
</template>
<style scoped>
    .category {
        min-width: 100px;
        min-height: 100px;
    }
    .categoryName {
        font-size: 1.10rem;
    }
</style>
<script>
import Supplier from '@/components/Supplier';
export default {
    data () {
      return {
        model: 0,
        playing: true,
      }
    },
    components: {
        Supplier,
    },
    props: ['category'],
    name: "Category",
    methods: {
        getCategoryImageUrl(icon) {
          var images = require.context('../assets/categories/', false, /\.png$/)
          return images('./' + icon + ".png")
        },

        playStopCarousel() {
            this.playing = !this.playing;
        }
    }
}
</script>