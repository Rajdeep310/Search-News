import React from 'react';
import '../css/styles.css'


const Header = (props)=>{
    

        return(
        <header>
            <div className='logo'>The Times Of India</div>
            <input type="text" placeholder='Search' onChange={props.keyword}/>
          
        </header> 
        )
         
    

}

export default Header;