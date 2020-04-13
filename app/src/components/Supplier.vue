<template>
    <div>
    <p class="headline text--primary">
        {{supplier.name}}
    </p>
    <p><v-icon v-if="!!supplier.deliveryNotes" color="grey" class="mr-2">mdi-truck-delivery</v-icon>{{supplier.deliveryNotes}}</p>
    <p><v-icon v-if="!!supplier.additionalNotes" color="grey" class="mr-2">mdi-information-outline</v-icon>{{supplier.additionalNotes}}</p>
    <div class="subtitle-1 text--primary mt-5 text-center font-weight-bold">
        {{supplier.location}}
    </div>
    <div class="text-left mt-5" style="position:absolute;bottom:0">
        <div class="text--primary mt-2 pa-0 caption text-truncate">
            <p class="ma-0 pa-0"><v-icon v-if="!!supplier.contact" color="grey" class="mr-2">mdi-phone</v-icon><a :href="'tel:'+supplier.contact" target="_blank">{{supplier.contact}}</a></p>
            <p class="ma-0 pa-0"><v-icon v-if="!!supplier.website" color="grey" class="mr-2">mdi-link</v-icon><a :href="supplier.website" target="_blank">{{supplier.website}}</a></p>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name: "Supplier",    
    props: ['supplier'],
}
</script>
<style scoped>

</style>