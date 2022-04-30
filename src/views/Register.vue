<script setup lang="ts">
import { RegistrationModel } from '@/types/RegistrationModel';
import { ref } from 'vue';
import { addUser } from "@/services/users-service";
// const message = "Hello world";
const showPassword = ref<Boolean>(false);
const model = ref<RegistrationModel>(new RegistrationModel());
async function registerNewUser() {
  await addUser(model.value);
}
</script>

<template>
  <div class="login__wrapper">
    <v-card class="login" width="450px" center>
      <v-card-title class="justify-center mt-4">
        <p class="text-center a">Регистрация</p>
      </v-card-title>
      <v-card-text class="pt-0">
        <div class="d-flex flex-column mx-2 mb-4">
          <v-text-field label="Имя" v-model="model.name" class="my-3" variant="outlined"  hide-details/>
          <v-text-field label="E-Mail" v-model="model.email" class="my-3" variant="outlined"  hide-details/>
          <v-text-field label="Логин" v-model="model.login" class="my-3" variant="outlined"  hide-details/>
          <v-text-field label="Пароль"
            v-model="model.password" 
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
            class="my-3" 
            variant="outlined" 
            hide-details
          />
          <v-text-field label="Подтвердите пароль" 
            v-model="model.passwordConfirm"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
            class="my-3" 
            variant="outlined" 
            hide-details
          />
          <div class="d-flex my-3">
            <v-btn color="primary" @click="registerNewUser">Зарегистрироваться</v-btn>
            <v-spacer />
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
