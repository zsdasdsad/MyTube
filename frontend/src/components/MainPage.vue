<script setup>

</script>

<template>
  <div>
    <div>
      <img src="../assets/harosh.jpg" alt="Youtube Logo" class="main_logo" />
      <h1>MyTube</h1>
    </div>
    <div class="header">
      <input type="text" placeholder="Search..." class="search-bar" />
    </div>
  </div>
</template>

<style scoped>

.main_logo {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 15px;
  left: 15px;
}
h1 {
  font-size: 2rem;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 23px;
  left: 75px;
  font-family: sans-serif;
}
.search-bar {
  width: 500px;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 100px;
}
.header {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>