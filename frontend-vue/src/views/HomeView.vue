<script setup></script>

<template>
  <div>
    <div class="navbar">
      <div class="g1">Home</div>
      <div class="g2">About</div>
    </div>

    <div class="parent">
      <div class="home">
        <div class="card1">
          <h1>Lee</h1>
        </div>
      </div>
      <div class="about">
        <div class="c1">
          <div class="card2">Loe mel</div>
        </div>
        <div class="c2"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card2 {
  width: 300px;
  height: 300px;
  background-color: brown;
  padding: 30px;
  margin-top: 400px;
}
.card1 {
  width: 240px;
  height: 240px;
  border-radius: 20px;
  background-color: gray;
  padding-left: 5px;
  padding-top: 20px;
}
.navbar {
  height: 25px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  background: blue;
}
.parent {
  height: 100vh;
  display: flex;
}
.home {
  width: 50%;
  height: 100%;
  background-color: aqua;
  display: flex;
  justify-content: center;
  align-items: center;
}
.about {
  width: 50%;
  height: 100%;
}
.c1 {
  width: 100%;
  height: 50%;
  background-color: blueviolet;
  display: flex;
  align-items: center;
  justify-content: center;
}
.c2 {
  width: 100%;
  height: 50%;
  background-color: gold;
}
</style>
