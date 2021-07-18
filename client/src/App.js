import React, { Component } from 'react';
import Detail from './components/Detail';
import './App.css';
import Paper from '@material-ui/core/Paper'
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
      //marginTop : theme.spacing.unit * 3,
      overflowX: "auto"
    },
    table:{
      minWidth : 1080
    }
  }
)
class App extends Component{
  state ={
    details : ""
  }
  componentDidMount(){
    this.callApi()
    .then(res => this.setState({details : res}))
    .catch(err => console.log(err));
  }
  callApi = async () => {
    const response = await fetch('/api/details'); //http://localhost:5000/api/details
    const body = await response.json();
    return body;
  } 
 
    render(){
      const {classes} = this.props; 
    return(
      <Paper className={classes.root}>
       <Table className={classes.table}>
        <TableHead>
          <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>작성자</TableCell>
              <TableCell>제목</TableCell>
              <TableCell>날짜</TableCell>
          </TableRow>
        </TableHead>
      <TableBody>
      {this.state.details ? this.state.details.map(d => { return ( <Detail key = {d.id} id = {d.id} image = {d.image} name = {d.name} title = {d.title} date = {d.date}/>)}) : ""} 
      </TableBody>
      </Table>
      </Paper>  
    );
  } 
  }
export default withStyles(styles)(App);
