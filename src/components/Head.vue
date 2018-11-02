<template>
  <div class="header">
    <!-- start header -->
    <header>
      <div class="navbar navbar-default navbar-static-top">
        <div class="container">
          <div class="navbar-header">
            <router-link to="/" class="navbar-brand"><img src="../assets/images/logo.png" alt="logo"/></router-link>
          </div>
          <div class="">
            <ul class="nav">
              <li><router-link to="/" class="active home">Home</router-link></li>
              <li><router-link to="/about">About Us</router-link></li>
              <li><router-link to="/courses">Courses</router-link></li>
              <li><router-link to="/portfolio">Portfolio</router-link></li>
              <li><router-link to="/pricing">Pricing</router-link></li>
              <li><router-link to="/contact">Contact</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <!-- end header -->
  </div>
</template>

<script>
  //引用jquery

  $(function () {
    $('.home').click(function () {
      // alert(1)
    })
  });
    export default {
        name: "Head",
      data(){
          return {

          }
      },
      methods:{

      }
    }
</script>

<style scoped lang="scss">
  $color: #555;
  a{
    color: $color;
    padding: 10px 20px;
  }

</style>
