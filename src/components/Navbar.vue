<template>
  <header>
    <nav class="nav">
      <div class="container">
        <div class="nav-heading">
          <button class="toggle-nav" data-toggle="open-navbar1"></button>
          <a class="brand">OpenBeak</a>
        </div>
        <div class="menu" id="open-navbar1">
          <ul class="list">
            <li><a href="#">AAA</a></li>
            <li><a href="#">BBB</a></li>
            <li><a href="#">CCC</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>
  * {
    padding: 0;
    margin: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    outline: none;
    font-family: arial;
  }
  .container:after, .container:before {
    content: "";
    display: block;
    clear: both;
  }

  /* Start navbar */
  .nav {
    margin : 0 auto 0 auto;
    width : 1920px;
    background-color: #f8f8f8;
    border-bottom: 1px solid #ececec;
    min-height: 50px;
    height: auto;
  }
  .nav .nav-heading {float: left}

  .nav .nav-heading .toggle-nav {
    padding: 2px 10px;
    border-radius: 5px;
    border: none;
    display: none;
    background-color: transparent;
  }
  .nav .nav-heading > a {
    text-decoration: none;
    color: #000;
    line-height: 60px;
    font-weight: 400;
    font-size: 19px;
  }

  /* Start menu */
  .nav .menu {
    float: right;
  }
  .nav .menu:after {
    content: "";
    clear: both;
    display: block;
  }
  .nav .list {
    float: right;
    margin: 0;
  }
  .nav .list > li {
    float: left;
    list-style: none;
  }
  .nav .list > li > a {
    color: #555;
    text-decoration: none;
    display: block;
    line-height: 60px;
    padding: 0 10px;
  }
  .nav .list > li > a:hover,
  .nav .list > li.active > a {
    color: #333
  }
</style>
