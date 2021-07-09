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
        {
          details.map(d => {
            return(
              <Detail
              key = {d.id} //map 메소드 는 key 값이 필요함
              id = {d.id}
              image = {d.image}
              name = {d.name}
              title = {d.title}
              content = {d.content}
              date = {d.date}
              />
            )
          })
        }
      </div>
    );
  }
  }


export default App;
