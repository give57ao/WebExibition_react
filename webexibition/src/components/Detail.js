import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Detail extends React.Component {

    render(){ 
        return(
        //jsx 문법으로 div tag가 있어야 함
        
        <TableRow>
            <TableCell>{this.props.id}</TableCell>
            <TableCell><img scr={this.props.images}/></TableCell>
            <TableCell>{this.props.name}</TableCell>
            <TableCell>{this.props.date}</TableCell>
            <TableCell>{this.props.content}</TableCell>
        </TableRow>
        )
    }
}
//관리페이지 (list)를 위해 컴포넌트 구조화!
class Detail_list extends React.Component{
    render(){
        return(
            <div>
            <p>{this.props.id}</p>
            <img src={this.props.image} alt="news"/>
            <p>{this.props.title}</p>
            <p>{this.props.name}</p>
            <p>{this.props.date}</p>
            </div>
        )
    }
}



export default Detail;