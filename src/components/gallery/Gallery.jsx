import React, {Component} from 'react';
import Portfolio from '../portfolio/Portfolio';



const Gallery = (props) =>{
    return(
        <div className="gallery my-5">
        
            <div className={'container-fluid px-3'}>
                <div className={'row p-0 align-items-center'}>
                    <div className={'col-12 pb-md-5 pb-4'}>
                        <h2 className="gallery__title">
                        ПОРТФОЛИО
                        </h2>
                    </div>
                    <div className={'col-12'}>
                        <Portfolio portfolio={props.portfolio} />
                    </div>

                    


                </div>
            </div>
        </div>
    )
}

export default Gallery;