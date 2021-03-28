import { useState } from "react";

import ExpandImage from "../../resources/arrows/expand.jpeg";
import "./side-tree.styles.css";

import ToggleMenu from "./toggle-menu/toggle-menu.component";
import SingleFile from "./single-file/single-file.component";
import SingleCollection from "./single-collection/single-collection.component";

const SideTree = () => {
  const [collection, setCollection] = useState({});
  const [num, setNum] = useState(1);
  const [togglePage, setTogglePage] = useState(1);

  const changeTogglePage = (num) => setTogglePage(num);

  const addACollection = () => {
    setCollection({
      ...collection,
      [num]: {
        numOfCollections: 0,
        currentCollectionNum: 0,
        numOfFiles: 0,
        currentFileNum: 0,
        prev: null,
        level: 1,
        path: [],
        collections: {},
        files: [],
      },
    });
    setNum(num + 1);
  };

  const deleteACollection = (index, path) => {
    console.log(index, path);
    const newCollection = { ...collection };
    let objectRef = newCollection;
    for (let oneStep of path) {
      objectRef = objectRef[oneStep];
      objectRef = objectRef["collections"];
    }
    delete objectRef[index];
    setCollection(newCollection);
  };

  const deleteAFile = (index, path) => {
    const newCollection = { ...collection };
    let objRef = newCollection;
    const pathLength = path.length;
    for (let singleStep in path) {
      objRef = objRef[path[singleStep]];
      if (singleStep < pathLength - 1) {
        objRef = objRef["collections"];
      }
    }
    objRef["numOfFiles"] = objRef["numOfFiles"] - 1;
    objRef["files"] = objRef["files"].filter((el) => el !== index);
    setCollection(newCollection);
  };

  const addASubCollection = (index, path) => {
    const newCollection = { ...collection };
    let objectRef = newCollection;
    for (let oneStep of path) {
      objectRef = objectRef[oneStep];
      objectRef = objectRef["collections"];
    }

    objectRef[index] = {
      ...objectRef[index],
      collections: {
        ...objectRef[index]["collections"],
        [objectRef[index]["currentCollectionNum"] + 1]: {
          numOfCollections: 0,
          currentCollectionNum: 0,
          currentFileNum: 0,
          numOfFiles: 0,
          prev: index,
          level: path.length + 2,
          path: [...path, index],
          collections: {},
          files: [],
        },
      },
      numOfCollections: objectRef[index]["numOfCollections"] + 1,
      currentCollectionNum: objectRef[index]["currentCollectionNum"] + 1,
    };
    setCollection(newCollection);
  };

  const addAFile = (index, path) => {
    const newCollection = { ...collection };
    let objectRef = newCollection;
    for (let oneStep of path) {
      objectRef = objectRef[oneStep];
      objectRef = objectRef["collections"];
    }

    objectRef[index] = {
      ...objectRef[index],
      files: [
        ...objectRef[index]["files"],
        objectRef[index]["currentFileNum"] + 1,
      ],
      numOfFiles: objectRef[index]["numOfFiles"] + 1,
      currentFileNum: objectRef[index]["currentFileNum"] + 1,
    };
    setCollection(newCollection);
  };

  const traverseTree = (node, lastIndex) => {
    const traversingObject = node["collections"];
    const folders = Object.keys(traversingObject).map((subColl) => {
      return (
        <SingleCollection
          path={traversingObject[subColl].path}
          addFile={addAFile}
          key={subColl}
          number={subColl}
          deleteCollection={deleteACollection}
          addSubCollection={addASubCollection}
        >
          {traversingObject[subColl]["numOfCollections"]
            ? traverseTree(traversingObject[subColl], subColl)
            : traversingObject[subColl]["files"].map((file) => (
                <SingleFile
                  key={"f_" + file}
                  number={file}
                  path={[...traversingObject[subColl].path, subColl]}
                  deleteFile={deleteAFile}
                  style={{ width: "100%" }}
                >
                  File
                </SingleFile>
              ))}
        </SingleCollection>
      );
    });

    const files = node["files"].map((file) => (
      <SingleFile
        key={"f_" + file}
        number={file}
        path={[...node.path, lastIndex]}
        deleteFile={deleteAFile}
        style={{ width: "100%" }}
      >
        File
      </SingleFile>
    ));
    return [...folders, ...files];
  };

  return (
    <div className="side-tree">
      <ToggleMenu changeTogglePage={changeTogglePage} activePage={togglePage} />
      <div
        className={`tree-container ${togglePage === 1 ? "show-section" : ""}`}
      >
        <div className="tree-container__options">
          <h5 className="tree-container__options_DFIN">DFIN</h5>
          <div>
            <button
              className="add-collection-button"
              onClick={() => addACollection()}
            >
              +
            </button>
            <img src={ExpandImage} className="expand-image" alt="" />
          </div>
        </div>
        <div className="tree-container__content">
          {Object.keys(collection).map((key) => (
            <SingleCollection
              key={key}
              collection={collection}
              number={key}
              addSubCollection={addASubCollection}
              deleteCollection={deleteACollection}
              addFile={addAFile}
              path={collection[key]["path"]}
            >
              {traverseTree(collection[key], key)}
            </SingleCollection>
          ))}
        </div>
      </div>
      <div className={`board ${togglePage === 2 ? "show-section" : ""}`}>
        This is the board section
      </div>
      <div className={`graph ${togglePage === 3 ? "show-section" : ""}`}>
        This is the graph section
      </div>
      <div className={`recent ${togglePage === 4 ? "show-section" : ""}`}>
        This is the recent section
      </div>
    </div>
  );
};

export default SideTree;
