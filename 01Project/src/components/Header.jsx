



import React from 'react'

const Header = () => {
  return (
    <div className='headTop'>
        <img className='headimg' src="/shivababa.png" alt="logo" width={60} height={60} />
        <h1>Om Shanthi</h1>
        {/* <button className='login' type='Login'>Login</button> */}

        <div className='headlist'>
            <ul>
                <li id='home'>Home</li>
                <li id='aboutus'>About us</li>
                <li id='meditation'>Meditation</li>
                <li id='address'>Address</li>
                <li id='gallery'>Gallery</li>
            </ul>
        </div>
    </div>
  )
}

export default Header