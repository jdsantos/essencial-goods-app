<template>
    <v-row class="ma-0 pa-0">
      <v-col cols="12" class="ma-0 pa-0">
          <v-row class="ma-0 pa-0">
              <v-col class="ma-0 pa-0">
                  <div>
                    <v-chip small v-for="category in categories" v-bind:key="category.id" v-bind:category="category"
                        link
                        :href="'#cat_'+category.id"
                        class="ma-1 pa-3">
                    <v-avatar left>
                        <v-icon>mdi-{{category.icon}}</v-icon>
                    </v-avatar>
                        {{category.name}}
                    </v-chip>
                  </div>
              </v-col>
          </v-row>

          <v-row
            align="center"
            justify="space-around">
            <Category v-for="category in categories" v-bind:key="category.id" v-bind:category="category"/>
          </v-row>
      </v-col>      
    </v-row>
</template>
<style scoped>

</style>
<script>
import SpreadsheetHelper from '@/helpers/spreadsheethelper';
import Category from '@/components/Category';
export default {
    name: "Delivery",
    components: {
        Category
    },
    data: () => ({
        categories: null,
    }),
    mounted: function() {
         SpreadsheetHelper.loadData().then((categories) => {
            this.categories = categories;
        });
    },
}
</script>