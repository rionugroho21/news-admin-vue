<template>
    <div class="col-lg-4">
        <div class="card">
            <div class="card-header">
                <strong>Tambahkan </strong>Data
            </div>
            <div class="card-body card-block">
                <form v-on:submit="handleSubmit">
                    <div class="form-group">
                        <label for="nf-image" class="form-control-label">Image</label>
                        <input v-model="imageLink" type="text" id="nf-image" name="imageLink" placeholder="" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="nf-title" class="form-control-label">Title</label>
                        <input v-model="title" type="text" id="nf-title" name="title" placeholder="" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="nf-cat" class="form-control-label">Category</label>
                        <select id="nf-cat" class="form-control option-category" v-model="category" name="category" value="">
                            <option>Technology</option>
                            <option>Sport</option>
                            <option>Auto</option>
                            <option>Business</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="nf-content" class="form-control-label">Content</label>
                        <input v-model="content" type="text" id="nf-content" name="content" placeholder="" class="form-control" />
                    </div>
                    <button type="submit" class="btn btn-primary btn-sm">
                        <i class="fa fa-dot-circle-o"></i> Tambah
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'; 

export default {
    name: 'Add',
    data() {
        return{
            id: Number(new Date()),
            imageLink: "",
            title: "",
            category: "",
            content: ""
        }
    },
    handleSubmit(event){
        event.preventDefault();
        const formData = {
            id: this.id,
            imageLink: this.imageLink,
            title: this.title,
            category: this.category,
            content: this.content
        }
        axios.post('https://news.firebaseio.com/users.json', formData)
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }
}
</script>

<style>

</style>