import React from 'react'

export default function About(props) {
  return (
    <aside>
        <img src = {props.image} alt = "blog logo"></img>
        <p>{props.about}</p>
    </aside>
  )
}
