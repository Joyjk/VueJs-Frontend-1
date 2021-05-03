<template>
     <div>
  <b-card
    no-body
    style="max-width: 20rem;"
    img-src="https://placekitten.com/380/200"
    img-alt="Image"
    img-top
   
  >
    
     <!-- <img :src="require('/I:/ASP Practice/'+picture+'')" alt="img"> -->

    <b-card-body>
      <b-card-title>{{productName}}</b-card-title>
      
      <b-card-text>
        {{description}}
      </b-card-text>
    </b-card-body>

      <b-list-group flush>
      
      <b-list-group-item>$ {{selling_Price}}</b-list-group-item>
     </b-list-group>

    

    

    <b-card-footer>
         <!-- <a href="#" class="card-link">Buy now</a> -->
         <router-link :to="'/singleproduct/'+productId">Buy now </router-link>
    </b-card-footer>

    
  </b-card>
</div>
</template>

<script>
export default {
    name:'Card',
    props:['productName','description','selling_Price','productId','picture']
}
</script>