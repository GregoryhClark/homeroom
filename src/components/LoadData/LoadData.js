//MODULES
import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

//CSS, ASSETS
import './LoadData.css';

//COMPONENT
export default class LoadData extends React.Component {
   render() {


    
      return(
         <div className="progress">
            <CircularProgress size={150} thickness={5} color={'gray'}/>
         </div>
      )
   }
}