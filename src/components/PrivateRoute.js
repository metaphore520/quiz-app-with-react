import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const PrivateRoute = () => {
  const { currentUser } = useAuth(); // determine if authorized, from context or however you're doing it

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;

// function RequireAuth({ children }: { children: JSX.Element }) {
//     let auth = useAuth();
//     let location = useLocation();

//     if (!auth.user) {
// Redirect them to the /login page, but save the current location they were
// trying to go to when they were redirected. This allows us to send them
// along to that page after they login, which is a nicer user experience
// than dropping them off on the home page.
//       return <Navigate to="/login" state={{ from: location }} />;
//     }

//     return children;
//   }

//   ...

//   <Route
//     path="/protected"
//     element={
//       <RequireAuth>
//         <ProtectedPage />
//       </RequireAuth>
//     }
//   />
