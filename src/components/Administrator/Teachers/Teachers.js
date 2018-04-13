//MODULES
import React from 'react';

//CSS, ASSETS
import './Teachers.css';

//COMPONENT
export default class Teachers extends React.Component {
   render() {
      return(
         <div>
            <table>
               <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
               </tr>
               <tr>
                  <td>Warren</td>
                  <td>Reader</td>
               </tr>
            </table>
         </div>
      )
   }
}