import { useState } from "react";

import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import DownArrow from "../../../resources/arrows/down-arrow.png";
import UpArrow from "../../../resources/arrows/up-arrow.png";
import Close from "../../../resources/close/close.png";

import "./single-collection.styles.css";

const SingleCollection = ({
  number,
  addSubCollection,
  addFile,
  path,
  collection,
  deleteCollection,
  children,
}) => {
  const [showChildren, setShowChildren] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="single-collection">
      <div
        className="collection-upper-and-buttons"
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
      >
        <div className="single-collection__name">
          <img
            src={DownArrow}
            onClick={() => setShowChildren(!showChildren)}
            className={`collection-arrow ${showChildren ? "" : "hidden-part"}`}
            alt="downArrow"
          />
          <img
            src={UpArrow}
            onClick={() => setShowChildren(!showChildren)}
            className={`collection-arrow ${showChildren ? "hidden-part" : ""}`}
            alt="upArrow"
          />
          Collection{" "}
          {path.length
            ? path.reduce((acc, curr) => acc + "." + curr) + "." + number
            : number}
        </div>
        <div
          className={`single-collection__buttons ${
            showMenu ? "show-content" : ""
          }`}
        >
          <button
            className="single-collection__buttons-button add-file-button"
            onClick={() => {
              setShowChildren(true);
              addFile(number, path);
            }}
          >
            +
          </button>
          <AddToPhotosIcon
            className="single-collection__buttons-button"
            onClick={() => {
              setShowChildren(true);
              addSubCollection(number, path);
            }}
          />
          <img
            src={Close}
            onClick={() => deleteCollection(number, path)}
            className=" single-collection__buttons-button close-button"
            alt="close-button"
          />
        </div>
      </div>
      <div className={`inside_elements ${showChildren ? "" : "hidden-part"}`}>
        {children}
      </div>
    </div>
  );
};

export default SingleCollection;
