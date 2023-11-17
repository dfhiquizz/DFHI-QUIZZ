<template>
  <div class="container-contact">
    <div class="infoContact">
      <router-link class="homeIcon" to="/AllQuiz">
        <img src="../../src/assets/home.svg" title="to up" />
      </router-link>
      <h1>Kontakt</h1>
      <h5>
        Sie haben eine Idee, Anregung oder möchten gern ein Feedback mitteilen
        Schicken Sie uns eine Nachricht über folgendes Formular !
      </h5>
    </div>

    <form ref="formRef" @submit.prevent="submit">
      <v-text-field
        variant="solo"
        v-model="name.value.value"
        :counter="10"
        :error-messages="name.errorMessage.value"
        label="Name"
      ></v-text-field>

      <v-text-field
        variant="solo"
        v-model="email.value.value"
        :error-messages="email.errorMessage.value"
        label="E-mail"
      ></v-text-field>

      <v-textarea
        variant="solo"
        v-model="message.value.value"
        :error-messages="message.errorMessage.value"
        :counter="20"
        label="Message"
        maxlength="110"
      ></v-textarea>

      <v-btn class="me-8 btn" type="submit"> submit </v-btn>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useField } from "vee-validate";
const formRef = ref(null);
//const done = ref(Boolean);
const name = useField("name");
//const phone = useField("phone");
const email = useField("email");
const message = useField("message");

const submit = ref(null);
</script>

<style lang="scss" scoped>
.container-contact {
  display: flex;
  flex-direction: column;
  color: #797e8b;
  background-color: #f2f2f2;
  width: 70%;
  // height: calc(100vh - 200px);
  margin: 0 auto;
  padding: 0 30px 0 30px;
  overflow: auto;
  .infoContact {
    display: block;
    text-align: center;
    //letter-spacing: 1px;
    //word-spacing: 2px;
    //line-height: 1.5;
    //display: flex;
    //flex-direction: column;
    // justify-content: center;
    //align-items: center;
    //padding: 20px 40px 0px 40px;

    //line-height: 28px;

    h1 {
      text-shadow: 3px 3px 6px #797171;

      display: block;
      text-align: center;
      padding-bottom: 8px;
    }

    .homeIcon {
      display: block;
      text-align: center;
      //padding-bottom: 20px;
    }
  }
  form {
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;

    background: #f2f2f2;
    margin: auto;
    width: 80%;
    .v-input--horizontal {
      width: 100%;
    }
    .btn {
      margin: 20px;
      cursor: pointer;
      &:hover {
        background-color: #8ecce9 !important;
        h1 {
         // padding-bottom: 30px;
        }
      }
    }
  }
}

@media (max-width: 320px) {
  .container-contact {
  }
}

/* 
   Most of the Smartphones Mobiles (Portrait)
  
*/

@media (min-width: 320px) and (max-width: 480px) {
  .container-contact {
    height: 454px;
    width: 94%;
    font-size: 12px;
    .infoContact {
      h1 {
        //height: 20px;
      }
      .homeIcon {
        padding-bottom: 10px;
      }
    }
  }
}

/* 
  Low Resolution Tablets, Mobiles (Landscape)
  
*/

@media (min-width: 480px) and (max-width: 768px) {
}
/* 
  Tablets, Ipads (landscape)

*/
@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
}

/* 
 Tablets, Ipads (portrait)
 
*/
@media (min-width: 768px) and (max-width: 1024px) {
}

/* 
   Laptops, Desktops
 
*/

@media (min-width: 1024px) and (max-width: 1280px) {
}

/* 
   Desktops
*/

@media (min-width: 1280px) {
}
</style>
