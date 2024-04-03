<template>
  <div
    class="w100 flex-center"
    style="flex-direction: column; margin-top: 400px"
  >
    <div class="lock"></div>
    <div class="message">
      <h1>權限不足，無法訪問系統</h1>
      <h1>請向IT管理部門確認您的權限是否異常</h1>
    </div>
    <br />
    <br />
    <h2 class="mt-10">
      <span style="color: red">{{ count }}</span> 秒後導回登入頁
    </h2>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";
import { onMounted, ref } from "vue";

const count = ref(5);

const countDown = (): void => {
  if (count.value > 0) {
    count.value = count.value - 1;
    setTimeout(() => {
      countDown();
    }, 1000);
  } else {
    router.push("/login");
  }
};

onMounted(() => {
  countDown();
});
</script>

<style scoped>
* {
  position: relative;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Microsoft JhengHei", "微軟正黑體", "Microsoft YaHei", sans-serif;
}

body {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom right, #eee, #aaa);
}

h1 {
  margin: 40px 0 20px;
}

.lock {
  border-radius: 5px;
  width: 55px;
  height: 45px;
  background-color: white;
  animation: dip 1s;
  animation-delay: (2s - 0.5);

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-left: 5px solid white;
    height: 20px;
    width: 15px;
    left: calc(50% - 12.5px);
  }

  &::before {
    top: -30px;
    border: 5px solid white;
    border-bottom-color: transparent;
    border-radius: 15px 15px 0 0;
    height: 30px;
    animation: lock 2s, spin 2s;
  }

  &::after {
    top: -10px;
    border-right: 5px solid transparent;
    animation: spin 2s;
  }
}

@keyframes lock {
  0% {
    top: -45px;
  }
  65% {
    top: -45px;
  }
  100% {
    top: -30px;
  }
}

@keyframes spin {
  0% {
    transform: scaleX(-1);
    left: calc(50% - 30px);
  }
  65% {
    transform: scaleX(1);
    left: calc(50% - 12.5px);
  }
}

@keyframes dip {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
