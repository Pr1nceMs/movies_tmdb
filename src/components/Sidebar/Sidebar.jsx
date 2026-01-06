import React from "react";

const Sidebar = () => {
  return (
    <aside class="sidebar">
      <div class="logo">
        <i class="fas fa-chart-line"></i>
        <span>geStock</span>
      </div>
      {/* <!-- Elements de menus --> */}
      <ul class="menu">
        <li class="search-box">
          <i class="fas fa-search"></i>
          <input type="search" placeholder="Rechercher..." />
        </li>
        <li class="active">
          <i class="fas fa-home"></i>
          <span>Acceuil</span>
        </li>
        <li>
          <i class="fas fa-chart-bar"></i>
          <span>Statistiques</span>
        </li>
        <li>
          <i class="fas fa-tasks"></i>
          <span>Projet</span>
        </li>
        <li>
          <i class="fas fa-calendar"></i>
          <span>Analyses</span>
        </li>
        <li class="notification-msg">
          <i class="fas fa-envelope"></i>
          <span>Messages</span>
          <span class="notification">5</span>
        </li>
        <li>
          <i class="fas fa-cog"></i>
          <span>Parametres</span>
        </li>
      </ul>

      {/* <!-- Bottom menus --> */}
      <ul class="bottom-menus">
        <li id="ToggleDarkmode">
          <i class="fas fa-moon"></i>
          <span>Mode sombre</span>
        </li>
        <li>
          <i class="fas fa-sign-out-alt"></i>
          <span>Deconnexion</span>
        </li>
      </ul>

      {/* <!-- </div> --> */}
    </aside>
  );
};

export default Sidebar;
