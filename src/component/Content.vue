<template>
    <div class="animated fadeIn">
        <div class="row"> 
            <Item v-for="item in data" :key="item.id" v-bind:id="item.id" v-bind:imageLink="item.imageLink" v-bind:title="item.title" v-bind:category="item.category" v-bind:content="item.content"/>
        </div>
    </div>
</template>

<script>
import Item from './Item'

export default {
    name: 'Content',
    components: {
        Item
    },
    mounted() {
        this.loadData();
    },
    methods: {
        loadData() {
            this.$store.dispatch("loadData");
        }
    },
    computed: {
        data() {
            return this.$store.state.data;
        }
    }
}
</script>

<style>

</style>