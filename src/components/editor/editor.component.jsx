import "./editor.styles.css";

import EditorText from './editor-text/editor-text.component';

const Editor = () => {
  return (
    <div className="editor">
      <div className="editor-directory">
        collection 1/collection 1.1/collection 1.1.1
      </div>
      <div className="edior-heading-and-text">
        <h1>WYSIWYG editor</h1>
        <EditorText />
      </div>
    </div>
  );
};

export default Editor;
