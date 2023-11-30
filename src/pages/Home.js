import React from 'react'

import "../Colours.css"
import "./Home.css"

export const Home = () => {
  return (
    <>
      <div className='introduction'>
        <span className='large-hello'>Hi
          <span role='img' aria-label='Waving Emoji'>👋 </span>
          {/* <span>!</span> */}
          I'm Connor
        </span>
        <div className='short-intro'>
          <span className='short-intro-text'>An Embedded Electronics Designer and Computer Engineering graduate from Windsor Ontario</span>
        </div>
      </div>
    </>
  )
}
