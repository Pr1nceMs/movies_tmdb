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
  const [activeItem, setActiveItem] = useState("");

  const [activeDarkMode, setActiveDarkMode] = useState(false);

  const active = activeDarkMode ? "fas fa-moon" : "fas fa-sun";

  const toggleDarkMode = () => {
    setActiveDarkMode((prev) => !prev);
  };

  const bottomMenus = [
    { name: "Parametres", icon: "fas fa-cog", path: "/settings" },
    {
      name: "Mode sombre",
      icon: active,
      path: "/darkmode",
      onClickDarkMode: toggleDarkMode,
    },
    { name: "Deconnexion", icon: "fas fa-sign-out-alt", path: "/logout" },
    // { name: "favoris", icon: "fas fa-heart", path: "/favorites" },
  ];
  const mySpace = [
    { name: "Accueil", icon: "fas fa-home", path: "/" },
    { name: "Mes films favoris", icon: "fas fa-heart", path: "/favorites" },
  ];
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
        classList="fa-solid fa-clapperboard"
      />
      {/* <!-- Elements de menus --> */}
      <ScrollArea>
        <Menu classnames={MenuStyles.menu}>
          <Divider label="Mon espace" />
          {mySpace.map(({ name, icon, path }) => (
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
          <Divider label="Settings" />
          {bottomMenus.map(({ name, icon, path, onClickDarkMode }) => (
            <ItemList
              key={path}
              id={name}
              path={path}
              icon={icon}
              text={name}
              onClickDarkMode={() => onClickDarkMode()}
              isActive={activeItem === name}
              onClick={setActiveItem}
              isCollapsed={isCollapsed}
            />
          ))}
        </Menu>
      </ScrollArea>
    </aside>
  );
};

export default Sidebar;
