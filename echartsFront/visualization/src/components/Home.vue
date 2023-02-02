<template>
  <div>
    <div class="box">
      <div class="content">
        <img
          src="@/../public/static/img/login.jpg"
          alt="sign in"
          class="login-img images"
        />
        <img
          src="@/../public/static/img/register.jpg"
          alt="sign up"
          class="register-img images"
        />
        <div class="login-wrapper">
          <div class="top-tips">
            <span
              >Give people wonderful tools, and they will do wonderful
              things</span
            >
            <span class="top-tips-span">注册</span>
            <h1 class="h1-text">登录</h1>
            <div class="other-login">
              <img src="@/../public/static/img/QQ.png" alt="QQ登录" />
              <span>使用QQ登录</span>
            </div>

            <div class="login-form">
              <div class="user-form form-item">
                <div class="text-tips"><span>账号</span></div>
                <input type="text" />
              </div>
              <div class="password-form form-item">
                <div class="text-tips">
                  <span>密码</span><span class="forget-password">忘记密码</span>
                </div>
                <input type="password" />
              </div>
              <button class="btn">登录</button>
            </div>

            <div class="register-form">
              <div class="user-form form-item">
                <div class="text-tips"><span>账号</span></div>
                <input type="text" />
              </div>
              <div class="password-form form-item">
                <div class="text-tips">
                  <span>密码</span>
                </div>
                <input type="password" />
              </div>
              <div class="password-form form-item">
                <div class="text-tips">
                  <span>确认密码</span>
                </div>
                <input type="password" />
              </div>
              <button class="btn">注册</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0px;
  padding: 0px;
}

.box {
  background-color: rgb(51, 32, 108);
  width: 100vw;
  height: 100vh;
  .content {
    width: 90vw;
    height: 90vh;
    background-color: rgb(228, 218, 232);
    border-radius: 40px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transition: 1s;
    .images {
      margin-left: -150px;
      margin-right: 100px;
      position: absolute;
      left: 15%;
    }
    .login-img {
      width: 45%;
      height: 90%;
      border-radius: 15px;
    }
    .register-img {
      width: 45%;
      opacity: 0;
      border-radius: 15px;
    }
    .login-wrapper {
      width: 30vw;
      height: 70vh;
      border-radius: 40px;
      backdrop-filter: blur(1px);
      background-color: rgba(244, 240, 245, 0.6);
      padding: 60px;
      box-sizing: border-box;
      position: absolute;
      right: 10%;
      transition: 1s;
    }
    .top-tips {
      span:nth-child(1) {
        font-size: 15px;
        font-weight: 600;
      }
      .top-tips-span {
        font-size: 15px;
        color: rgb(79, 133, 226);
        border-bottom: 1px solid rgb(79, 133, 226);
        float: right;
        line-height: 25px;
        cursor: pointer;
      }
      h1 {
        font-style: 40px;
        margin: 20px;
      }
      .other-login {
        width: 50%;
        height: 50px;
        border-radius: 10px;
        text-align: center;
        line-height: 50px;
        font-size: 20px;
        color: #fff;
        margin: 40px 0;
        background-color: rgb(79, 133, 226);
        padding-bottom: 2px;
        cursor: pointer;
        img {
          width: 25px;
          height: 25px;
          vertical-align: middle;
        }
        span {
          vertical-align: middle;
        }
      }
      .login-form,
      .register-form {
        width: 100%;
        .form-item {
          .text-tips {
            color: rgb(123, 123, 123);
            margin: 5px;
          }
          .forget-password {
            font-size: 15px;
            color: rgb(79, 133, 226);
            float: right;
            line-height: 25px;
            cursor: pointer;
          }
        }
        input {
          width: 100%;
          height: 50px;
          margin: 5px 0;
          border-radius: 5px;
          border: 0;
          font-size: 17px;
          padding: 0;
          box-sizing: border-box;
        }
      }
    }
  }
}
</style>
