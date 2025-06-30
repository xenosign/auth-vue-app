<template>
  <h1>현재 로그인 된 권한 : ROLE_KAKAO</h1>
  <h2>사용자 Email : {{ email }}</h2>
  <h2>사용자 이름 : {{ nickname }}</h2>
  <img
    v-if="profileImage"
    :src="profileImage"
    alt="프로필 이미지"
    width="300"
  />
  <br />
  <button @click="checkAuth('admin')">ADMIN 권한 확인</button>&nbsp;
  <button @click="checkAuth('member')">MEMBER 권한 확인</button>&nbsp;
  <button @click="checkAuth('normal')">NORMAL 권한 확인</button>

  <h2 v-if="flag">통신 성공</h2>
  <h2 v-else>통신 실패</h2>
  <h2>서버 응답 : {{ serverMsg }}</h2>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();

const email = ref('');
const nickname = ref('');
const profileImage = ref('');
const role = ref('');
const serverMsg = ref('아직 통신 하기 전!');
const flag = ref(true);

const checkAuth = async (role) => {
  try {
    const response = await axios.get(`http://localhost:8080/auth/${role}`, {
      withCredentials: true,
    });
    flag.value = true;
    serverMsg.value = response.data;
  } catch (err) {
    flag.value = false;
    serverMsg.value = err.response?.data?.message || err.message;
    console.error(err);
  }
};

const init = async () => {
  try {
    const res = await axios.get(`http://localhost:8080/oauth/user/me`, {
      withCredentials: true,
    });
    console.log(res.data);

    nickname.value = res.data.nickname;
    profileImage.value = res.data.profileImageUrl;
    email.value = res.data.email;
  } catch (e) {
    role.value = '권한 없음';
  }
};

onMounted(() => {
  init();
});
</script>
