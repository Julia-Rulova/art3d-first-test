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
        <input-component
          :label="'NAME'"
          :id="'name'"
          :type="'text'"
          :require="true"
          :error="errors.name"
          :modelValue="form.nameValue"
          @update="updateName"
        />
        <input-component
          :label="'PHONE'"
          :id="'phone'"
          :type="'text'"
          :require="true"
          :error="errors.phone"
          :modelValue="form.phoneValue"
          @update="updatePhone"
        />
        <input-component
          :label="'TEMP'"
          :id="'temp'"
          :type="'range'"
          :modelValue="form.tempValue"
          @update="updateTemp"
        />
        <input-component
          :label="'COMMENTS'"
          :id="'comments'"
          :type="'text'"
          :require="false"
          :error="''"
          :modelValue="form.commentsValue"
          @update="updateComments"
        />

        <div class="app__form-btn-container">
          <button
            class="app__form-btn"
            type="submit"
            @click.prevent="handleSubmit"
          >
            call me
          </button>
          <p class="app__form-policy">
            By pressing “Send” button I agree with
            <span class="app__form-policy_span">Privacy Policy</span>
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
  data: function () {
    return {
      form: {
        nameValue: "",
        phoneValue: "+7",
        commentsValue: "",
        tempValue: 50,
      },
      errors: {
        name: "",
        phone: "",
      },
    };
  },
  methods: {
    updateName(val) {
      this.form.nameValue = val;
      if (val.length < 2) {
        this.errors.name = "Введите свое имя.";
      } else {
        this.errors.name = "";
      }
    },
    updatePhone(val) {
      const reg = /[^+\d]/g;
      this.form.phoneValue = val;

      if (val.length != 12 || reg.test(val)) {
        this.errors.phone = "Номер телефона некорректен.";
      } else {
        this.errors.phone = "";
      }
    },
    updateTemp(val) {
      this.form.tempValue = val;
    },
    updateComments(val) {
      this.form.commentsValue = val;
    },
    handleSubmit() {
      if (this.isValidForm) {
        console.log(JSON.parse(JSON.stringify(this.form)));
      } else {
        console.log("Заполните форму!");
      }
    },
  },
  computed: {
    isValidForm() {
      return this.form.nameValue.length < 2 || this.form.phoneValue.length != 12
        ? false
        : true;
    },
  },
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
  margin-bottom: 30px;
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

.app__form {
  width: 538px;
}

.app__form-btn-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.app__form-btn {
  border: 1px solid #eeebe6;
  border-radius: 100px;
  background-color: transparent;
  color: #eeebe6;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 20px 60px;
  margin-right: 72px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

.app__form-btn:hover {
  opacity: 0.7;
  transition: all 0.3s ease-in-out;
}

.app__form-policy {
  max-width: 205px;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 1.5;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.app__form-policy_span {
  color: #ff69b4;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

.app__form-policy_span:hover {
  color: #ff0080;
  transition: all 0.3s ease-in-out;
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

@media screen and (max-width: 1255px) {
  .app__title {
    font-size: 46px;
    line-height: 1.1;
  }

  .app__info {
    margin-right: 30%;
  }

  .app__form {
    width: 438px;
  }

  .app__form-btn {
    padding: 15px 40px;
  }

  .footer__author {
    margin-right: 100px;
  }
}

@media screen and (max-width: 1042px) {
  .app__form-policy {
    max-width: 170px;
    font-size: 12px;
  }
}

@media screen and (max-width: 995px) {
  #app {
    min-width: 320px;
    width: 100%;
    padding: 20px 15px;
  }

  .app__content {
    flex-direction: column;
  }

  .app__info {
    flex-direction: row;
    margin-right: 0;
    margin-bottom: 60px;
    justify-content: center;
  }

  .app__description {
    margin-bottom: 0;
    margin-right: 50px;
    max-width: 300px;
  }

  .app__form {
    width: 538px;
    margin: 0 auto;
  }

  .footer {
    bottom: 20px;
    left: 15px;
  }
}

@media screen and (max-width: 585px) {
  .app__info {
    justify-content: flex-start;
  }

  .app__description {
    margin-right: 30px;
    max-width: 200px;
  }

  .app__form {
    width: 100%;
  }
}

@media screen and (max-width: 450px) {
  .app__info {
    align-items: center;
  }

  .app__logo {
    width: 100px;
    height: 26px;
  }

  .app__form-btn-container {
    flex-direction: column;
    align-items: start;
  }

  .app__form-btn {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }

  .app__form-policy {
    max-width: 90%;
  }

  .footer__author {
    margin-right: 40px;
  }

  .footer__author {
    font-size: 11px;
    margin-right: 20px;
  }

  .footer__policy {
    font-size: 11px;
  }
}
</style>