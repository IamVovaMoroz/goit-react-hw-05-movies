// import { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import {toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export function SearchBar({value, onSubmit }) {
//     const [search, setSearch] = useState('')
    
//     useEffect(() => {
//       if (value){setSearch(value);}
      
//     }, [value]);
  
//     const valueChange = event => {
//       setSearch(event.currentTarget.value.toLowerCase());
//       };
   
//       const handleSubmit = event => {
//         event.preventDefault();
         
//           if (search.trim() === "") {
//             toast.error('write correct name');
//               setSearch('');
//               return
//         }
//          if (search === value) {
//            toast.warn(
//              'This request has already been found, please try another quary'
//            );
//            return
//          }
//               onSubmit(search)
//     }
    
//       return (
//         <header >
//           <form className="searchForm" onSubmit={handleSubmit}>
//             <button type="submit" >
//               <span className="button-label">Search</span>
//             </button>
  
//             <input
              
//               name="search"
//               type="text"
//               autoComplete="off"
//               autoFocus
//               placeholder="Search movies"
//               onChange={valueChange}
//               value={search}
//             />
//           </form>
//         </header>
//       );
    
//   }
   
  
//   SearchBar.propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//   };