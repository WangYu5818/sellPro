<template>
  <div class="shopcar">
      <div class="content" @click="toggleList">
          <div class="content-left">
              <div class="logo-wrapper">
                  <div class="log" :class="{'highlight':totalCount>0}">
                      <span class="icon-shopping_cart" :class="{'highlight':totalCount>0}"></span>
                  </div>
                  <div class="num" v-show="totalCount>0">{{totalCount}}</div>
              </div>
              <div class="price" :class="{'highlight':totalPrice>0}">￥{{totalPrice}}</div>
              <div class="desc"> 另需配送费 {{deliveryprice}} 元 </div>
          </div>
          <div class="content-right" @click.stop="pay">
              <div class="pay" :class="payClass">
                  {{payDesc}}
              </div>
          </div>
      </div>
      <!-- ball -->
      <div class="ball-container">

      </div>
    
       <transition name="fold">

      <div class="shopcar-list" v-show="listShow" >
          <div class="list-header">
              <h1 class="title">购物车</h1>
              <span class="empty" @click="empty">清空</span>
          </div>
          <div class="list-content">
              <ul>
                  <li class="food" v-for="food in selectFoods">
                      <span class="name">{{food.name}}</span>
                      <div class="price">
                          <span>￥{{food.price*food.count}}</span>
                      </div>
                      <div class="carcontrol-wrapper">
                         <carcontrol :food="food"></carcontrol>
                      </div>
                  </li>
              </ul>
          </div>
      </div>
      </transition>
      <transition name="fade">
        <div class="list-mask" @click="hideList" v-show="listShow" transition="fade"></div>
      </transition>
  </div>
</template>
<script>
import carcontrol from '@/components/carcontrol/carcontrol';
import Vue from 'vue'
import BScroll from 'better-scroll';
export default {
        components:{
            carcontrol:carcontrol
        },
        data(){
           return{
               fold:true
           }
        },
        props:{
            selectFoods:{
                 type:Array,
                 default(){
                     return [];
                 }
            },
            deliveryprice:{
                type:Number,
                default:0
            },
            minprice:{
                type:Number,
                default:0
            }
        },
        methods:{
            pay(){
                if(this.totalPrice<this.minprice){
                    return
                }
                window.alert(`需要支付${this.totalPrice}元`)
            },
            hideList(){
                this.fold = true;
            },
            empty(){
                this.selectFoods.forEach((food)=>{
                            food.count = 0
                })
            },
            toggleList(){
                if(!this.totalCount){
                    return;
                }
                this.fold = !this.fold;
            }
        }
        ,
        computed:{
            listShow(){
                if(this.totalCount===0){
                    this.fold = true;
                    return false;
                }
                let show = !this.fold;
                if(show){
                    this.$nextTick(()=>{
                        let listContent = document.getElementsByClassName("list-content")[0];
                        
                        if(!this.scroll){
                       this.scroll = new BScroll(listContent,{
                          click:true
                       })
                       }else{
                           this.scroll.refresh();
                       }
                    })
                }
                return show;
            },
            totalPrice(){
                let total = 0;
                this.selectFoods.forEach((food)=>{
                    total += food.price*food.count;
                });
                return total
            },
            totalCount(){
             let count = 0;
             this.selectFoods.forEach((food)=>{
                 count += food.count;
             });
             return count;
            },
            payDesc(){
                if(this.totalPrice===0){
                    return `￥${this.minprice}元起送`;
                }else if(this.totalPrice < this.minprice){
                    let diff = this.minprice-this.totalPrice;
                    return `还差${diff}元起送`
                }else{
                    return '去结算'
                }
            },
            payClass(){
                if(this.totalPrice<this.minprice){
                    return 'notenough'
                }else{
                    return 'enough'
                }
            }
            
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
 @import "../../common/stylus/mixin.styl";
 .shopcar
   z-index 50
   .slide-fade-enter-active transition all .3s ease
   .slide-fade-leave-active transition all .8s 
   .slide-fade-enter, .slide-fade-leave-to
      transform translateX(10px)
      opacity 0
   position:fixed
   left :0
   bottom :0
   width 100%
   height 48px
   .content
     display:flex
     background: #141d27
     font-size: 0
     .content-left
       flex: 1
       .logo-wrapper
           display :inline-block
           position: relative
           top: -10px
           margin: 0 12px
           padding: 6px
           width: 56px
           height: 56px
           box-sizing: border-box
           vertical-align: top
           border-radius: 50%
           background: #141d27
           .log
             width 100%
             height 100%
             text-align center
             border-radius 50%
             background #2b343c
             &.highlight
               background rgb(0,160,220)
             .icon-shopping_cart
               color #80858a
               font-size 24px
               line-height 44px
               text-align center
               &.highlight
                 color #fff
           .num
             position absolute
             top 0
             right 0
             width 24px
             height 16px
             line-height 16px
             text-align center
             border-radius 16px
             font-size 9px
             font-weight 700
             color #fff
             background rgb(240,20,20)
             box-shadow 0 4px 8px 0 rgba(0,0,0,0.4)

       .price
           display:inline-block
           font-size 16px
           margin-top 12px
           font-weight 700
           line-height 24px
           vertical-align top
           padding-right 12px
           box-sizing border-box
           border-right 1px solid rgba(255,255,255,0.1)
           color rgba(255,255,255,0.4)
           &.highlight
             color white
       .desc
           display:inline-block
           vertical-align top
           line-height 24px
           margin 12px 0 0 12px
           color rgba(255,255,255,0.4)
           font-size 14px
     .content-right
       flex 0 0 105px
       width 105px
       .pay
         line-height 48px
         height 48px
         text-align center
         color  rgba(255,255,255,0.4)
         font-size 12px
         font-weight 700
         background #2b333b
         &.notenough
           background #2b333b
         &.enough
           background #00b43c
           color #fff
   .shopcar-list
     position absolute
     top -217px
     left 0
     z-index -1
     width 100%
     height 250px
     background #fff
     &.fold-enter-active 
       transition: all 1s 
     &.fold-leave-active 
       transition: all 1s 
     &.fold-enter 
       transform: translateY(217px)
     &.fold-leave-to 
       transform: translateY(217px)
     .list-header
       height 40px
       background #f3f5f7
       line-height 40px
       padding 0 18px
       border-bottom 1px solid rgba(7,17,27,0.1)
       .title
         float left 
         font-size 14px
         color rgb(7,17,27)
       .empty
         float right
         font-size 12px
         color rgb(0,160,220)
     .list-content
        padding 0 18px
        max-height 217px
        background #ffffff
        overflow hidden 
        .food
          position relative
          padding 12px 0
          box-sizing border-box
          border-1px(rgba(7,17,27,0.1))
          .name
            line-height 24px
            font-size 14px
            color rgb(7,17,27)
          .price
            position absolute
            right 100px
            bottom 12px 
            line-height 24px
            font-size 14px
            color rgb(240,20,20)
            font-weight 800
          .carcontrol-wrapper
            position absolute
            right 0
            bottom 6px
   .list-mask
       position fixed
       top 0
       left 0
       width  100%
       height 100%
       z-index -2
       background rgba(7,17,27,0.7)
     &.fade-enter-active 
       transition: all 1s 
     &.fade-leave-active 
       transition: all 1s 
     &.fade-enter 
       transform: translateY(100%)
       opacity 1
     &.fade-leave-to 
       transform: translateY(100%)
       opacity 0       
       
     
</style>



