import React,{Component} from 'react';
import './Tourlist.scss';
import Tour from '../Tour/Tour';
import  {tourData} from '../tourData'
class Tourlist extends Component {
      
    state ={
          tours: tourData
      } 
      render(){
          const{tours} = this.state

          return(
              <section className="tourList">
                  {
                      tours.map(tour => {
                       return  <Tour key={tour.id} tour={tour}></Tour>
                      })
                  }
              </section>
          )
      }
}

export default Tourlist;