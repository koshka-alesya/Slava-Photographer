import React, {Component} from 'react';
import Icon from '../icon/Icon'

const Main = (props)=>{
    return(
        <main className="main">
            <div className = {'container'}>
                <div className = {'row'}>
                    <div className={'col-7 offset-3'}>
                        <h1 className="main__name1"> HORIZON </h1>
                        <h5 className="main__name2"> PHOTOS </h5>
                        <span className="main__hello">
                        Привет. Меня зовут Слава и я фотограф, который тебе нужен.
                        </span>

                        
                    </div>
                    <div className={'col-9 offset-3 mt-5'}>
                        <Icon icons={props.icons}/>

                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;