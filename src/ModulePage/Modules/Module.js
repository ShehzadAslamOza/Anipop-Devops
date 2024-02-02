import React from 'react'

export default function Module(props) {
  return (
    <div
      className="module-card"
    >
      <div></div>
      <h1 className="module-title">{props.title}</h1>
      <p className="module-desc">{props.description}</p>
      <div></div>
    </div>
  )
}




