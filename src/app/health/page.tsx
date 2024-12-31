import React from 'react'


const USER_NICKNAME = process.env.USER_NICKNAME
export default function Page() {
  return (
    <div>
        <h1>Hi, {USER_NICKNAME}!</h1>
        <h2>OK</h2>
    </div>
  )
}
