import React ,{Component} from 'react';
import "./Tour.scss"


class Tour extends Component{
    //super()

    //state ={}


    render(){
        return(
           <article className="tour">
               <div className ="img-container">
                 <img src="https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="an image"/>
               
               <span className="close-btn">
                <i className ="fas fa-window-close"></i>
               </span>
                  <div className ="tour-info">
               <h3>City</h3>
               <h4>Name</h4>
               <h5>info{""}<span><i className ="fas fa-caret-square-down"></i></span></h5>
               <p>
                   This will be some info. you dig
               </p>
                  </div>
               </div>
           </article>
        )
    }
}

export default Tour