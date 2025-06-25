<template>
  <h1>현재 로그인 된 권한 : {{ role }}</h1>
  <p>token : {{ token }}</p>
  <button @click="checkAuth('admin')">ADMIN 권한 확인</button>&nbsp;
  <button @click="checkAuth('member')">MEMBER 권한 확인</button>&nbsp;
  <button @click="checkAuth('normal')">NORMAL 권한 확인</button>
  <h2>서버 응답 : {{ serverMsg }}</h2>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();

const role = ref('');
const token = ref('');
const serverMsg = ref('아직 통신 하기 전!');
const flag = ref(true);

const init = () => {
  token.value = localStorage.getItem('jwt');
  role.value = localStorage.getItem('role');
};

const checkAuth = async (role) => {
  try {
    const response = await axios.get(`http://localhost:8080/auth/${role}`, {
      // headers: {
      //   Authorization: `Bearer ${token.value}`,
      // },
    });

    flag.value = true;

    serverMsg.value = response.data;
  } catch (err) {
    flag.value = false;
    serverMsg.value = err.message;
    console.error(err);
  }
};

onMounted(() => {
  init();
});
</script>
