import React from 'react';
import "./DirTree.less";

function DirTree(props) {
    const dirs = props.directoires;
    // console.log(dirs);
    if (dirs instanceof Array)
        return (
            <ul>
                {Object.keys(dirs).map(
                    (i) => (<li > {dirs[i]} </li>)
                )}
            </ul>
        );
    else
        return  Object.keys(dirs).map(
                    (dir) => (<ul>
                        <p>{dir}</p>
                        <DirTree directoires={dirs[dir]} />
                    </ul>)
                )
}

export default DirTree;