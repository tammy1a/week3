import React from 'react'

export default function User({id,selected}) {
  return (
    <button id={id} className={selected?"selected":""}>User {id[4]} </button>
  )
}
