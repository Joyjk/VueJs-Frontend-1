<template>
    <div>
        <h1>Product Details</h1>
        <!-- <h3>From route product id: {{this.productId}}</h3> -->
        <hr>
        <div>
                <h3>Product Name:{{this.list.productName}}</h3>
                <!-- <h3>productId: {{this.list.productId}}</h3> -->
                <h3>Description: {{this.list.description}}</h3>
                <h3>Category : {{this.list.categoryName}}</h3>
                <!-- <h3>categoryId: {{this.list.categoryId}}</h3> -->
                <!-- <h3>buying_Price: {{this.list.buying_Price}}</h3> -->
                <h3>Available quantity: {{this.list.quantity}}</h3>
                <h3>Price : ${{this.list.selling_Price}}</h3>
                
                <!-- <h3>picture: {{this.list.picture}}</h3> -->
                
        </div>


        <div v-if="!isLoggedIn">
            <h4><em><b>Please Login or register to buy Product</b></em></h4>
            <router-link to="/login">Login</router-link>
        </div>
            <br>
            

        <div v-if="isLoggedIn">
            
            <form @submit.prevent="handleSubmit">
                <input type="tel"  v-model="quantity"/>
                <br>
                <span v-if="errStatus" style="color:red">{{errMsg}}</span>
                <br>
                <input type="submit" name="" />
            </form>
        </div>



    </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios,axios)

export default {
    name:'SingleProduct',
    data(){
        return{
                productId: this.$route.params.id,
                list:'',
                quantity:undefined,
                customerId:this.$store.state.username,

                errMsg:'',
                errStatus:Boolean,
                token:this.$store.state.token
        }
    },
     mounted(){
        Vue.axios.get("http://localhost:2293/api/Home/Products/"+this.productId)
        .then((resp)=>{
            this.list=resp.data;
            console.warn(resp.data)
        })
    },
    methods:{
        handleSubmit(){
            const addToCartData = {
                customerId:this.customerId,
                productId:this.list.productId,
                quantity:this.quantity,
                price_Unit_: this.list.selling_Price
            }

            if(addToCartData.quantity>0&&addToCartData.quantity<this.list.quantity)
            {
                this.errMsg =""
                this.errStatus=false
                console.log(addToCartData)



                



            axios.post('http://localhost:2293/api/Cart/AddToCart',addToCartData,{
                     headers: {
                            'Authorization': `Basic ${this.token}` 
                            }
               })
             .then(
                 res=>{
                     
                     console.log(res);

                     
                    this.$router.push('/')
                 }
             ).catch(
                err=>{
                   console.log("Api Error: "+err)
                }
             )





               
            }
            else
            {
                this.errStatus=true
                this.errMsg = "Quantity cannot be zero or Negative or beyond limit:"+this.list.quantity
            }


            




        }
    },
    computed:{
      isLoggedIn(){
      return  this.$store.getters.loggedIn;
    }
  }

}
</script>