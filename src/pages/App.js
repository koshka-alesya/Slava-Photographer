import React, {Component} from 'react';
import logo from '../logo.svg';
import './App.scss';


import Menu from '../components/menu/Menu';
import Icon from '../components/icon/Icon';
import Img from '../components/img/Img';
import Header from '../components/header/Header';
import Main from '../components/main/Main';
import About from '../components/about/About';
import Gallery from '../components/gallery/Gallery';

import Burger from '../components/burger-menu/Burger';

class App extends Component{
  constructor(props){
    super(props);


    this.state={
      menu:[
        {
          url:'#',
          title:'Главная',
        },
        {
          url:'#',
          title:'Обо мне',
        },
        {
          url:'#',
          title:'Портфолио',
        }

      ],

    icons:[
      {
        url:'#',
        src: require('../img/vk.svg'),
      },
      {
        url:'#',
        src: require('../img/insta.svg'),
      },
      {
        url:'#',
        src: require('../img/facebook.svg'),
      },
    ],
    portfolio:[
      {
        id:'portret',
        text:'Портретная съемка',
        active: true,
      },
      {
        id: 'concert',
        text: 'Концерты',
        active: false,
      }

    ]
    }
  }

  render(){
    return(
      <div className = "App">
        <div className = {'container-fluid px-3'}>
          <div className={'row'}>
            <div className ={'col-lg-8 col-md-6 col-12 p-0'}>
              <Burger />
            
            
              <div className={'mt-md-5 mt-3'}>
                <Main icons={this.state.icons}/>
              </div>
            </div>
            
            <div className ={'col-lg-4 col-md-6 col-12 p-0'}>
              <Img src={require('../img/slava.jpg')} alt='Slava' />
              <hr className="App__border__main" id="App__border__main"></hr>
            </div>

           

          
          </div>
        </div>

        <About />
        

        <Gallery portfolio={this.state.portfolio} />
      </div>
    
    );
  }
}

export default App;