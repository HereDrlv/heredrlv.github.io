import React from 'react';
import "./Dirtree.less";

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
        return (
            <ul>
                {Object.keys(dirs).map(
                    (dir) => (<li>
                        <p>{dir}</p>
                        <DirTree directoires={dirs[dir]} />
                    </li>)
                )}
            </ul>
        );
}

export default DirTree;