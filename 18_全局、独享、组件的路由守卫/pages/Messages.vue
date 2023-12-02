<template>
  <div>
    <ul>
      <li>messages<input type="text"></li>
      <li>messages<input type="text"></li>
      <li>messages<input type="text"></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name:'Messages',
        beforeDestroy(){
          console.log("Messages即将被销毁！");
        },
        activated() {
          console.log('activated被调用');
        },
        deactivated() {
          console.log('deactivated被调用');
        }
    }
</script>

<style>

</style>