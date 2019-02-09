import React,{Component} from 'react';
import './Tourlist.scss';
import Tour from '../Tour/Tour';

class Tourlist extends Component {
      //super()

   /*   state ={
          blank:black
      } */
      render(){
          return(
              <section>
                  <Tour />
              </section>
          )
      }
}

export default Tourlist;