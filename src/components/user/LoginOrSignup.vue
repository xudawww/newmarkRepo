<template>
  <Toast position="top-left" group="tl" />

  <Dialog v-model:visible="display">
    <SelectButton v-model="mode" :options="modeOpts" />
    <br />
    <span class="p-float-label">
      <InputText id="username" type="text" v-model="uname" />
      <label for="username">用户名</label>
    </span>
    <span class="p-float-label" v-if="mode != '登录'">
      <InputText id="username" type="text" v-model="email" />
      <label for="username">邮箱</label>
    </span>
    <span class="p-float-label">
      <InputText id="username" type="text" v-model="pass" />
      <label for="username">密码</label>
    </span>
    <span class="p-float-label" v-if="mode != '登录'">
      <InputText id="username" type="text" v-model="comPass" />
      <label for="username">确认密码</label>
    </span>
    <template #footer>
      <Button
        type="button"
        label="确认"
        @click="signUpOrLogin()"
        :loading="getUserLoading"
      />

      <Button label=" " icon="pi pi-check" iconPos="right"></Button>
    </template>
  </Dialog>
  <VerifyCodeModal ref="VerifyCodeModal" />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import VerifyCodeModal from "./VerifyCodeModal";
import InputText from "primevue/inputtext";
import $ from "jquery";
export default {
  data() {
    return {
      display: false,
      mode: "登录",
      submit: false,
      uname: "",
      email: "",
      pass: "",
      comPass: "",
      modeOpts: ["登录", "注册"],
      MenuItems: [{ label: "注册" }, { label: "登录" }],
    };
  },
  components: { VerifyCodeModal },
  computed: {
    ...mapGetters("user", ["getCurrentUser", "getUserLoading"]),
  },
  methods: {
    toggleDialog() {
      this.display = true;
    },
    switchMode() {
      this.mode = "signup";
    },
    showSuccessRegister() {
      this.$toast.add({
        severity: "success",
        summary: "注册成功，请到邮箱确认验证.",
        detail: "Message Content",
        life: 3000,
      });
    },
    async signUpOrLogin() {
      this.submit = true;
      let userObj = {};
      userObj.user_name = this.uname;
      userObj.password = this.pass;
      userObj.email = this.email;
      if (this.mode == "注册") {
        await this.signup(userObj);
        this.$refs.VerifyCodeModal.toggleDisplay();
      }
    },
    redirect() {
      this.$refs.VerifyCodeModal.toggleDisplay();
    },
    ...mapActions("user", ["signup"]),
  },

  created() {},
  unmounted() {},
  mounted() {},
  watch: {},
};
</script>
<style>
.p-dialog .p-dialog-content {
}
.p-dialog .p-dialog-header {
}
.p-float-label {
  margin-top: 20px;
}
</style>
