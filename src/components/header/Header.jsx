import React, {Component} from 'react';
import Menu from '../menu/Menu'


const Header=(props)=>{
        return(
            <header className="header">
                <div className={'container'}>
                    <div className={'row align-items-center'}>
                        <div className={'col-3'}>
                            <img className="header__logo" src={require('../../img/logo.svg')} alt='logo'/>
                        </div>

                        <div className={'col-9'}>
                            <Menu menu={props.menu} />

                        </div>
                    </div>
                </div>
            </header>
        )
}

export default Header;