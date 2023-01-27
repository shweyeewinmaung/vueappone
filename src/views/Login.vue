<template>
  <h1 class="text-center text-info my-5">Login Page</h1>
  <div class="col-md-6 offset-md-3">
    <form @submit.prevent="userLogin">
      <div class="mb-3">
        <label for="phone" class="form-label">Phone</label>
        <!-- <input
          type="email"
          class="form-control rounded-0"
          id="email"
          name="email"
          required
          v-model="userCreditial.email"
          @input="emailFileChange"
        /> -->
        <input
          type="tel"
          class="form-control rounded-0"
          id="phone"
          name="phone"
          required
          v-model="userCreditial.phone"
          
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          class="form-control rounded-0"
          id="password"
          name="password"
          v-model="userCreditial.password"
          required
         
        
        />
      </div>
      <button type="submit" class="btn btn-sm btn-primary float-end">
        Login
      </button>
    </form>
  </div>
</template>

<script>
import mixins from "../mixins/mixins"
export default {
   mixins :[mixins],
   props :['logged'],
   data(){
     return {
      userCreditial :{
        phone:"",
        password:""
        // phone:"09100100100",
        // password:"123456"
      }
     }
   },
   methods :{
    // phoneFileChange(){
    //   console.log(this.userCreditial.phone);
    // },
    // passwordFileChange(){
    //   console.log(this.userCreditial.password);
    // },
    async userLogin(){
       
      let url = this.$baseUrl+"users";
      let responseData = await this.sendData(url,this.userCreditial);
     
      if(responseData.con){
        localStorage.setItem("token",responseData.result.token);
        this.$emit("changeloginstatus",true);
        this.$router.push({"name" :"home"});
      }else{
        alert(responseData.msg);
      }
       //console.log(responseData.result.token);
    }
    
   }
}

// pattern="^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$"
//               oninvalid="this.setCustomValidity(`
//           Password မှာ အနည်းဆုံး Number တစ်လုံး
//           Special Character တစ်လုံး
//           Small Latter တစ်လုံး
//           Capital Latter တစ်လုံး
//           အနည်းဆုံး ၈ လုံး ဖြစ်ရမယ်
//           `)"
//               oninput="this.setCustomValidity('')"    
</script>

<style>

</style>