import React from "react";
import styles from "./Sidebar.module.css";
import ItemList from "./Menu/ItemList/ItemList";
import Menu from "./Menu/Menu";
import Logo from "./Logo/Logo";
import LogoStyles from "./Logo/Logo.module.css";
import MenuStyles from "./Menu/Menu.module.css";
import SearchStyles from "./Search/Search.module.css";
import Search from "./Search/Search";
const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <Logo
        classNames={LogoStyles.logo}
        text="Filmpire"
        classList="fas fa-chart-line"
      />
      {/* <!-- Elements de menus --> */}
      <Menu classnames={MenuStyles.menu}>
        <Search classnames={SearchStyles.searchBox} />
        <ItemList classnames="active" classList="fas fa-home" text="Acceuil" />
        <ItemList classList="fas fa-chart-bar" text="Statistiques" />
        <ItemList classList="fas fa-tasks" text="Projet" />
        <ItemList classList="fas fa-calendar" text="Analyses" />
        <ItemList classList="fas fa-envelope" text="Messages" />
        <ItemList classList="fas fa-cog" text="Parametres" />
      </Menu>
      <Menu classnames={MenuStyles.bottomMenus}>
        <ItemList
          id="ToggleDarkmode"
          classList="fas fa-moon"
          text="Mode sombre"
        />
        <ItemList classList="fas fa-sign-out-alt" text="Deconnexion" />
      </Menu>
      {/* <!-- Bottom menus --> */}
    </aside>
  );
};

export default Sidebar;
