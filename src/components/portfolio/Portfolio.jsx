import React, {Component} from 'react';
import Button from '../button/Button';
import { photo } from '../photos/photo';
import Phot from '../photos/Phot';


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
                        

                            <button type={'button'}
                                            className="portfolio__btn"
                                            
                                            onClick={ () =>{
                                                this.setState({ activePlace:index});
                                
                                            }
                                            }> {item.text}
                                            </button>

                            
                    </li>
                )
             )
                }
            </ul>
        </nav>

        
        <Phot key={activePlace} photos={photo[activePlace]} />
            
        </div>
    )
}
}

export default Portfolio;