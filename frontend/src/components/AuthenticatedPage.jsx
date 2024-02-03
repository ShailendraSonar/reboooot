// AuthenticatedPage.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sponser from './Sponser';
import Speaker from './Speaker';
import AdminPanel from './AdminPanel';

const AuthenticatedPage = () => {
  const navigate = useNavigate();
  const userRole = localStorage.getItem('userrole');
  const currentUrl = window.location.href;
  console.log(currentUrl)
  console.log(userRole);
  const handleLogout = () => {
    // Perform any logout logic if needed
    navigate('/');
  };

  return (
    <>
    {
      userRole=='Speaker' && <Speaker/>
    }
    {
      userRole=='Sponser' && <Sponser/>
    }
     {
      userRole=='AdminPanel' && <AdminPanel/>
    }
    
    </>
    // <div>
    //   <h1>Welcome to the Authenticated Page</h1>
    //   <p>This is a protected page for authenticated users.</p>
    //   <button onClick={handleLogout}>Logout</button>
    //   <p>
    //     If you want to go back to the login page, you can also{' '}
    //   </p>
    // </div>
  );
};

export default AuthenticatedPage;



// import React, { useState, useEffect } from 'react';
// import jwt from 'jsonwebtoken';
// import Sponser from './Sponser';

// const YourComponent = () => {
//   const [userRole, setUserRole] = useState('');

//   useEffect(() => {
//     // Decode the token and get the user's role
//     const token = localStorage.getItem('token');  // Assuming you store the token in localStorage
//     if (token) {
//       const decodedToken = jwt.decode(token);
//       if (decodedToken) {
//         setUserRole(decodedToken.role);

//       }
//       console.log(decodedToken)
//     }
//   }, []);

//   // Now you can conditionally render different panels based on the user's role
//   return (
//     <div>
//       {userRole === 'Speaker' && <Sponser />}
//       {/* {userRole === 'Delegates' && <DelegatePanel />}
//       {userRole === 'Speaker' && <SpeakerPanel />} */}
//     </div>
//   );
// };

// export default YourComponent;
