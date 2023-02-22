<template>
  <div id="app">
    <h1 class="app__title">
      SEND<br />
      A REQUEST
    </h1>

    <section class="app__content">
      <div class="app__info">
        <p class="app__description">
          Leave your contacts and we will contact you as soon as possible
        </p>
        <img class="app__logo" src="./assets/images/logo.svg" alt="логотип." />
      </div>

      <form class="app__form">
        <input-component :label="'NAME'" :id="'name'" :type="'string'" />
        <input-component :label="'PHONE'" :id="'phone'" :type="'number'" />
        <input-component :label="'TEMP'" :id="'temp'" :type="'range'" />
        <input-component
          :label="'COMMENTS'"
          :id="'comments'"
          :type="'string'"
        />

        <div class="app__form-btn-container">
          <button class="app__form-btn" type="submit">call me</button>
          <p class="app__form-agree-text">
            By pressing “Send” button I agree with
            <span class="app__from-policy">Privacy Policy</span>
          </p>
        </div>
      </form>
    </section>

    <footer class="footer">
      <p class="footer__author">© 2022 LUXURY RESIDENCE</p>
      <a class="footer__policy" href="#">Privacy Policy</a>
    </footer>
  </div>
</template>

<script>
import InputComponent from "./components/InputComponent.vue";
export default {
  comments: { InputComponent },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "GHEA Grapalat";
}

@font-face {
  font-family: "GHEA Mariam";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("./assets/fonts/GHEAMariamReg.otf") format("opentype");
}

@font-face {
  font-family: "GHEA Grapalat";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("./assets/fonts/GHEAGrpalatReg.otf") format("opentype");
}

#app {
  max-width: 1920px;
  width: 100%;
  background: #21354b;
  padding: 56px 90px 80px;
  color: #eeebe6;
  min-height: 100vh;
  position: relative;
}

.app__title {
  font-family: "GHEA Mariam";
  font-style: normal;
  font-weight: 400;
  font-size: 66px;
  line-height: 1.1;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  font-feature-settings: "ordn" on, "ss01" on;
}

.app__content {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 65px;
  width: 100%;
}

.app__info {
  display: flex;
  flex-direction: column;
  margin-right: 40%;
}

.app__description {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 97px;
  max-width: 200px;
}

.app__logo {
  width: 192px;
  height: 47px;
  opacity: 0.2;
}

.footer {
  position: absolute;
  bottom: 90px;
  left: 86px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.footer__author {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #ff69b4;
  margin-right: 208px;
}

.footer__policy {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-style: normal;
  color: #eeebe6;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}

.footer__policy:hover {
  opacity: 0.6;
  transition: all 0.3s ease-in-out;
}
</style>