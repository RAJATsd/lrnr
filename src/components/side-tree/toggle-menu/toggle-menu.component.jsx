import DotsMenu from "../../../resources/dots-menu/dots-menu.png";
import "./toggle-menu.styles.css";

const ToggleMenu = ({ changeTogglePage, activePage }) => {
  return (
    <div className="toggle-menu">
      <div
        className={`toggle-menu__ele ${activePage === 1 ? "active_tab" : ""}`}
        onClick={() => changeTogglePage(1)}
      >
        All
      </div>
      <div
        className={`toggle-menu__ele ${activePage === 2 ? "active_tab" : ""}`}
        onClick={() => changeTogglePage(2)}
      >
        Board
      </div>
      <div
        className={`toggle-menu__ele ${activePage === 3 ? "active_tab" : ""}`}
        onClick={() => changeTogglePage(3)}
      >
        Graph
      </div>
      <div
        className={`toggle-menu__ele ${activePage === 4 ? "active_tab" : ""}`}
        onClick={() => changeTogglePage(4)}
      >
        Recent
      </div>
      <img
        className="toggle-menu__ele dots-menu-image"
        src={DotsMenu}
        alt="dots-menu"
      />
    </div>
  );
};

export default ToggleMenu;
