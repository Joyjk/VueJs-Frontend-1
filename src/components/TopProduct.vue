<template>
    <div>

            <h3>Top Products</h3>
            <b-container>
                <b-row align-v="center">
                    <Card v-for="items in list2" v-bind:key="items.productId" :picture="items.picture" :productId="items.productId" :selling_Price="items.selling_Price" :description="items.description" :productName="items.productName"></Card>
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
    name:'TopProduct',
    data(){
        return{
             list2:[],
            token:this.$store.state.token,

        }
    },
    components:{
            Card
    },
    mounted(){
        Vue.axios.get("http://localhost:2293/api/Home/products/top",{
            headers: {
                         'Authorization': `Basic ${this.token}` 
                      }
        })
        .then((resp)=>{
            this.list2=resp.data;
            console.warn(resp)
        })
    },
}
</script>