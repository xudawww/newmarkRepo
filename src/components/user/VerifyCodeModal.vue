<template>
  <Dialog v-model:visible="display">
    <SelectButton v-model="mode" :options="modeOpts" />
    <br />
    <InputText class="inputone verifyInput" type="text" v-model="vcode1" />
    <InputText class="verifyInput" type="text" v-model="vcode2" />
    <InputText class="verifyInput" type="text" v-model="vcode3" />
    <InputText class="verifyInput" type="text" v-model="vcode4" />
    <InputText class="verifyInput" type="text" v-model="vcode5" />
    <InputText class="verifyInput" type="text" v-model="vcode6" />
    <template #footer>
      <Button
        type="button"
        label="确认"
        @click="signUpOrLogin()"
      />
      <Button label=" " icon="pi pi-check" iconPos="right"></Button>
    </template>
  </Dialog>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
    
  data() {
    return {display:false,vcode1:'',vcode2:'',vcode3:'',vcode4:'',vcode5:'',vcode6:''};
  },
  components: {},
  computed: {
    ...mapGetters("user", ["getCurrentUser", "getUserLoading"]),
  },
  methods: {
      toggleDisplay(){
          this.display = !this.display;
      }
  }
};
</script>
<style>
 .verifyInput{
     width:40px;
     margin-right: 20px;
 }
</style>