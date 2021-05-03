<template>
    <div>
            <!-- <h1>This is home route</h1> -->
            <b  v-if="isLoggedIn" style="float:right;margin-right:20px">Customer ID: {{this.$store.getters.getUserName}}</b>
            <!-- <h3><em>The User Token Vuex: {{this.$store.getters.getAccessToken}}</em></h3> -->

                    <br>
                    <br>
                    
                <input type="text" v-model="search" placeholder="Search" name="" />
                <b-button  to="/top" style="margin-left:70px" variant="outline-primary">Top Products</b-button >
                <br>
                <br>
            <b-container>
                <b-row align-v="center">
                    
                   <Card v-for="items in filterData" v-bind:key="items.productId"  :picture="items.picture" :productId="items.productId" :selling_Price="items.selling_Price" :description="items.description" :productName="items.productName"></Card>
                    

                </b-row>
            </b-container>
    </div>
</template>

<script>

import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Card from './Card';

Vue.use(VueAxios,axios)



export default {
    name:'Home',
    components:{
        Card
    },
    data(){
        return{
            list2:[],
            token:this.$store.state.token,
            search:''
        }
    },
    mounted(){
        Vue.axios.get("http://localhost:2293/api/Home/Products/",{
            headers: {
                         'Authorization': `Basic ${this.token}` 
                      }
        })
        .then((resp)=>{
            this.list2=resp.data;
            console.warn(resp)
        })
    },
    computed:{
       
        filterData(){
      if(this.search){
      return this.list2.filter((item)=>{
        return this.search.toLowerCase().split(' ').every(v => item.productName.toLowerCase().includes(v))
      })
      }else{
        return this.list2;
      }
    },
      isLoggedIn(){
      return  this.$store.getters.loggedIn;
    }

    }
}
</script>