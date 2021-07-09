import './App.css';
import Detail from './components/Detail';
import React, { Component } from 'react';

const details = 
[{
  'id' :1,
  'image': 'https://placeimg.com/64/64/1',
  'name'  : '강윤묵 / 화정신문',
  'title': '테스트',
  'content': '테스트입니다',
  'date': '2021-07-09'
},
{
  'id' :2,
  'image': 'https://placeimg.com/64/64/2',
  'name'  : '김윤수 / 대구신문',
  'title': '테스트2',
  'content': '테스트2입니다',
  'date': '2021-07-09'
},
{
  'id' :3,
  'image': 'https://placeimg.com/64/64/3',
  'name'  : '김재백 / 대구신문',
  'title': '테스트3',
  'content': '테스트3입니다',
  'date': '2021-07-09'
}
];

  class App extends Component{
    render(){
    return(
      <div>
      <Detail
      id = {details[0].id}
      image = {details[0].image}
      name = {details[0].name}
      title = {details[0].title}
      content = {details[0].content}
      date = {details[0].date}
      />

      <Detail
      id = {details[1].id}
      image = {details[1].image}
      name = {details[1].name}
      title = {details[1].title}
      content = {details[1].content}
      date = {details[1].date}
      />

      <Detail
      id = {details[2].id}
      image = {details[2].image}
      name = {details[2].name}
      title = {details[2].title}
      content = {details[2].content}
      date = {details[2].date}
      />
      </div>
    );
  }
  }


export default App;
