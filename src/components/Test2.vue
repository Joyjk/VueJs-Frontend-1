<template>
    <div >
            <h1>Test 2 route</h1>

            <div ref="content">
                <table border="1" style="margin-left:70px;margin-right:70px;">
                <tr>
                    <td>Product Id</td>
                    <td>Product Name</td>
                    <td>Quantity</td>
                    <td>Category Id</td>
                    <td>Category Name</td>
                    <td>Description</td>
                    <td>Buying Price</td>
                    <td>Selling Price</td>
                    <td>Picture</td>
                </tr>
                <tr v-for="item in productList" v-bind:key="item.productId">
                    <td>{{item.productId}}</td>
                    <td>{{item.productName}}</td>
                    <td>{{item.quantity}}</td>
                    <td>{{item.categoryId}}</td>
                    <td>{{item.categoryName}}</td>
                    <td>{{item.description}}</td>
                    <td>{{item.buying_Price}}</td>
                    <td>{{item.selling_Price}}</td>
                    <td>{{item.picture}}</td>

                </tr>


                 </table>
            </div>
            <br>
            <br>
            <button @click="downloadPdf">Download</button>


            <br>
            <br>


            <pie-chart></pie-chart>
    </div>
</template>


<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

//import { Doughnut } from "vue-chartjs";

//import jsPdf from 'jspdf'
import { jsPDF } from "jspdf"

Vue.use(VueAxios,axios)


export default {
    name:'test2',
    data(){
        return{
            productList:undefined,
            token:this.$store.state.token
        }
    },
   // extends: Doughnut,
    mounted()
    {
        Vue.axios.get("http://localhost:2293/api/Home/Products/",{
            headers: {
                         'Authorization': `Basic ${this.token}` 
                      }
        })
        .then((resp)=>{
            this.productList=resp.data
            console.warn(resp)
        })


    //     this.renderChart(this.productList.selling_Price, {
    //         borderWidth: "10px",
    //         hoverBackgroundColor: "red",
    //         hoverBorderWidth: "10px"
    // });



    },
    methods:{
        downloadPdf(){
            //alert('Hi')
            var doc = new jsPDF("p","pt","a4");

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

