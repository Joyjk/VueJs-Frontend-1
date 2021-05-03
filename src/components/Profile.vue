<template>
    <div>
        <h1>Customer Profile</h1>

        <table style="margin: 0 auto" border="1">
            <tr>
                <td>Customer ID</td>
                <td></td>
                <td>{{list.customerId}}</td>
            </tr>
            <tr>
                <td>Name: </td>
                <td></td>
                <td>  {{list.name}}</td>
            </tr>

            <tr>
                <td>Email:  </td>
                <td></td>
                <td>{{list.email}}</td>
            </tr>
            <tr>
                <td>Phone: </td>
                <td></td>
                <td>{{list.phone}}</td>
            </tr>
            <tr>
                <td>Address</td>
                <td></td>
                <td>{{list.address}}</td>
            </tr>
            <tr>
                
                <td colspan="3">
                    <router-link to="/changepassword">Change Password </router-link>
                </td>
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
    name:'Profile',
    data(){
        return{
            list:undefined,
            token:this.$store.state.token,
            customerId:this.$store.state.username,
            
        }
    },
     mounted(){
        Vue.axios.get("http://localhost:2293/api/customer/"+this.customerId,{
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