import './App.css';
import Detail from './components/Detail';
import React, { Component } from 'react';

const detail = {
  'id' :1,
  'image': 'https://placeimg.com/64/64/any',
  'name' : '웹전시회_작성자',
  'title': '웹전시회_제목',
  'content': '웹전시회_내용',
  'date': '웹전시회_날짜'
}

  class App extends Component{
    render(){
    return(
      <Detail
      id = {detail.id}
      image = {detail.image}
      name = {detail.name}
      title = {detail.title}
      content = {detail.content}
      date = {detail.date}
      
      />
    );
  }
  }


export default App;
