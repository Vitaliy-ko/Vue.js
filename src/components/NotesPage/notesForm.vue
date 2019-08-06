<template>
  <div>
    <div class="form">
      <div class="form-group">
        <label>Note title</label>
        <input
          class="form-control"
          type="text"
          v-model="note.title"
          :class="{'is-invalid': !titleValidation.isValidData && validation.title.isBlur, 'is-valid': titleValidation.isValidData}"
          @blur="validation.title.isBlur = true"
        />
        <div
          class="invalid-feedback"
        >You should enter at least 3 characters starting with a capital letter</div>
      </div>
      <div class="form-group">
        <label>Note text</label>
        <input
          class="form-control"
          type="text"
          v-model="note.text"
          :class="{'is-invalid': !textValidation.isValidData && validation.text.isBlur, 'is-valid': textValidation.isValidData}"
          @blur="validation.text.isBlur = true"
        />
        <div
          class="invalid-feedback"
        >You should enter at least 3 words and the first one should start with a capital letter</div>
      </div>
      <div class="form-group">
        <label>Email</label>
        <input
          class="form-control"
          type="email"
          v-model="note.email"
          :class="{'is-invalid': !emailValidation.isValidData && validation.email.isBlur, 'is-valid': emailValidation.isValidData}"
          @blur="validation.email.isBlur = true"
        />
        <div class="invalid-feedback">You should enter a valid email address.</div>
      </div>
      <button
        @click="addNote"
        type="submit"
        class="btn btn-primary w-100 mb-3"
        :disabled="isSubmitDisabled"
      >Submit</button>
    </div>
  </div>
</template>

<script>
import { eventEmmiter } from "./../../main";

export default {
  data() {
    return {
      note: {
        title: "",
        text: "",
        email: "",
        isCopied: false
      },
      validation: {
        title: {
          isBlur: false
        },
        text: {
          isBlur: false
        },
        email: {
          isBlur: false
        }
      }
    };
  },
  methods: {
    addNote() {
      this.note.date = new Date(Date.now()).toLocaleString();
      eventEmmiter.$emit("addNote", Object.assign({}, this.note));
      this.note = {};
      this.validation = {
        title: {
          isBlur: false
        },
        text: {
          isBlur: false
        },
        email: {
          isBlur: false
        }
      };
    }
  },

  computed: {
    titleValidation() {
      let regExp = /^[A-Z]{1}.{2,}/;
      let isValidData = regExp.test(this.note.title);
      return {
        isValidData
      };
    },
    textValidation() {
      let regExp = /^[A-Z]{1}[a-z]+(\s{1}[A-Za-z]+){2,}/;
      let isValidData = regExp.test(this.note.text);
      return {
        isValidData
      };
    },
    emailValidation() {
      let regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
      let isValidData = regExp.test(this.note.email);
      return {
        isValidData
      };
    },
    isSubmitDisabled() {
      if (
        this.titleValidation.isValidData &&
        this.textValidation.isValidData &&
        this.emailValidation.isValidData
      ) {
        return false;
      } else {
        return true;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.form {
  text-align: left;
}
</style>
