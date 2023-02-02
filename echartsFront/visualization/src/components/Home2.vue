<template>
  <div class="com-container">
    <!-- <section>
      <form action="">
        <p>Give people wonderful tools，and they’ll do wonderful things.</p>
        <input type="text" v-model="username" placeholder="请输入账号" />
        <input type="password" v-model="pwd" placeholder="请输入密码" />
        <button type="submit" @click="login">Login</button>
      </form>
    </section> -->
    <div class="test"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      pwd: "",
    };
  },
  methods: {
    login() {
      this.$router.push("sellerPage");
      console.log(this.username, this.pwd);
    },
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  overflow-x: hidden;
}
.test {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    94.3deg,
    rgba(26, 33, 64, 1) 10.9%,
    rgba(81, 82, 115, 1) 87.1%
  );
  overflow: hidden;
}

.test::before {
  position: absolute;
  content: "";
  z-index: 2;
  height: 300px;
  width: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-100%, -100%);
  background-color: #ffe53b;
  background-image: linear-gradient(147deg, #ffe53b 0%, #ff2525 75%);
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.2);
  animation: pulse 1.5s infinite;
}

.test::after {
  position: absolute;
  content: "";
  z-index: 2;
  width: 200px;
  height: 200px;
  top: 50;
  left: 50%;
  transform: translate(30%, 80%);
  background-color: #fa8bff;
  background-image: linear-gradient(
    45deg,
    #fa8bff 0%,
    #2bd3ff 50%,
    #2bff88 90%
  );
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.2);
  animation: pulse 1.6s infinite;
}

@keyframes pulse {
  50% {
    box-shadow: 0 0 0 50px rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
}

form {
  position: relative;
  z-index: 3;
  width: 320px;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 45px 30px;
  border-radius: 8px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
}
form p {
  color: #000;
  display: block;
  text-align: center;
  margin: 0 0 30px 0;
}

input {
  width: 100%;
  height: 50px;
  border-radius: 5px;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.5);
  margin-bottom: 15px;
  padding-left: 15px;
  color: #000;
  outline: none;
}

input::placeholder {
  color: #000;
}
button {
  width: 100%;
  height: 50px;
  background-image: linear-gradient(
    to right,
    #02aab0 0%,
    #00cdac 50%,
    #02aabd 100%
  );
  background-size: 100% auto;
  border-radius: 8px;
  color: #fff;
  outline: none;
  cursor: pointer;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: ease 0.4s;
}

button:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}
</style>
