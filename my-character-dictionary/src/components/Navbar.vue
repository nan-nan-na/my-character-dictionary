<template>
  <div id="navbar">
    <b-navbar toggleable variant="info" type="light">
      <b-navbar-brand href="#">
        <img
          src="../assets/lower_m.png"
          class="d-inline-block align-top"
          alt="【M】"
        />
        My Charactor Dictionary
      </b-navbar-brand>
      <!-- ログイン機能が作成できなかった場合は以下削除 -->
      <b-navbar-toggle
        target="nav-text-collapse"
        label="Menu"
      ></b-navbar-toggle>

      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item type="dark" href="#">Logout</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
      <!-- ここまで -->
    </b-navbar>
  </div>
</template>
