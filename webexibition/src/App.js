import React, { Component } from 'react';
import Detail from './components/Detail';
import './App.css';
import { Paper } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import { mergeClasses } from '@material-ui/styles';

const styles = theme => (
  {
    root: {
      width: '100%',
      marginTop : theme.spacing.unit * 3,
      overflowX: "auto"
    },
    table:{
      minWidth : 1080
    }
  }
)


const details = [
  {
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
      const {classes} = this.props; 
    return(
      <div>
        {
          details.map(d => {
            return(
              <Paper className={classes.root}>
              <Table className={classes.table}>
                <TableHead>
                  <TableCell>번호</TableCell>
                  <TableCell>이미지</TableCell>
                  <TableCell>작성자</TableCell>
                  <TableCell>제목</TableCell>
                  <TableCell>날짜</TableCell>
                </TableHead>
                <TableBody>
                <Detail
              key = {d.id} //map 함수는 key 값이 필요함
              id = {d.id}
              image = {d.image}
              name = {d.name}
              title = {d.title}
              content = {d.content}
              date = {d.date}
              />
                </TableBody>
              </Table>
              </Paper>
            )
          })
        }
      </div>
    );
  } 
  }


export default withStyles(styles)(App);
