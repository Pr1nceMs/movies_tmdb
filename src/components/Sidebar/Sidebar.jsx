import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import ItemList from "./Menu/ItemList/ItemList";
import Menu from "./Menu/Menu";
import Logo from "./Logo/Logo";
import LogoStyles from "./Logo/Logo.module.css";
import MenuStyles from "./Menu/Menu.module.css";
import SearchStyles from "./Search/Search.module.css";
import Search from "./Search/Search";
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
          {/* <Search classnames={SearchStyles.searchBox} /> */}
          <ItemList
            id="popular"
            classnames="active"
            classList="fas fa-home"
            text="Populaire"
            isActive={activeItem === "popular"}
            onClick={setActiveItem}
          />
          <ItemList
            classList="fas fa-chart-bar"
            text="Mieux notés"
            id="topRated"
            isActive={activeItem === "topRated"}
            onClick={setActiveItem}
          />
          <ItemList
            classList="fas fa-tasks"
            text="A venir"
            id="upcoming"
            isActive={activeItem === "upcoming"}
            onClick={setActiveItem}
          />
          <ItemList
            classList="fas fa-calendar"
            text="Recompenses"
            id="awards"
            isActive={activeItem === "awards"}
            onClick={setActiveItem}
          />
        </Menu>
        <Menu classnames={MenuStyles.bottomMenus}>
          <Divider label="genres" />
          <ItemList
            classList="fas fa-film"
            text="Action"
            id="action"
            isActive={activeItem === "action"}
            onClick={setActiveItem}
          />
          <ItemList
            classList="fas fa-film"
            text="aventure"
            id="adventure"
            isActive={activeItem === "adventure"}
            onClick={setActiveItem}
          />
          <ItemList
            classList="fas fa-film"
            text="Animation"
            id="animation"
            isActive={activeItem === "animation"}
            onClick={setActiveItem}
          />
          <ItemList
            classList="fas fa-laugh"
            text="Comedie"
            id="comedy"
            isActive={activeItem === "comedy"}
            onClick={setActiveItem}
          />
          <ItemList
            classList="fas fa-film"
            text="Crime"
            id="crime"
            isActive={activeItem === "crime"}
            onClick={setActiveItem}
          />
          <ItemList
            classList="fas fa-film"
            text="Drame"
            id="drama"
            isActive={activeItem === "drama"}
            onClick={setActiveItem}
          />
          <ItemList
            classList="fas fa-film"
            text="Fantaisie"
            id="fantasy"
            isActive={activeItem === "fantasy"}
            onClick={setActiveItem}
          />
          <ItemList
            classList="fas fa-film"
            text="Horreur"
            id="horror"
            isActive={activeItem === "horror"}
            onClick={setActiveItem}
          />
          <ItemList
            classList="fas fa-film"
            text="Romance"
            id="romance"
            isActive={activeItem === "romance"}
            onClick={setActiveItem}
          />
          <ItemList
            classList="fas fa-film"
            text="Science-fiction"
            id="scienceFiction"
            isActive={activeItem === "scienceFiction"}
            onClick={setActiveItem}
          />
        </Menu>
        {/* <!-- Bottom menus --> */}
        <Menu classnames={MenuStyles.bottomMenus}>
          <Divider label="" />
          <ItemList
            classList="fas fa-cog"
            text="Parametres"
            id="settings"
            isActive={activeItem === "settings"}
            onClick={setActiveItem}
          />
          <ItemList
            id="darkmode"
            classList="fas fa-moon"
            text="Mode sombre"
            isActive={activeItem === "darkmode"}
            onClick={setActiveItem}
          />
          <ItemList
            classList="fas fa-sign-out-alt"
            text="Deconnexion"
            id="logout"
            isActive={activeItem === "logout"}
            onClick={setActiveItem}
          />
        </Menu>
      </ScrollArea>
    </aside>
  );
};

export default Sidebar;
