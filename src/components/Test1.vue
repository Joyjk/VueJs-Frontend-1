<template>
    <div>
            <h1>Test 1 route</h1>
            <div>
  <b-button>Button</b-button>
  <b-button variant="danger">Button</b-button>
  <b-button variant="success">Button</b-button>
  <b-button variant="outline-primary">Button</b-button>
</div>

<h1 style="color:blue">hello VUEX getters: {{myAppname}}</h1>
<h2><em>{{this.$store.getters.getAppName}}</em></h2>
<br>
<br>
<h3>By variable{{userId}}</h3>
<button @click="myMethod">Click</button>
    </div>
</template>
<script>
export default {
    name:'test1',
    data(){
        return{
            userId:this.$store.getters.getAppName
        }
    },
computed:{
        myAppname(){
            return this.$store.getters.getAppName;
        }
    },
    methods:{
        myMethod()
        {
            console.log(this.userId);
        }
    }



}
</script>