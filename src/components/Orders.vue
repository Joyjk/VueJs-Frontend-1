<template>
    <div>
            <h1>Orders</h1>
            <table style="margin:0 auto">
                
                <tr v-for="item in list" v-bind:key="item.orderId">
                    <td>
                         <router-link :to="'/orderdetails/'+item.orderId">Orders: {{item.orderId}} </router-link>
                    </td>
                    <td> &nbsp;&nbsp; || &nbsp;&nbsp; </td>
                    <td>&nbsp;&nbsp;</td>
                    <td>&nbsp;&nbsp; Date: {{item.date}}</td>
                </tr>
            </table>
    </div>
</template>

<script>

import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios,axios)

export default {
    name:'Orders',
    data(){
        return{
            customerId:this.$store.state.username,
            token:this.$store.state.token,
            list:undefined
        }
    },
    mounted(){
        Vue.axios.get("http://localhost:2293/api/Home/orders/"+this.customerId,{
            headers: {
                            'Authorization': `Basic ${this.token}` 
                     }
        })
        .then((resp)=>{
            this.list=resp.data;
            //console.warn(resp.data)
            console.log(this.list)
        })
    },

}
</script>