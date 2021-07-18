import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Detail extends React.Component {
    render(){ 
        return(
            
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.image} alt="img"/></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.title}</TableCell>
                <TableCell>{this.props.date}</TableCell>
            </TableRow>
            
        )
    }
//<TableCell>{this.props.content}</TableCell> content는 모두 담을 수 없어 삭제
}
export default Detail;