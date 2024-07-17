import React, { useState } from 'react'
import "./memory.css"

const Memory = () => {
    const [cube, setCube] = useState([
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ]);

    const [arr, setArr] = useState([]);

    const handleClick = (rowIndex, colIndex) => {
        if (cube[rowIndex][colIndex] === 1) {
            const update = [...cube];
            update[rowIndex][colIndex] = 0;
            setCube(update);
            const newInd = rowIndex * 3 + colIndex;
            setArr(prev => [...prev, newInd]);
        }
    };

    const resetBlocksInOrder = (index) => {
        if (index < arr.length) {
            if(index==-1) return;
            setTimeout(() => {
                setCube(prevCube => {
                    const newCube = [...prevCube];
                    const clickIndex = arr[index];
                    const rowIndex = Math.floor(clickIndex / 3);
                    const colIndex = clickIndex % 3;
                    newCube[rowIndex][colIndex] = 1;
                    return newCube;
                });
                resetBlocksInOrder(index - 1);
            }, 1000); // Adjust the delay as needed
        } else {
            setArr([]); // Reset the index array after all blocks are reset
        }
    };
    

    if (arr.length === 9) {
        resetBlocksInOrder(8); // Start resetting from the last index
        setArr([]); // Reset the index array
    }

    return (
        <div>
            <h1>Push Pop In Order</h1>
            <table>
                <tbody>
                    {cube.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((col, colIndex) => (
                                <td
                                    className={cube[rowIndex][colIndex] === 1 ? "cube" : "cube active"}
                                    key={colIndex}
                                    onClick={() => handleClick(rowIndex, colIndex)}
                                ></td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Memory;
