import React from 'react';

class Detail extends React.Component {

    render(){
        return(
        //jsx 문법으로 div tag가 있어야 함
        <div> 
        <p><Detail_list id={this.props.id} image={this.props.image} title={this.props.title} name={this.props.name} date={this.props.date}/></p>
        <p>{this.props.content}</p>
        </div>
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