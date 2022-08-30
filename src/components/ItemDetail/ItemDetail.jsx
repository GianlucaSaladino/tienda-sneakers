import React from "react"


export const ItemDetail = ({data}) => {
    return (
        <div className="container">
        <div className="detail">
            <img className="detailImage" src={data.image} alt="" />
            <div className="content">
                <h1>{data.name}</h1>
        </div>
    </div>
</div>
    )
}