import React,{Component} from 'react';
import {connect} from 'react-redux';
class PostForm extends Component{
    handlesubmit=(e)=>{
        e.preventDefault();
        const title=this.getTitle.value;
        const message=this.getMessage.value;
        const data={
            id:new Date(),
            title,message

        }
        this.props.dispatch({
            type:'ADD_POST',data});
           this.getTitle.value='';
           this.getMessage.value='';
           
        }
    
    render()
    {
        return(
            <div>
                <h1>CreatePost</h1>
                <form onSubmit={this.handlesubmit}>
                    <input type="text"  ref={(input)=>this.getTitle = input}   placeholder="enter Post Titile"></input><br>
                    </br>
                <textarea rows="2" ref={(input)=>this.getMessage = input} cols="28" placeholder="Enter Comments"></textarea><br></br>
                <button>Post</button>
                </form>
            </div>
        );
    }
}
export default connect()(PostForm);
