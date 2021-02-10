import React from 'react';
import "./DirTree.less";

const DirTree = (props) =>
(<ul>
    {props.directoires.map(
        (dir) => (
            dir.type == 'directory' ?
                <div key={dir.name}>
                    {dir.name}
                    <DirTree directoires={dir.contents} />
                </div> :
                <li key={dir.name}>{dir.name}</li>
        )
    )}
</ul>)

export default DirTree;