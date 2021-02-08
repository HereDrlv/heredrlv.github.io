import React from 'react';
import "./DirTree.less";

function DirTree(props) {
    const dirs = props.directoires; // : JSON
    // console.log(dirs);
    if (dirs instanceof Array)
        return (
            <ul>
                {Object.keys(dirs).map(
                    (i) => (<li key={dirs[i]} > {dirs[i]} </li>)
                )}
            </ul>
        );
    else
        return  Object.keys(dirs).map(
                    (dir) => (
                        <ul key={dir}>
                            {dir}
                            <DirTree directoires={dirs[dir]} />
                        </ul>)
                )
}

export default DirTree;