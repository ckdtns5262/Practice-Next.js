'use client'

import { useState } from "react";

const List = () => {

    let 상품 = ['Ford', 'Lamborghini', 'Avante']
    const [add, setAdd] = useState([0, 1, 2])

    return (
        <div>
            <h4 className="title">상품목록</h4>
            <div className="space-x-2">
                <span>{add[0]}</span>
                <button onClick={() => {
                    let copy = [...add]
                    copy[0]++
                    setAdd(copy)
                }}>+</button>
                <span>{add[1]}</span>
                <button>+</button>
                <span>{add[2]}</span>
                <button>+</button>
            </div>

            {상품.map((name, i) =>
                <div className="food" key={i}>
                    <img src={`/car${i + 1}.jpg`} alt="외제차" />
                    <h4>{name} $40</h4>
                    <span>{add[i]}</span>
                    <div className="space-x-2">
                        <button onClick={() => {
                           let copy = [...add]
                           copy[i] ++ 
                           setAdd(copy)
                        }}>+</button>
                    </div>
                </div>)}
        </div>
    );
}

export default List;