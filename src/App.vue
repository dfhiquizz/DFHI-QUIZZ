<script setup>
import WelcomePage from "./components/WelcomePage.vue";
import QuizFooter from "./components/QuizFooter.vue";
</script>

<template>
  <div id="wrap">
    <WelcomePage/>
    <QuizFooter />
  </div>
</template>

<style lang="scss" scoped>
  #wrap {
    display: flex;
    flex-direction: column;
    
    width: 92%;
    margin: 0px auto;
    position: relative;
    top: 0;
    left: 0;
    background: url(/src/assets/bg1.jpg) no-repeat left top #173d7b;
    background-size: cover;
    
    border-radius: 15px;
    
  }

  @media (max-width: 320px) {
    #wrap{
      width: 320px;
    }
  }

  /* 
   Most of the Smartphones Mobiles (Portrait)
  
*/

@media (min-width: 320px) and (max-width: 480px) {}

/* 
  Low Resolution Tablets, Mobiles (Landscape)
  
*/

@media (min-width: 481px) and (max-width: 767px) {}

/* 
  Tablets, Ipads (landscape)

*/
@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {}

/* 
 Tablets, Ipads (portrait)
 
*/
@media (min-width: 768px) and (max-width: 1024px) {}

/* 
   Laptops, Desktops
 
*/

@media (min-width: 1025px) and (max-width: 1280px) {
  #wrap{

  width: 96%;
  }
}



/* 
   Desktops
*/

@media (min-width: 1281px) {} 
</style>
