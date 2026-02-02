import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import ItemList from "./Menu/ItemList/ItemList";
import Menu from "./Menu/Menu";
import Logo from "./Logo/Logo";
import LogoStyles from "./Logo/Logo.module.css";
import MenuStyles from "./Menu/Menu.module.css";
import { categories, genres } from "../../constants/movieCategories";
import Divider from "../Divider/Divider";
import ScrollArea from "../ScrollArea/ScrollArea";
const Sidebar = ({ isCollapsed }) => {
  const [activeItem, setActiveItem] = useState("popular");
  return (
    <aside
      className={`${styles.sidebar} ${
        isCollapsed ? styles.sidebarCollapsed : ""
      }`}
    >
      <Logo
        classNames={LogoStyles.logo}
        text="Filmpire"
        isCollapsed={isCollapsed}
        classList="fas fa-chart-line"
      />
      {/* <!-- Elements de menus --> */}
      <ScrollArea>
        <Menu classnames={MenuStyles.menu}>
          <Divider label="categories" />
          {categories.map(({ name, icon, path }) => (
            <ItemList
              key={path}
              id={name}
              path={path}
              icon={icon}
              text={name}
              isActive={activeItem === name}
              onClick={setActiveItem}
              isCollapsed={isCollapsed}
            />
          ))}
        </Menu>
        <Menu classnames={MenuStyles.bottomMenus}>
          <Divider label="genres" />
          {genres.map(({ id, name, icon }) => (
            <ItemList
              key={id}
              id={name}
              path={`/genre/${id}`}
              icon={icon}
              text={name}
              isActive={activeItem === name}
              onClick={setActiveItem}
              isCollapsed={isCollapsed}
            />
          ))}
        </Menu>
        {/* <!-- Bottom menus --> */}
        <Menu classnames={MenuStyles.bottomMenus}>
          <Divider label="" />
          <ItemList
            icon="fas fa-cog"
            text="Parametres"
            id="settings"
            path="/settings"
            isActive={activeItem === "settings"}
            onClick={setActiveItem}
            isCollapsed={isCollapsed}
          />
          <ItemList
            id="darkmode"
            icon="fas fa-moon"
            text="Mode sombre"
            path="/darkmode"
            isActive={activeItem === "darkmode"}
            onClick={setActiveItem}
            isCollapsed={isCollapsed}
          />
          <ItemList
            icon="fas fa-sign-out-alt"
            text="Deconnexion"
            id="logout"
            path="/logout"
            isActive={activeItem === "logout"}
            onClick={setActiveItem}
            isCollapsed={isCollapsed}
          />
        </Menu>
      </ScrollArea>
    </aside>
  );
};

export default Sidebar;
