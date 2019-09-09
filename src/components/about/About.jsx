import React, {Component} from 'react';

const About = () =>{
    return(
        <div className="about">
            <div className={'container pb-5'}>
                <div className={'row p-0 align-items-center'}> 
                    <div className={'col-12 mt-5 mb-5'}>
                        <h2 className="about__title">
                            ОБО МНЕ
                        </h2>
                    </div>
                    <div className={'col-6'}>
                        <img className="about__img" src={require('../../img/about.jpg')} alt='me'/>
                    </div>

                    <div className={'col-6 text-left'}>
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