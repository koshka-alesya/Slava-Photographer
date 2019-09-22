import React, {Component} from 'react';


const About = () =>{
    return(
        <div className="about" id="about">
            <div className={'container-fluid px-5'}>
                <div className={'row p-0 align-items-center'}> 
                    <div className={'col-12 my-md-5 my-4'}>
                        <h2 className="about__title">
                            ОБО МНЕ
                        </h2>
                    </div>
                    <div className={'col-md-6 col-12 p-0'}>
                        <img className="about__img" src={require('../../img/about.jpg')} alt='me'/>
                    </div>

                    <div className={'col-md-5 text-left col-12 p-0 pt-4 pt-md-0'}>
                        <span className="about__description">
                            Всем привет! Рад видеть Вас на моем сайте. Я начал заниматься фотографией с 2017 года. Тогда был мой первый фотоотчет концерта музыкальной группы, после которого меня порекомендовали местному клубу в качестве штатного фотографа. И вот тогда моё хобби переросло в работу.

                        </span>
                    </div>
                 
                </div>
            </div>
        </div>
    )
}

export default About;