<template>
  <h1>JWT 로그인</h1>
  <div class="login-form">
    <form @submit.prevent="login">
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
      <button type="submit">로그인</button>
    </form>
    <p v-if="error" style="color: red">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();

const username = ref('');
const password = ref('');
const error = ref('');

const login = async () => {
  try {
    const response = await axios.post('http://localhost:8080/auth/login', {
      username: username.value,
      password: password.value,
    });

    const token = response.data.token;
    const role = response.data.role;

    console.log(response.data);

    localStorage.setItem('jwt', token);
    localStorage.setItem('role', role);

    alert('로그인 성공');
    router.push('/check');
  } catch (err) {
    alert(`로그인 실패, ${err.message}`);
    console.error(err);
  }
};

// const login = async () => {
//   try {
//     const response = await axios.post('http://localhost:8080/auth/login', {
//       username: username.value,
//       password: password.value,
//     });

//     const token = response.data.token;
//     const role = response.data.role;

//     console.log(response.data);

//     localStorage.setItem('jwt', token);
//     localStorage.setItem('role', role);

//     // Authorization 헤더 전역 설정
//     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

//     alert('로그인 성공');
//     router.push('/check');
//   } catch (err) {
//     alert(`로그인 실패, ${err.message}`);
//     console.error(err);
//   }
// };
</script>
