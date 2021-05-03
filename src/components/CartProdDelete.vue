<template>
    <div>
            <h1>Delete product from cart route</h1>
            <h3>From parameter{{this.id}}</h3>
    </div>
</template>

<script>


import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios,axios)





//productdelete
export default {
    name:'CartProdDelete',
    data(){
        return{
            id: parseInt(this.$route.params.id),
            token:this.$store.state.token,
        }
    },

     mounted(){
        Vue.axios.delete("http://localhost:2293/api/cart/"+this.id,{
            headers: {
                            'Authorization': `Basic ${this.token}` 
                     }
        })
        .then((resp)=>{
            //this.list=resp.data;
            //console.warn(resp.data)
            console.log(resp)
            console.log("the Id is: "+this.id)

            this.$router.push('/cart')
        })
    },

}
</script>