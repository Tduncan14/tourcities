import React,{Component} from 'react';
import './Tourlist.scss';
import Tour from '../Tour/Tour';

class Tourlist extends Component {
      
    state ={
          tours:[]
      } 
      render(){
          return(
              <section className="tourList">
                  <Tour />
              </section>
          )
      }
}

export default Tourlist;