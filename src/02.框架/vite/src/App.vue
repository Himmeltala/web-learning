<script setup>
import { ref } from "vue";
import { io } from "socket.io-client";
import { ChatRoomStandard } from "./js/standard/index.js";

let identifier = ref("");
let msgList = ref([]); // 响应式数据，别人发送的数据
let message = ref("");
let username = ref("游客");
let popupColor = ref("#E9ECED");
let avatarUrl = ref("https://img2.baidu.com/it/u=1122189152,3409253069&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=499");
const socket = io("http://localhost:3000");

socket.on("connect", () => {
  identifier.value = socket.id;
});

socket.on("transfer", (e) => {
  msgList.value.push(e);
});

function send() {
  let standard = new ChatRoomStandard(username.value, message.value, avatarUrl.value, popupColor.value);
  msgList.value.push(standard);
  socket.emit("to-server", standard);
  message.value = "";
}
</script>

<template>
  <div class="app">
    <div class="config">
      <div class="item username">
        <div class="label">用户名</div>
        <el-input v-model="username"></el-input>
      </div>
      <div class="item avatar">
        <div class="label">头像</div>
        <el-input v-model="avatarUrl"></el-input>
      </div>
      <div class="item popup-color">
        <div class="label">气泡色</div>
        <el-input v-model="popupColor"></el-input>
      </div>
    </div>
    <div class="wrap">
      <div class="identifier">Your identifier: {{ identifier }}</div>
      <div class="message-list">
        <div class="msg-item others" :class="'item-' + key" v-for="(value, key) in msgList" :key="key">
          <div class="right"><img class="avatar" :src="value._avatar" alt="oops!" /></div>
          <div class="left">
            <div class="msg-holder">{{ value._username }}</div>
            <div class="msg-popup" :style="{'--popup-color': value._popupColor}">{{ value._message }}</div>
          </div>
        </div>
      </div>
      <div class="chat-menu">
        <div class="send-menu">
          <el-input class="msg-input" v-model="message"></el-input>
          <el-button class="send-btn" @click="send">Send</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app {
  color: #4D4949;
  margin: 0 auto;
  width: 800px;
  height: 580px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: flex-start;
}

.config {
  height: 100%;
  padding: 0 10px;
  border-radius: 4px;
  border: 1px solid #CCCCCC;
  width: 30%;
}

.config .item {
  margin-bottom: 15px;
}

.config .label {
  margin-bottom: 5px;
}

.wrap {
  height: 100%;
  width: 70%;
  border: 1px solid #CCCCCC;
  border-radius: 4px;
}

.identifier {
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 50px;
  background-color: #F4F4F4;
}

.message-list {
  height: 500px;
  overflow-x: auto;
}

.message-list .msg-item {
  display: flex;
  margin-top: 20px;
  padding-right: 50px;
  padding-left: 20px;
}

.message-list .right {
  margin-right: 20px;
  width: 10%;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: flex-start;
}

.message-list .left .msg-popup {
  width: auto;
  margin-top: 5px;
  background-color: var(--popup-color);
  padding: 8px 8px;
  box-sizing: border-box;
  border-radius: 8px;
  word-break: break-word;
  word-wrap: break-word;
  position: relative;
}

.message-list .left .msg-popup::before {
  position: absolute;
  content: "";
  top: 10px;
  left: -10px;
  border-top: 2px solid transparent;
  border-right: 12px solid var(--popup-color);
  border-bottom: 10px solid transparent;
}

.message-list .avatar {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  margin-top: 10px;
}

.send-menu {
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}
</style>
