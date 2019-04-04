<template>
  <div id="navbar">
    <b-navbar toggleable variant="info" type="light">
      <b-navbar-brand href="#">
        <img
          src="../assets/lower_m.png"
          class="d-inline-block align-top"
          alt="【M】"
        />
        Myキャラ図鑑
      </b-navbar-brand>
      <b-navbar-toggle
        target="nav-text-collapse"
        label="メニュー"
      ></b-navbar-toggle>

      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item type="dark" href="#">ログアウト</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
