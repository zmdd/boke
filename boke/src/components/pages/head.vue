<template>
    <div class="header">
        <span class="left">个人博客</span><span class="right">当前登录账户 : root</span>
    </div>
</template>

<script>
export default {
  name: 'head',
  data() {
      return {
        activeNames: ['1']
      };
    }
}
</script>

<style scoped>
    .header{
        width: 100%;
        height: 50px;
        background: #ccc;
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>
