<template>
    <div>
        <h3><b>Order Details</b></h3>
        

        <!-- <button @click="handleClick">Click</button> -->

        <div style="" ref="content">
                
        <h1 style="margin-left:90px;">DayTide</h1>
        <h3 style="margin-left:90px;">Contact</h3>
        <h5 style="margin-left:90px;">Phone: 01851048555</h5>
        <h5 style="margin-left:90px;">Email: krmkrjoy@gmail.com</h5>
        <h5 style="margin-left:90px;">Address: Mohammadpur, Dhaka-1207</h5>

        <br>
        

        <table border="1" style="margin-left:150px; margin-right:70px">
            <tr>
                <th>Order Id</th>
                <th>Customer Id</th>
                <th>Date</th>
                <th>Product Id</th>
                <th>Product Name</th>
                <th>Quantiry</th>
                <th>District</th>
                <th>Address</th>
                <th>Payment Type</th>
                <th>Price</th>
                <th>Total Amount</th>
                
            </tr>
             <tr v-for="item in list" v-bind:key="item.id">
                <td>{{item.orderId}}</td>
                <td>{{item.customerId}}</td>
                <td>{{item.date}}</td>
                <td>{{item.productId}}</td>
                <td>{{item.productName}}</td>
                <td>{{item.quantiry}}</td>
                <td>{{item.district}}</td>
                <td>{{item.address}}</td>
                <td>{{item.payment_Type}}</td>
                <td>{{item.price}}</td>
                <td>{{item.amount}} </td>
             </tr>

        </table>
        </div>
        <br>
        <br>

        <button @click="downloadPdf">Download recipet</button>



    </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

import { jsPDF } from "jspdf"

Vue.use(VueAxios,axios)



export default {
    name:'OrderDetails',
    data(){
        return{
           
            list:undefined,
            allDatass : {
                     
                    customerId:this.$store.state.username,
                    orderId: parseInt(this.$route.params.id)
            },
            token:this.$store.state.token,
        }
    },
     mounted(){

           

        console.log(this.allDatass)

        Vue.axios.post("http://localhost:2293/api/Home/OrderDetails",this.allDatass,{
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
    methods:{
        handleClick(){
                 // const allDatass = {
            //     customerId: this.customerId,
            //     orderId:this.orderId
            // }

            console.log(this.allDatass)
        },
        downloadPdf(){
            //alert('Hi')
            var doc = new jsPDF("landscape","pt","a3");

            var html = this.$refs.content.innerHTML

          

            doc.html(html,{
                callback: function (doc) {
                    
                doc.save("Products.pdf");
                }
            })


            



        }

    }
}
</script>