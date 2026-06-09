<script setup lang="ts">
import { useSignupForm } from '@/composables/useSignupForm'
import { IconField, InputIcon, InputText, Password } from 'primevue'
import 'primeicons/primeicons.css'
import FormField from '../ui/FormField.vue'

const {
  handleSubmit,
  serverError,
  form,
  errors,
  loading,
  validateConfirmPassword,
  validateEmail,
  validateFirstName,
  validateLastName,
  validateNationalCode,
  validatePassword,
  validatePhone,
} = useSignupForm()
</script>

<template>
  <div class="w-full order-2 md:-order-1 bg-white flex items-center justify-center p-4 lg:p-10">
    <form @submit.prevent="handleSubmit" class="w-full flex flex-col gap-3 sm:gap-5" novalidate>
      <div class="w-full flex flex-col items-center justify-center">
        <h2 class="text-xl sm:text-2xl font-bold text-[#012467]">ثبت نام در سامانه</h2>
        <p class="text-gray-400 text-sm mt-1">اطلاعات خود را وارد کنید</p>
      </div>

      <div
        v-if="serverError"
        class="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3"
      >
        {{ serverError }}
      </div>

      <!-- name section -->
      <div class="w-full flex flex-col sm:flex-row justify-between items-center gap-2 lg:gap-6">
        <FormField label="نام" :error="errors.firstName">
          <IconField>
            <InputIcon class="pi pi-user" style="font-size: 0.9rem" />
            <InputText
              v-model="form.firstName"
              @blur="validateFirstName"
              placeholder="نام خود را وارد کنید"
              :invalid="!!errors.firstName"
              class="w-full placeholder:text-sm placeholder:text-gray-400"
              inputmode="text"
            />
          </IconField>
        </FormField>

        <FormField label="نام خانوادگی" :error="errors.lastName">
          <IconField>
            <InputIcon class="pi pi-user" style="font-size: 0.9rem" />
            <InputText
              v-model="form.lastName"
              @blur="validateLastName"
              placeholder="نام خانوادگی"
              :invalid="!!errors.lastName"
              class="w-full placeholder:text-sm"
              inputmode="text"
            />
          </IconField>
        </FormField>
      </div>

      <!-- mobile and nationalCode section -->
      <div class="w-full flex flex-col sm:flex-row justify-between items-center gap-2 lg:gap-6">
        <FormField label="شماره موبایل" :error="errors.phone">
          <IconField>
            <InputIcon class="pi pi-phone" style="font-size: 0.9rem" />
            <InputText
              v-model="form.phone"
              @blur="validatePhone"
              placeholder="شماره موبایل"
              :invalid="!!errors.phone"
              class="w-full placeholder:text-sm"
              inputmode="tel"
              maxlength="11"
            />
          </IconField>
        </FormField>

        <FormField label="کد ملی" :error="errors.nationalCode">
          <IconField>
            <InputIcon class="pi pi-id-card" style="font-size: 0.9rem" />
            <InputText
              v-model="form.nationalCode"
              @blur="validateNationalCode"
              placeholder="کد ملی"
              :invalid="!!errors.nationalCode"
              class="w-full placeholder:text-sm"
              inputmode="text"
            />
          </IconField>
        </FormField>
      </div>

      <!-- password and confirmation password section -->
      <div class="w-full flex flex-col sm:flex-row justify-between items-center gap-2 lg:gap-6">
        <FormField label="رمز عبور" :error="errors.password">
          <Password
            v-model="form.password"
            @blur="validatePassword"
            placeholder="رمز عبور"
            :invalid="!!errors.password"
            :toggle-mask="true"
            :feedback="false"
            class="w-full"
            inputClass="w-full placeholder:text-sm"
          />
        </FormField>

        <FormField label="تکرار رمز عبور" :error="errors.confirmPassword">
          <Password
            v-model="form.confirmPassword"
            @blur="validateConfirmPassword"
            placeholder="تکرار رمز عبور"
            :invalid="!!errors.confirmPassword"
            :toggle-mask="true"
            :feedback="false"
            class="w-full"
            inputClass="w-full placeholder:text-sm"
          />
        </FormField>
      </div>

      <FormField label="ایمیل (اختیاری)" :error="errors.email">
        <IconField>
          <InputIcon class="pi pi-envelope" style="font-size: 0.9rem" />
          <InputText
            v-model="form.email"
            @blur="validateEmail"
            placeholder="ایمیل"
            :invalid="!!errors.email"
            class="w-full placeholder:text-sm"
          />
        </IconField>
      </FormField>

      <button
        type="submit"
        :disabled="loading"
        class="w-full flex items-center gap-2 justify-center rounded-xl bg-linear-to-r from-[#012467] via-[#0a4598] to-[#012467] py-3 text-white font-semibold text-sm transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 mt-1 cursor-pointer"
      >
        <span v-if="loading">در حال ثبت...</span>
        <span v-else>ثبت نام</span>
        <i class="pi pi-arrow-left text-white" style="font-size: 0.8rem"></i>
      </button>

      <p class="text-center text-sm text-gray-400">
        قبلا حساب کاربری دارید؟
        <RouterLink to="/login" class="text-blue-900 font-semibold hover:underline">
          ورود به حساب
        </RouterLink>
      </p>
    </form>
  </div>
</template>
