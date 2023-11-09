<template>
  <div class="container-about-us">
    <router-link class="homeIcon" to="/AllQuiz">
      <img src="../../src/assets/home.svg" title="to up" />
    </router-link>
    <div class="text-about-us">
      <h1>Über uns</h1>
      <p>
        Ich bin Aboubacar Camara, Student am DFHI-ISFATES. Im Rahmen meiner
        Bachelorarbeit habe ich mich entschlossen, eine DFHI-Quiz-App zu
        entwickeln, mit der man seine verschiedenen Vorlesungen von 6. Semester
        spielerisch wiederholen kann. Wer möchte, kann diese Gelegenheit nutzen,
        um seine Prüfungen zu bestehen.
      </p>
    <h2>Viel spaß beim Spielen .</h2>
    </div>
  </div>
</template>

<script setup>
const homeIcon = "../src/assets/home-house-property-svgrepo-com.svg";
const homeTitle = "to up ";
</script>

<style lang="scss" scoped>
.container-about-us {
  color: #797e8b;
  background-color: #f2f2f2;
  width: 90%;
  height: calc(100vh - 200px);
  margin: 0 auto;
  padding: 0 30px 0 30px;
  overflow: auto;
  .homeIcon {
    display: block;
    text-align: center;
    padding-bottom: 20px;
  }

  h1 {
    text-shadow: 3px 3px 6px #797171;

    display: block;
    text-align: center;
    padding-bottom: 10px;
  }
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px 20px 0px 20px;
    line-height: 28px;

  }
  h2{
    text-shadow: 3px 3px 6px #8aa89d;

    display: block;
    text-align: center;
    padding-top: 88px;
  }
}
</style>
