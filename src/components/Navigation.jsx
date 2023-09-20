import React from 'react'

const Navigation = () => {
  return (
    <div>

    <nav className='container'>
      <div className='logo'> 
        <a href="https://www.nike.com/in/"><img src="/images/l1.ico" alt="logo" /></a>
      </div>
      <ul>
        <a href="https://www.nike.com/in/"><li href="">Menu</li></a>
        <a href="https://www.nike.com/in/retail"><li href="">Location</li></a>
        <a href="https://www.nike.com/in/membership"><li href="">About</li></a>
        <a href="https://www.nike.com/in/help/#contact"><li href="">Contact</li></a>
                
      </ul>
      <a href="https://accounts.nike.com/lookup?client_id=4fd2d5e7db76e0f85a6bb56721bd51df&redirect_uri=https://www.nike.com/auth/login&response_type=code&scope=openid%20nike.digital%20profile%20email%20phone%20flow%20country&state=2062c2d2bce745efbedbcb678294db25&code_challenge=qmvCFwz8dL70vRVuspJzC3Qucpdi3urnxahTlQx1HK4&code_challenge_method=S256"><button>Login</button></a>
    </nav>

    </div>
  )
}

export default Navigation