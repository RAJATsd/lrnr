import './main-content.styles.css';

import SideTree from '../side-tree/side-tree.component';
import Editor from '../editor/editor.component';

const MainContent = () => {
    return (
        <main className="main-content">
            <SideTree />
            <Editor />
        </main>
    )
}

export default MainContent;