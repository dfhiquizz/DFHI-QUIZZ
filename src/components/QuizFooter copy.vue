<!-- mettre les vrais liens , un formulaire de contact
 regler laspect github avec :active et :visited
 posibilites de changer les icones pour que cela soit uniforme sur -
 le passage de la souris-->
<template>
  <div id="footer">
    <div class="links">
      <router-link to="/Essai"> Über uns </router-link> |
      <a href="/" class="active" title="">Github</a> |
      <router-link to="/Essai3"> Datenschutz </router-link> |
      <router-link to="/Essai4"> Kontakt </router-link>

      <div class="socialMedia">
        <p>Folgen Sie uns</p>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              aria-label="Besuchen Sie uns auf Twitter"
              ><img :src="facebookIcon" :title="facebookTitle"
            /></a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              aria-label="Besuchen Sie uns auf Linkedin"
              ><img :src="linkedinIcon" :title="linkedinTitle" />
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              aria-label="Besuchen Sie uns auf Facebook"
              ><img :src="twitterIcon" :title="twitterTitle" />
            </a>
          </li>
        </ul>
      </div>

      <div class="row">
        <div class="horizontal-line">
          <a href="#">
            <img :src="chevronUpIcon" :title="chevronUpTitle" />
          </a>
        </div>
        <div class="copyright">
          Copyright © 2023 DFHI-Quizz . Alle Rechte vorbehalten. Dieses Material
          ist nur für den Bildungsgebrauch bestimmt, sofern nicht anders
          angegeben.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useStore1} from "./../store/index.js"
const name = useStore1() ;
const facebookIcon = name.facebookIcon;

//const facebookIcon = "../src/assets/facebook-svgrepo-com.svg";
const facebookTitle = "Besuchen Sie uns auf Facebook";

const twitterIcon = "../src/assets/twitter-svgrepo-com.svg";
const twitterTitle = "Besuchen Sie uns auf Twitter";

const linkedinIcon = "../src/assets/linkedin-svgrepo-com.svg";
const linkedinTitle = "Besuchen Sie uns auf Linkedin";

const chevronUpIcon = "../src/assets/chevron-up-svgrepo-com.svg";
const chevronUpTitle = "zu Oben";
</script>

<style lang="scss" scoped>
#footer {
  background: #035d86;
  padding: 45px 24px 95px 24px;
  color: #ffffff;
  font-size: 16px;
  border-radius: 0 0 40% 40%;
  .links {
    width: 100%;
    a {
      color: #ffffff;

      .active {
        color: #bbb2b2;
      }
      &:hover {
        color: #e2dada;
      }
    }

    .router-link {
      color: #ffffff;
    }
    .router-link-active {
      color: #bbb2b2;
      font-weight: bold;
    }

    .row {
      max-width: 75rem;
      margin-left: auto;
      margin-right: auto;
      .horizontal-line {
        background: linear-gradient(
          to right,
          rgba(11, 52, 74, 1) 0,
          rgba(235, 241, 246, 1) 51%,
          rgba(11, 52, 74, 1) 100%
        );
        margin: 0.5rem 0;
        height: 1px;
        a {
          display: block;

          font-size: 1.3rem;
          margin: 0 auto;
          transform: translate(0, -8px);
          width: 100px;
          text-align: center;
          text-decoration: none;
          cursor: pointer;
          box-sizing: border-box;
          background-color: #035d86;
          margin-top: 80px;
          img {
            margin-top: -20px;
            opacity: 1;
              &:hover {
                opacity: 0.8;
              }
          }
        }
      }
      .copyright {
        color: #ccc;
        font-weight: 400;
        margin-top: 80px;
      }
    }

    .socialMedia {
      margin-top: -18px;
      float: right;
      text-align: center;
      p {
        padding: 16px 0 10px 0;
      
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        li {
          display: inline-block;

          a {
            margin-left: 0.5em;

            img {
              opacity: 1;
              &:hover {
                opacity: 0.8;
              }
            }
          }
        }
      }
    }
  }
}


</style>
