<script setup>
import WelcomePage from "./components/WelcomePage.vue";
import QuizFooter from "./components/QuizFooter.vue";
</script>

<template>

  <div id="wrap">
    <WelcomePage/>
    <QuizFooter/>
    
  </div>
</template>

<style lang="scss" scoped>
  #wrap {
    height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 0px auto;
    position: relative;
    top: 0;
    left: 0;
    background: url(/src/assets/bg1.jpg) no-repeat left top #173d7b;
    background-size: cover;
    
    border-radius: 15px;
    
  }

  @media (max-width: 320px) {
    #wrap {
      width: 106%;
    }
  
  }

  /* 
   Most of the Smartphones Mobiles (Portrait)
  
*/

@media (min-width: 320px) and (max-width: 480px) {
    #wrap {
      width: 78%;
    }

}

/* 
  Low Resolution Tablets, Mobiles (Landscape)
  
*/

@media (min-width: 480px) and (max-width: 768px) {
    #wrap {
      width: 76%;
    }
}

/* 
  Tablets, Ipads (landscape)

*/
@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    #wrap {
      width: 76%;
    }
}

/* 
 Tablets, Ipads (portrait)
 
*/
@media (min-width: 768px) and (max-width: 1024px) {
    #wrap {
      width: 68%;
    }
}

/* 
   Laptops, Desktops
 
*/

@media (min-width: 1025px) and (max-width: 1280px) {
    #wrap {
      width: 68%;
    }

}



/* 
   Desktops
*/

@media (min-width: 1281px) {
    #wrap {
      width: 56%;
    }
} 
</style>
