import React from 'react'

const AppWrap = (Component) => function HOC() {
  return (
    <div 
      className='app__container'
    >
      <div className='app__wrapper app__flex'>
        <Component />
      </div>
    </div>
  )
}

export default AppWrap 