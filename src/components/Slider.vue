<template>
    <div class="row mt-5">
        <div class="col-md-3">
            <ul class="list-group">
                <li
                class="list-group-item rounded-0"
                v-for="subcat in subcats" :key="subcat.id"
                >
                <router-link :to="'/products/pbs/'+ subcat._id ">{{subcat.name}}</router-link>
                
                </li>
      </ul>
        </div>
        <div class="col-md-9">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item" v-for="(cat,index) in cats" :key="cat.id" :class="{ active : index ===0}">
                <img :src="assetUrl+cat.image" style="max-height:450px" class="d-block w-100" alt="">

                <div class="carousel-caption d-none d-md-block">
                    <router-link :to="'/products/pbc/'+ cat._id ">{{cat.name}}</router-link>
                </div>



                </div>    
                
            </div>
</div>
        </div>

    </div>
</template>
<script>
import mixins from '../mixins/mixins';
export default{
    mixins :[mixins],
    props :["cats","subcats"],
    data(){
        return {
            assetUrl :this.$assetUrl
        }
    }
//     data(){
//    return {
//     subcats : []
//    }
//   },  
//   async beforeMount(){
//     let data = await this.loadData("subcategories");
//     this.subcats = data.result;
//     // console.log( this.cats);
    
//   }

}
</script>