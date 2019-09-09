import React, {Component} from 'react';
import Button from '../button/Button';
import { photos } from "../photos/photos.js";
import Photos from "../photos/Photos";

class Portfolio extends Component
{
    constructor(props){
        super(props);
        this.state={
            activePlace: 0,
        }
    }
    render(){
    
    const activePlace=this.state.activePlace;



    return(
        <div className="portfolio">
        <nav>
            <ul className="portfolio__list">
                {this.props.portfolio.map((item, index)=>(
                    <li className="portfolio__item" key={item.id}>
                        <Button type= {'button'} key ={index} className={'btn-light'} text={item.text} onclick={
                            ()=>{
                                this.setState({ activePlace:index});
                        
                            }}/>
                    </li>
                )
             )
                }
            </ul>
        </nav>

        
        
            <Photos key={activePlace} photos={photos[activePlace]}/>
        </div>
    )
}
}

export default Portfolio;