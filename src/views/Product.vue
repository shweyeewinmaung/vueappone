<template>
    <div class="row my-5" is:true={aa} >
        <div class="col-md-3" v-for=" (product,index) of records" :key="index">
            <div v-if="product">
            <div class="card">
                
                    <!-- <img
                :src="assetUrl + product.images.toString().split(',')[0]"
                class="card-img-top"
                alt=""
                style="max-height: 150px"
                /> -->
               
                <div class="card-body">
                <h5 class="card-title"> {{ product.name}}</h5>
                <p class="card-text"> {{ product.desc}}</p>
                <button href="#" class="btn btn-primary" @click="addToCart(product)">
                    <i class="material-icons">shopping_cart</i>
                </button>
                </div>
            </div>
            </div>
        </div>

    </div>
     
        
        <div class="card-body">
            
            
            
        </div>
        <div class="card-footer pb-0 pt-3"><span :page ="page"></span>
            <pagination :records="recordsLength" v-model="page" :per-page="perPage" @paginate="getPage">
            </pagination> 
        </div>
    
</template>

<script>
 
 import mixins from '../mixins/mixins';
export default { 
   mixins :[mixins],
   data(){
    return{
        name:null,
        id:null,
        assetUrl : this.$assetUrl,     
        page: 1,
        perPage: 2,
        records: [],
        recordsLength: 0,
        products:[],

    }
   },
   methods:{  
    getPage: async function() {  
       
        let url = this.$baseUrl +"products/" + this.name + "/" + this.id;       
        let response = await this.loadData(url);
        this.products = response.result;

        // this.products = response.result;
        // // console.log(this.products);
        // this.records = [];
        // this.perPage = 0;
        // this.perPage = response.perPage;

       // console.log(response.perPage);
        this.records = [];
        
        const startIndex = this.perPage * (this.page - 1) + 1;
        const endIndex = startIndex + this.perPage - 1;

        for (let i = startIndex; i <= endIndex; i++) {
        this.records.push(this.products[i-1]);
        } 
        this.recordsLength = this.products.length;
    },  
    addToCart(product){
        let pds = localStorage.getItem("products");
        let pdsAry = pds ? JSON.parse(pds) : [];
        for(let pd of pdsAry){
            if(pd._id == product._id){
                alert("Item already Exist!!");
            }
        }
        product.count = 1;
        pdsAry.push(product);
        localStorage.setItem("products",JSON.stringify(pdsAry));
        this.$emit("changeProductCount");
    } 
   },
   beforeMount(){
    this.id = this.$route.params.id;
    this.name = this.$route.params.name;
    this.getPage();
     
   }

}
</script>

<style>
 
</style>