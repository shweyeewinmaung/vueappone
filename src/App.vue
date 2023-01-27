<template>
    <Nav :logged ="logged" @changeloginstatus = 'LoginStatusChange'  :cartCount='cartCount' /> 
    <div class="container">
      <router-view :logged ="logged" 
      @changeloginstatus = 'LoginStatusChange'
      @changeProductCount = 'changeProductCount'
      /> 
    </div> 
   
</template>

<script>
import Nav from './components/Nav.vue'
export default  {
  components : {Nav},
  data(){
    return{
      logged : false,
      cartCount :0
    }
  },
  methods:{
    LoginStatusChange(data){
      this.logged = data;
     
    },
    changeProductCount(){
      let data = localStorage.getItem("products");
      let ary = data ? JSON.parse(data) : [];
      this.cartCount = ary.length;
      
    }
  },
  beforeMount(){
    let token = localStorage.getItem("token");
    if(token){
      this.logged = true;
    }
    this.changeProductCount();
  } 
}
</script>

 