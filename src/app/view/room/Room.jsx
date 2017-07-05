import React from 'react'

const Room = (props) => {
  const {room} = props
  return (
    <div name="room">
      <h1 className="title is-1">
        Room: {room}
      </h1>
    </div>
  )
}

export default Room
