<template>
  <div id="app">
    <sHeader :seller="seller"></sHeader>
    <div class="tab border-1px">
    <div class="tab-item">
      <router-link to="/goods">商品</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/ratings">评论</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/seller">卖家</router-link>
    </div>
    </div>
    <keep-alive>
        <router-view :seller="seller" ></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import sHeader from '@/components/header/header.vue';
  import {urlParse} from './common/js/getSellerId.js';
  const ERR_OK= 0;
  export default {
    name: 'App',
    data() {
      return {
        seller:{ 
          id:(()=>{
            let queryPram = urlParse();
            return queryPram.id;
          })()
        }
      }
    },
    created(){
     this.$http.get('/api/seller?id='+this.seller.id).then((response)=>{
      response = response.body;
       if(response.errno === ERR_OK ){
        // this.seller = response.data;
        this.seller = Object.assign({},this.seller,response.data);
        console.log(this.seller.id);
       }
     })
  },
    components: {
      sHeader: sHeader
    }
  }

</script>


<style lang="stylus" rel="stylesheet/stylus">
@import './common/stylus/mixin.styl'
   #app
     .tab
       display:-webkit-box
       display: -webkit-flex
       display:flex
       width:100%
       height:40px
       line-height:40px
       border-1px(rgba(7,17,27,.1))
       .tab-item
         -webkit-box-flex:1
         -webkit-flex:1
         flex:1
         text-align :center
         & >a
           display:block
           font-size :14px
           line-height :40px
           color:rgb(77,85,93)
           &.active
             color:rgb(240,20,20)

</style>
