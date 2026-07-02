<template>
  <h1>카카오 로그인 페이지</h1>
  <button @click="loginWithKakao">카카오 로그인</button>
</template>

<script setup>
const t = {
  access_token:
    'pF6j_4z9IB3yv162Hl4RS2JrbFjR-KA3AAAAAQoNGVMAAAGfIDNKLoE8pQXSEbh1',
  token_type: 'bearer',
  refresh_token:
    'LoZx52u_N67I6ySSWuuZHa4QsrzlsRaZAAAAAgoNGVMAAAGfIDNKLIE8pQXSEbh1',
  expires_in: 21599,
  scope: 'profile_image profile_nickname',
  refresh_token_expires_in: 5183999,
};

const loginWithKakao = () => {
  const REST_API_KEY = 'e7ef5b1c9880d044d66540df8d8cf051';
  const REDIRECT_URI = 'http://localhost:8080/oauth/kakao/callback';

  const frontendRedirect = encodeURIComponent(
    window.location.origin + '/kakao-check',
  );

  const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&state=${frontendRedirect}`;

  window.location.href = kakaoUrl;
};
</script>
