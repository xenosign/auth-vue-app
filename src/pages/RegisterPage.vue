<template>
  <h1>회원 가입</h1>
  <div class="register-form">
    <form @submit.prevent="register">
      <label>
        아이디:
        <input v-model="username" type="text" required />
      </label>
      <br />
      <label>
        비밀번호:
        <input v-model="password" type="password" required />
      </label>
      <br />

      <div>
        <label>
          <input type="radio" value="ROLE_ADMIN" v-model="selectedRole" />
          관리자
        </label>
        <label>
          <input type="radio" value="ROLE_MEMBER" v-model="selectedRole" />
          일반 회원
        </label>
        <label>
          <input type="radio" value="ROLE_NORMAL" v-model="selectedRole" />
          역할 없음
        </label>
      </div>

      <br />
      <button type="submit">회원 가입</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();

const username = ref('');
const password = ref('');
const selectedRole = ref('ROLE_MEMBER'); // 기본 선택 값

const register = async () => {
  try {
    const response = await axios.post('http://localhost:8080/user/register', {
      username: username.value,
      password: password.value,
      role: selectedRole.value,
    });

    alert('회원 가입 성공');
    router.push('/login');
  } catch (err) {
    alert(`회원 가입 실패, ${err.message}`);
    console.error(err);
  }
};
</script>

<style scoped></style>
