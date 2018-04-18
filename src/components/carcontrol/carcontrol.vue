<template>
  <div class="carcontrol">
     <transition name="slide-fade">
       <div class="carDec icon-remove_circle_outline" @click.stop="decCar" v-show="food.count>0"></div>
      
     </transition>
       <div class="carCou"  v-show="food.count>0">{{food.count}}</div>
      <div class="carAdd icon-add_circle" @click.stop="addCar"></div>
  </div>
</template>
<script>
import Vue from 'vue'
    export default {
       props:{
           food:{
               type:Object
           }
       },
       methods:{
           addCar(){
               if(!this.food.count){
                   Vue.set(this.food,'count',1)
               }else{
                    this.food.count++;
               }
           },
           decCar(){
               if(this.food.count){
                   this.food.count--;
               }
           }
       }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.carcontrol
  font-size 0
  .slide-fade-enter-active
    transition all .5s ease
  .slide-fade-leave-active
    transition all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0)
  .slide-fade-enter, .slide-fade-leave-to
    transform: translateX(10px);
    opacity: 0;
  .carDec
    display inline-block
    padding 6px
    font-size 24px
    line-height 24px
    color rgb(0,160,220)
  .carCou
    display inline-block
    vertical-align top
    width 12px
    padding-top 6px
    line-height 24px
    font-size 10px
    text-align center
    color grb(147,153,159)
  .carAdd
    display inline-block
    padding 6px
    font-size 24px
    line-height 24px
    color rgb(0,160,220)
  
    
</style>
