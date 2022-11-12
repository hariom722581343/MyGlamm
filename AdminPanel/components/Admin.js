const admin = () => {
  return `<div id="Anav">
    <a href="../index.html" ><img class="logo" src="./scripts/Picsart_2.png" alt=""></a>

  <input type="text" id="Asearch" placeholder="  Search" /></input>
  <!-- search box -->
  <input type="submit" id="Asearch_button"> </input>

    <div class="profile">
      <img
        src="https://cdn-icons-png.flaticon.com/128/236/236831.png"
        class="pro-img"
      />
      <p id="admin_name"></p>
    </div>
  </div>

  <div id="mySidenav" class="sidenav">

  <div id="Admin_panel">
  <img src="https://cdn-icons-png.flaticon.com/128/8030/8030198.png" alt="">
  <p>Admin Panel</p>
  </div>

    <a href="./Dash-board.html" class="icon-a"
      ><i class="fa fa-dashboard icons"></i> Dashboard</a
    >
    <a href="./AddProduct.html" class="icon-a"
      ><i class="fa fa-list icons"></i> Add Products</a
    >
    <a href="./Shampoo.html" class="icon-a"
      ><i class="fa fa-shopping-bag icons"></i> Products</a
    >
    <a href="./Login.html" class="icon-a"
      ><i class="fa fa-user icons"></i> Login</a
    >
  </div>`;
};

export { admin };
