<template>
  <h1>카카오 로그인 페이지</h1>
  <button @click="loginWithKakao">카카오 로그인</button>
</template>

<script setup>
const loginWithKakao = () => {
  const REST_API_KEY = '0edfdf21309e5ba87a8ffadf80179b55';
  const REDIRECT_URI = 'http://localhost:8080/oauth/kakao/callback';

  const frontendRedirect = encodeURIComponent(
    window.location.origin + '/kakao-check',
  );

  const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&state=${frontendRedirect}`;

  window.location.href = kakaoUrl;
};
</script>
