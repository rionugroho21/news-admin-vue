<template>
    <div class="col-lg-4">
        <div class="card">
            <div class="card-header">
                <strong>Id :</strong> {{id}}
            </div>
            <div class="card-body card-block">
                <form v-on:submit="handleSubmit">
                    <input type="hidden" name="id" value=""/>
                    <div class="form-group">
                        <label for="nf-image" class=" form-control-label">Image</label>
                        <input type="text" id="nf-image" name="imageLink" class="form-control" v-model="imageLink"/>
                    </div>
                    <div class="form-group">
                        <label for="nf-title" class=" form-control-label">Title</label>
                        <input type="text" id="nf-title" name="title" class="form-control" v-model="title"/>
                    </div>
                    <div class="form-group">
                        <label for="nf-cat" class=" form-control-label">Category</label>
                        <!-- <select id="nf-cat" class="form-control option-category" name="category" v-bind:value="category">
                            <option>Test</option>
                            <option>Test</option>
                            <option>Test</option>
                        </select> -->
                        <input type="text" id="nf-category" name="category" class="form-control" v-model="category"/>
                    </div>
                    <div class="form-group">
                        <label for="nf-content" class=" form-control-label">Content</label>
                        <input type="text" id="nf-content" name="content" class="form-control" v-model="content"/>
                    </div>
                    <button type="submit" class="btn btn-primary btn-sm">
                        <i class="fa fa-dot-circle-o"></i> Simpan
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
//import {startEditingDatas} from '../service/service'

export default {
    name: 'Edit',
    data() {
        return {
            id: this.$route.params.id,
            imageLink: this.$route.params.imageLink,
            title: this.$route.params.title,
            category: this.$route.params.category,
            content: this.$route.params.content
        }
    },
    methods: {
        handleSubmit(event){
            event.preventDefault();
            const formData = {
                id: this.id,
                imageLink: this.imageLink,
                title: this.title,
                category: this.category,
                content: this.content
            }
            this.$store.dispatch("editData", formData);
            this.$router.push('/');
        }
    }
}
</script>

<style>

</style>