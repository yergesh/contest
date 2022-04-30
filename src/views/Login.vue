<script setup lang="ts">
import { LoginModel } from '@/types/RegistrationModel';
import { ref } from 'vue';
import { loginAsync } from "@/services/users-service";

// const message = "Hello world";
const showPassword = ref<Boolean>(false);
const model = ref<LoginModel>(new LoginModel());
const form = ref<{validate: Function}>();
async function login() {
  console.log("login");
  if(form.value == null || !form.value.validate())
    return;
    console.log("login asfsadf");
    
}
</script>

<template>
  <div class="login__wrapper">
    <v-card class="login" width="450px" center>
      <v-card-title class="justify-center mt-4">
        <p class="text-center a">Войти</p>
      </v-card-title>
      <v-card-text class="pt-0">
        <div class="d-flex flex-column mx-2 mb-4">
          <v-form ref="form">
            <v-text-field label="Логин" 
              v-model="model.login"
              class="my-3" 
              variant="outlined" 
              :rules="[v => !!v || 'Введите логин']"
            />
            <v-text-field label="Пароль" 
              v-model="model.password"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              @click:append="showPassword = !showPassword"
              class="my-3" 
              variant="outlined" 
              :rules="[v => !!v || 'Введите пароль']"
            />
          </v-form>
          <div class="d-flex my-3">
            <v-btn color="primary" @click="login">Войти</v-btn>
            <v-spacer />
            <v-btn color="primary" to="/signup">Зарегистрироваться</v-btn>
          </div>
          <div class="d-flex my-3">
            <v-spacer />
            <v-btn variant="text">Забыли пароль?</v-btn>
          </div>
        </div>
        <!-- <v-container>
          <v-row>
            <v-col>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
            </v-col>
          </v-row>
        </v-container> -->
      </v-card-text>
    </v-card>
  </div>
</template>

<style>
.login__wrapper {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.login {
  margin-bottom: 10%;
}

</style>
