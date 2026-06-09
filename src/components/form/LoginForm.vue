<script setup>
import { useLoginForm } from '@/composables/useLoginForm'
import { Checkbox, InputText, Password } from 'primevue'
import 'primeicons/primeicons.css'
import FormField from '../ui/FormField.vue'

const { handleSubmit, serverError, form, errors, validatePassword, validatePhone, loading } =
  useLoginForm()
</script>

<template>
  <div
    class="w-full lg:w-1/2 order-2 md:-order-1 bg-white flex items-center justify-center p-6 md:p-10"
  >
    <form @submit.prevent="handleSubmit" class="w-full max-w-sm flex flex-col gap-5" novalidate>
      <div>
        <h2 class="text-xl md:text-2xl font-bold text-[#012467]">ورود به حساب کاربری</h2>
        <p class="text-gray-400 text-sm mt-1">اطلاعات خود را وارد کنید</p>
      </div>

      <div
        v-if="serverError"
        class="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3"
      >
        {{ serverError }}
      </div>

      <FormField label="شماره موبایل" :error="errors.phone">
        <InputText
          v-model="form.phone"
          @blur="validatePhone"
          placeholder="09123456789"
          :invalid="!!errors.phone"
          class="w-full placeholder:text-sm"
          inputmode="tel"
          maxlength="11"
        />
      </FormField>

      <FormField label="رمز عبور" :error="errors.password">
        <Password
          v-model="form.password"
          @blur="validatePassword"
          placeholder="حداقل ۸ کاراکتر"
          :invalid="!!errors.password"
          :feedback="false"
          toggleMask
          class="w-full"
          inputClass="w-full placeholder:text-sm"
        />
      </FormField>

      <div class="w-full flex justify-between">
        <RouterLink to="/forget-password" class="text-blue-900 text-xs md:text-sm">
          رمز عبور خود را فراموش کرده اید؟
        </RouterLink>
        <div class="flex items-center gap-1 md:gap-2">
          <Checkbox v-model="form.rememberMe" :binary="true" inputId="remember" />
          <label for="remember" class="text-xs md:text-sm">مرا به خاطر بسپار</label>
        </div>
      </div>

      <button
        type="submit"
        :disabled="loading"
        class="w-full flex items-center gap-2 justify-center rounded-xl bg-linear-to-r from-[#012467] via-[#0a4598] to-[#012467] py-3 text-white font-semibold text-sm transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 mt-1 cursor-pointer"
      >
        <span v-if="loading">در حال ورود...</span>
        <span v-else>ورود به حساب</span>
        <i class="pi pi-arrow-left text-white" style="font-size: 0.8rem"></i>
      </button>

      <p class="text-center text-sm text-gray-400">
        حساب ندارید؟
        <RouterLink to="/register" class="text-blue-900 font-semibold hover:underline">
          ثبت نام کنید
        </RouterLink>
      </p>
    </form>
  </div>
</template>
