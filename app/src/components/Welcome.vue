<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <p>Bens para entrega em </p>
        <p class="display-1">VALONGO</p>
        <v-img
          :src="require('../assets/logo.png')"
          class="my-3"
          contain
          height="100"
        />
      </v-col>
      <v-col
        class="mb-0 pb-0">
        <p class="subheading font-weight-regular pb-0 mb-1">
          Escolha uma categoria para ver a lista de comerciantes com entrega ao domicílio na sua zona
        </p>
      </v-col>
      <v-col
        class="pt-0 mt-1"
        cols="12"
      >
        <Delivery/>
      </v-col>
    </v-row>
     <v-btn
      v-scroll="onScroll"
      v-show="fab"
      dark
      fixed
      bottom
      right
      @click="toTop"
      small
      :style="{left: '50%', transform:'translateX(-50%)'}"
    >
      <v-icon>mdi-arrow-up</v-icon>
      Voltar ao topo
      <v-icon>mdi-arrow-up</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
  import Delivery from '@/components/Delivery';
  export default {
    name: 'Welcome',
    components: {
      Delivery,
    },
    data: () => ({
      fab: false
    }),
    methods: {
      onScroll (e) {
        if (typeof window === 'undefined') return
        const top = window.pageYOffset ||   e.target.scrollTop || 0
        this.fab = top > 20
      },
      toTop () {
        this.$vuetify.goTo(0)
      }
    }
  }
</script>
