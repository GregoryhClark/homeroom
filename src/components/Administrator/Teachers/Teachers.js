//MODULES
import React from 'react';

//CSS, ASSETS
import './Teachers.css';

//COMPONENT
export default class Teachers extends React.Component {
   render() {
      return(
         <div className="teachers-overflow">
            <table className="teachers-table">
               <thead>
                  <tr>
                     <th>First Name</th>
                     <th>Last Name</th>
                     <th>Username</th>
                     <th>Email</th>
                     <th>Photo</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>Warren</td>
                     <td>Reader</td>
                     <td>test</td>
                     <td>test@gmail.com</td>
                     <td>None</td>
                     <td><button>Edit</button></td>
                  </tr>
                  <tr>
                     <td>Michael</td>
                     <td>Shannon</td>
                     <td>test2</td>
                     <td>test@yahoo.com</td>
                     <td>None</td>
                     <td><button>Edit</button></td>
                  </tr>
                  <tr>
                     <td>Greg</td>
                     <td>Clark</td>
                     <td>test3</td>
                     <td>test@hotmail.com</td>
                     <td>None</td>
                     <td><button>Edit</button></td>
                  </tr>
                  <tr>
                     <td>Dummy</td>
                     <td>Data</td>
                     <td>test4</td>
                     <td>test@cool.com</td>
                     <td>None</td>
                     <td><button>Edit</button></td>
                  </tr>
               </tbody>
            </table>
         </div>
      )
   }
}