<template>
    <div v-if="loaded">
 <Slider :cats = "cats" :subcats = "subcats"/>

 <div v-for="tag in tags" :key="tag.id">
      <h2>
        <span>{{ tag.name }}</span>
       <router-link :to="'/products/pbt/'+ tag._id " class="float-end">All Tag</router-link>
     
      </h2>
      <div class="row">
        <div
          class="col-md-3"
          v-for="product in tag.products"
          :key="product.created"
        >
          <div class="card">
            <span  v-if ="product.images.length > 0">  
             
            <!-- <img
               :src="assetUrl + product.images.toString().split(',')[0]"
              class="card-img-top"
              alt=" "
              style="max-height: 150px"
             /> -->
            </span>
            <!-- <span v-else><img
               src="http://localhost:3000/uploads/1668925447081_CBE1.png"
              class="card-img-top"
              alt=" "
              style="max-height: 150px"
             /></span> -->
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">{{ product.description }}</p>
              <a href="#" class="btn btn-primary">ADD TO CART</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="d-flex justify-content-md-center align-items-center vh-100">
    <div class="loader"></div>
  </div>
</template>

<script>
import mixins from "../mixins/mixins.js"
import Slider from "../components/Slider.vue"
export default {
  mixins : [mixins],
  components : {Slider},
  data(){
    return {
      cats :[],
      subcats :[],
      tags :[],
      assetUrl : this.$assetUrl,
      loaded:false
    }
  },
  async beforeMount(){
    this.cats = await this.loadData(this.$baseUrl +"categories");
    this.subcats = await this.loadData(this.$baseUrl +"subcategories");
    this.tags = await this.loadData(this.$baseUrl +"tags");

  for(let tag of this.tags){
        let send = await this.loadData(this.$baseUrl +"products/pbt/" + tag._id );
        //let response = await this.loadDataAll(send);
        tag.products = send.result;
        //let aa = await this.loadData(this.$baseUrl +"products/pbt/" + tag._id );
        
      
    }
    this.loaded = true;
  }

}
</script>

<style scoped>
  .loader{
    width:120px;
    height:120px;
    border:16px solid rgb(92, 218, 201);
    border-radius:50%;
    border-top:16px solid rgb(196, 219, 90);
    animation: spinner 1s linear infinite;
  }
  @keyframes spinner {
    0%{
      transform:rotate(0deg);
    }
    100%{
      transform:rotate(360deg);
    }
  }
</style>