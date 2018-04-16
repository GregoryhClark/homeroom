//MODULES
import React from 'react';

//CSS, ASSETS
import './Teachers.css';

//COMPONENT
export default class Teachers extends React.Component {

   handleEditTeacher() {
      const modal = document.getElementById('myModal');
      modal.style.display = "block";
   }

   handleCloseModal() {
      const modal = document.getElementById('myModal');
      modal.style.display = "none";
   }


   render() {
      //REMOVE MODAL WHEN AREA OUTSIDE OF MODAL IS CLICKED
      window.onclick = function(event) {
         const modal = document.getElementById('myModal');
         if (event.target == modal) {
             modal.style.display = "none";
         }
     }

      return(
         <div>

         <button onClick={this.handleEditTeacher}>Open Modal</button>
         <div id="myModal" className="modal">
            <div className="modal-content">
            <span className="close" onClick={this.handleCloseModal}>&#215;</span>
            <div class="horizontal-line">
               <h1>Edit Teacher Details</h1>
            </div>
            </div>
         </div>

         < br/>
         < br/>


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
                     <td><a>Add Photo</a></td>
                     <td><button>Edit</button></td>
                  </tr>
                  <tr>
                     <td>Michael</td>
                     <td>Shannon</td>
                     <td>test2</td>
                     <td>test@yahoo.com</td>
                     <td><a>View</a> <a>Remove</a></td>
                     <td><button>Edit</button></td>
                  </tr>
                  <tr>
                     <td>Greg</td>
                     <td>Clark</td>
                     <td>test3</td>
                     <td>test@hotmail.com</td>
                     <td><a>Add Photo</a></td>
                     <td><button>Edit</button></td>
                  </tr>
                  <tr>
                     <td>Dummy</td>
                     <td>Data</td>
                     <td>test4</td>
                     <td>test@cool.com</td>
                     <td><a>Add Photo</a></td>
                     <td><button>Edit</button></td>
                  </tr>
               </tbody>
            </table>
         </div>


         </div>
      )
   }
}