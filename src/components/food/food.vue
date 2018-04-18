<template>
<transition name="move">
  <div class="food1" v-show="showFlag" >
     <div class="food-content">
         <div class="image-header">
             <img :src="food.image" >
             <div class="back" @click="hide">
              <i class="icon-arrow_lift"></i>
              </div>
         </div>
         <div class="content">
             <h1 class="title">{{food.name}}</h1>
             <div class="detail">
                 <span class="sell-count">月售{{food.sellCount}}份</span>
                 <span class="rating">好评率{{food.rating}}%</span>
             </div>
             <div class="price">
                 <span class="now">￥{{food.price}}</span>
                 <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
             </div>
             <div class="carcontrol-wrapper">
             <carcontrol :food="food"></carcontrol>
         </div>
         <div @click.stop.prevent="addFirst" class="buy" v-show="!food.count||food.count===0">
            加入购物车
         </div>
         </div>   
         <split v-show="food.info"></split>
         <div class="info" v-show="food.info">
             <h1 class="title">商品信息</h1>
             <p class="text">{{food.info}}</p>
         </div>
         <split></split>
         <div class="rating">
             <h1 class="title">商品评价</h1>
             <ratingselect v-on:ratingtypeselect="showtype" v-on:contenttoggle="showcontent"  :select-type="selectType" :only-content="onlyContent" :desc="desc" :ratings="food.ratings"></ratingselect>
             <div class="rating-wrapper">
                 <ul  v-show="food.ratings && food.ratings.length">
                     <li  v-show="needShow(rating.rateType,rating.text)" class="rating-item border-1px" v-for="rating in food.ratings">
                         <div class="user">
                             <span class="name">{{rating.username}}</span>
                             <img  class="avatar" :src="rating.avatar" width="12"  height="12">
                         </div>
                         <div class="time">{{rating.rateTime | formatDate}}</div>
                         <p class="text">
                             <span :class="{'icon-thumb_up':rating.rateType===0,'icon-thumb_down':rating.rateType===1}"></span>
                             {{rating.text}}
                         </p>
                     </li>
                 </ul>
                 <div class="no-rating" v-show="!food.ratings ||!food.ratings.length">
                     暂无评价
                 </div>
             </div>
         </div>
     </div>

  </div>
  </transition>
</template>

<script>
import BScroll from 'better-scroll';
import carcontrol from '@/components/carcontrol/carcontrol';
import Vue from 'vue';
import {formatDate} from '../../common/js/date.js';
import split from '@/components/split/split';
import ratingselect from '@/components/ratingselect/ratingselect';

const ALL = 2;




    export default{
        components:{
            carcontrol,
            split,
            ratingselect
        },
        data(){
            return {
            showFlag:false,
            selectType:ALL,
            onlyContent:false,
            desc:{  
                all:'全部',
                positive:'推荐',
                negative:'吐槽'
            }

            }
        },
props:['food'],
filters:{
   formatDate:function(time){
      let date = new Date(time);
      return formatDate(date,'yyyy-MM-dd hh:mm')
   }
},
methods:{
    showcontent:function(data){
      this.onlyContent = data;
      this.$nextTick(()=>{
      this.scroll.refresh();

      })
    },
    showtype:function(data){
        this.selectType = data;
        this.$nextTick(()=>{
      this.scroll.refresh();

      })
    },
    needShow(type,text){
       if(this.onlyContent && !text){
        return false;
       }  
       if(this.selectType===ALL){
           return true;
       }else{
           return type ===this.selectType;
       }
    },
    addFirst(event){
   if(event._countructed){
       return;
   }
   Vue.set(this.food,'count',1)
    },
    show(type,onlycontent){
        // console.log('show');
        let Show = document.getElementsByClassName('food1')[0];
        this.showFlag = true;
        this.selectType = ALL;
        this.onlyConten = false;
        this.$nextTick(()=>{
            if(!this.scroll){
              this.scroll = new BScroll(Show,{
                  click:true
              });
            }else{
                this.scroll.refresh();
            };
        });
    },
    hide(){
        this.showFlag = false;
    }
}
    }
</script>
<style lang="stylus" red="stylesheet/stylus">
@import '../../common/stylus/mixin.styl'
 .food1 
   position:fixed
   left 0
   top 0
   bottom 48px
   z-index 30
   width 100%
   background #fff
   &.move-enter-active 
     transition: all .7s 
   &.move-leave-active 
     transition: all .5s 
   &.move-enter,&.move-leave-to
     transform: translateX(100%)
     opacity: 0
   
   .image-header
     position relative
     width 100%
     height 0
     padding-bottom 100%
     img
       position absolute
       top 0
       left 0
       height 100%
       width 100%
     .back
       position absolute
       top 10px
       left 0
       .icon-arrow_lift
         display block
         padding 12px
         font-size 20px
         color #fff
   .content
     position relative
     padding 18px
     .title
        font-size 14px
        line-height 14px
        margin-bottom 8px
        font-weight 700
        conlor rgb(7,17,27)
     .detail
        line-height 10px
        height 10px
        margin-bottom 18px
        font-size 0
        .sell-count, .rating
            font-size 10px
            color rgb(147,153,159)
        .sell-count
            margin-right 12px
     .price
         font-weight :700
         line-height :24px
         .now
           margin-right :8px
           font-size 14px
           color:rgb(240,20,20)
         .old
           font-size :10px
           text-decoration:line-through
           color:rgb(147,153,159)
     .carcontrol-wrapper
         position absolute
         right 12px
         bottom 12px
     .buy
         position absolute
         right 18px
         bottom 18px
         z-index 10
         height 24px
         line-height 24px
         padding 0 12px 
         box-sizing border-box
         font-size 10px
         border-radius  12px
         color #fff
         background rgb(0,160,220)
   .info
       padding 18px
       .title
           line-height 14px
           margin-bottom 6px
           font-size 14px
           font-weight 700
           color rgb(7,17,27)
       .text
           line-height 24px
           font-size 12px
           padding 0 10px
           font-weight 200
           color rgb(77,85,93)
   .rating
     padding-top 18px
     .title
        line-height 14px
        margin-left 18px
        font-size 14px
        font-weight 700
        color rgb(7,17,27)
     .rating-wrapper
         padding 0 18px
         .rating-item
             position relative
             padding 16px 0
             border-1px(rgba(7,17,27,0.1))
             .user
                 position absolute
                 right 0
                 top 16px
                 font-size 0
                 line-height 12px
                 .name
                   display inline-block
                   font-size 15px
                   margin-right 6px
                   vertical-align top 
                   color rgb(147,153,159)
                 .avatar
                   border-radius 50%
             .time
                 margin-bottom 6px
                 font-size 10px
                 line-height 12px
                 color rgb(147,153,159)
             .text
                 margin-bottom 6px
                 font-size 12px
                 line-height 16px
                 color rgb(7,17,27)
                 .icon-thumb_up, .icon-thumb_down
                   line-height 16px
                   margin-right 4px
                   font-size 12px
                 .icon-thumb_up
                     color rgb(0,160,220)
                 .icon-thumb_down
                     color rgb(147,153,159)
     


</style>

