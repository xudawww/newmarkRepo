<template>
  <Menubar id="menu" :model="items">
    <template #end>
      <Button  @click="toggleModal" id='userBtn' class="p-button-rounded p-button-text" icon="pi pi-user" iconPos="right"/>
      <InputText placeholder="Search" type="text" />
    </template>
  </Menubar>
  <LoginOrSignup ref="LoginOrSignupRef"/>
</template>
<script>
import InputText from "primevue/inputtext";
import Menubar from "primevue/menubar";
import Button from 'primevue/button';
import LoginOrSignup from '../user/LoginOrSignup';
import $ from 'jquery'
export default {
  name: "App",
  components: { Menubar, InputText,Button,LoginOrSignup},
  data() {
    return {
      items: [{ label: "主页",to: "/" }, { label: "房屋",to:'/Products' }, { label: "联系我们" }],
    };
  },
  methods:{
    toggleModal(){
       this.$refs.LoginOrSignupRef.toggleDialog();
    }
    
  },
  mounted(){
     $('.p-menuitem-link').first().css("background", "lightgrey");
     $(".p-menuitem-link").focusin(function(){
       $('.p-menuitem-link').css('background','white'); // Remove Before set color to selected button
       $(this).css("background", "lightgrey"); // Set Color to Selected Button
   });
  }
  
};
</script>
<style>
#menu > ul > li > .p-menuitem-link > .p-menuitem-text {
  color: rgb(172, 172, 172)!important;
}
#menu > ul > li > .p-menuitem-link > .p-menuitem-icon {
  display: none;
}
#menu {
  z-index: 10000;
  background: transparent !important;
  border: none !important;
  margin: 3rem;
  
}

#menu > ul > li > a:focus {
  box-shadow: none !important;
}


#menu > ul > li > a:hover>.p-menuitem-text {
  color:grey!important
}
#userBtn{
  margin-right:20px
}
</style>
