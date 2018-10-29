import React from 'react'

const Item = (props) => {
  return (
    <div className="col-md-3">
        <h3>{props.item.name}</h3>
        <img src={props.item.imgSrc_jpg} alt='true'/>
        <button className="btn btn-default" onClick={()=>props.transferItem(props.item)}>Change</button>
    </div>
  )
}
export default Item

