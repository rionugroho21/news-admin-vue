<template>
    <div class="col-lg-4">
        <div class="card">
            <div class="card-header">
                <strong>Id :</strong> {{id}}
            </div>
            <div class="card-body card-block">
                <form>
                    <div class="row form-group">
                        <div class="col-md-6 offset-md-3" onClick={this.togglePopup}>
                            <img v-bind:src="imageLink" />
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col col-md-3"><label class=" form-control-label">Image</label></div>
                        <div class="col-12 col-md-9">
                            <p class="form-control-static">{{imageLink}}</p>
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col col-md-3"><label class=" form-control-label">Title</label></div>
                        <div class="col-12 col-md-9">
                            <p class="form-control-static">{{title}}</p>
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col col-md-3"><label class=" form-control-label">Category</label></div>
                        <div class="col-12 col-md-9">
                            <p class="form-control-static">{{category}}</p>
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col col-md-3"><label class=" form-control-label">Content</label></div>
                        <div class="col-12 col-md-9">
                            <p class="form-control-static">{{content}}</p>
                        </div>
                    </div>
                </form>
            </div>
            <div class="card-footer">
                <router-link type="submit" class="btn btn-primary btn-sm" :to="{name:'Edit', params:{id:id, imageLink:imageLink, title:title, category:category,content:content}}">
                    <i class="fa fa-dot-circle-o"></i> Edit
                </router-link>
                <button type="reset" class="btn btn-danger btn-sm" @click="deleteItem">
                    <i class="fa fa-ban"></i> Delete
                </button>
            </div>
        </div>
    </div>
</template>

<script>
//import {startRemovingDatas} from '../service/service'

export default {
    name: 'item',
    props: {
        id: Number,
        imageLink: String,
        title: String,
        category: String,
        content: String
    },
    methods: {
        deleteItem(event) {
            event.preventDefault();
            this.$store.dispatch("deleteData", this.id);
            this.$router.push('/');
        }
    },
    computed: {
        data() {
            return this.$store.state.data;
        }   
    }
}
</script>

<style lang="scss">
.card img {
    cursor: pointer;
}
img {
    max-width: 100%;
}
.btn-sm{
    color: #fff !important;
}
.card-footer .btn.btn-danger{
    margin-left: 10px;
}
.card-footer .btn{
    width: 80px;
}
.card img{
    cursor: pointer;
}
</style>