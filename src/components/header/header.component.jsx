import { ReactComponent as MenuLine } from "../../resources/menu-line/menu-line.svg";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

import Avatar from "@material-ui/core/Avatar";
import SearchImage from "../../resources/search/search.png";
import NotificationsIcon from "@material-ui/icons/Notifications";
import "./header.styles.css";

const Header = () => {
  return (
    <header className="main-header">
      <div className="menu-line-and-search">
        <MenuLine className=" menu-line-and-search__elem menu-line-svg" />
        <div className="menu-line-and-search__elem icon-and-input">
          <img src={SearchImage} className="searchImage" alt="searchImage" />
          <input
            className="  menu-line-search  "
            type="text"
            placeholder="search..."
          />
        </div>
      </div>
      <div className="invite-and-avataar">
        <div className="invite-and-avatar-ele">
          <PersonAddIcon /> <div>INVITE TEAM MEMBER</div>
        </div>
        <NotificationsIcon className="invite-and-avatar-ele"/>
        <Avatar className="invite-and-avatar-ele" style={{ background: "purple" }}>FL</Avatar>
      </div>
    </header>
  );
};

export default Header;
