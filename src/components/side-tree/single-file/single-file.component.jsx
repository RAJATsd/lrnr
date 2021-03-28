import Close from "../../../resources/close/close.png";

import "./single-file.styles.css";

const SingleFile = ({ number, path, deleteFile }) => {
  return (
    <div className="single-file">
      <div>File {number}</div> 
      <img
        src={Close}
        onClick={() => deleteFile(number, path)}
        className="close-button-file"
        alt="close-button"
      />
    </div>
  );
};

export default SingleFile;
