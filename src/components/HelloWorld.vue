<template>
  <div id="hello">
    <a
      href="#"
      @click.prevent="signout"
    >登出</a>
  </div>
</template>

<script>
  export default {
    data: () => ({}),
    methods: {
      signout() {
        const api = `${process.env.APIPATH}/logout`;
        const vm = this;
        this.$http.post(api).then(res => {
          console.log(res.data);
          if (res.data.success === true) {
            vm.$router.push("/login");
          }
        });
      }
    }
  };
</script>

<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
