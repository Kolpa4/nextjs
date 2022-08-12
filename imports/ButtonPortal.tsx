import React from 'react'
import Link from 'next/link';


function ButtonPortal() {

  return (
    <div className="App">
      <button style ={{
        display:'flex',
        position:'absolute',
        left: '50%', 
        top: '50%',
        width: '200px',
        height: '100px',
        backgroundColor: 'white',
        transform: 'translate(-50%, -50%)',
        fontSize:34,
        justifyContent: 'center'
        }}
        ><Link href="/Casino"><a>ПОРТАЛ</a></Link></button>
      <div/>
    </div>
  );
}

export default ButtonPortal;