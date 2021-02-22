import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import JSON from './db.json';

import Header from './components/header';
import NewsList from './components/news_list';

class App extends Component{

  state={
    news:JSON,
    filtered:[]
  }

 getKeyword=(e)=>{
   let key=e.target.value;
   let filtered=this.state.news.filter((item)=>{
     return item.title.indexOf(key)>-1;
   });
   this.setState({
     filtered
   })
 }  

  render(){
      return(
          <div>
            < Header keyword={this.getKeyword} />
            <NewsList news={this.state.filtered.length===0 ? this.state.news : this.state.filtered}>
                <h1 class="headlines">TODAY'S NEWS</h1>
            </NewsList>
          </div>
      )
  }
}
 
 


ReactDOM.render(<App/>,document.querySelector('#root'));
