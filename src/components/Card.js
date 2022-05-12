import React from "react";

function Card() {
    return (
        <div className="card">
            <div className="favorite">
                <img className="heart" src="/img/heart-unliked.svg" alt="unliked"></img>
            </div>
            <img width={133} height={112} src="/img/image1.jpg" alt="sneakers"></img>
            <h5 className="sneakerName">Мужские кроссовки<br /> Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-content-between align-items-center" >
                <div className="d-flex flex-column">
                    <span className="sneacerPrice">Цена:</span>
                    <b>12 999 руб.</b>
                </div>
                <button className="button"><img width={11} height={11} src="/img/plus.svg" alt="plus"></img></button>
            </div>
        </div>
    )
}

export default Card