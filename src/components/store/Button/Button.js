import React from 'react'

 const Button = (props)=>{
    return (
      <div className="btn-group" role="group">
      <br></br>
      <button
        type="button"
        id="stars"
        className ={'btn '+ props.class }
        href={`#${props.btn.tabName}`}
        onClick={() => props.changeTab(props.index)}
        data-toggle="tab" >
        <div className="hidden-xs">{props.btn.showName}
        </div>
      </button>
    </div>
    )

}
export default Button