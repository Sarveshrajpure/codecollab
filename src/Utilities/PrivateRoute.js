import { Navigate, Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { verify_user, login_user } from "../Actions/userActions";
import { userIsAuth } from "../Login/loginAction";

const PrivateRoute = () => {
  /* Track the state of your app instead. Start with a "loading" state */
  const [state, setState] = useState("loading");
  const dispatch = useDispatch();

  useEffect(() => {
    (async function () {
      try {
        /* Update effect logic to track correct state */
        const isUserLogged = await userIsAuth();
        if (isUserLogged) {
          console.log("cookie found");
          console.log(isUserLogged);
          dispatch(verify_user({ user: isUserLogged.data, auth: true }));
          setState(isUserLogged ? "loggedin" : "redirect");
        } else {
          console.log("cookie not found");
          dispatch(
            verify_user({
              user: {
                firstname: null,
                lastname: null,
                email: null,
                buinessname: null,
                phone: null,
              },
              auth: null,
            })
          );
          dispatch(
            login_user({
              user: {
                firstname: null,
                lastname: null,
                email: null,
                buinessname: null,
                phone: null,
              },
              auth: null,
            })
          );
          setState(isUserLogged ? "loggedin" : "redirect");
        }
      } catch {
        setState("redirect");
      }
    })();
  }, [dispatch]);

  /* If in loading state, return loading message while waiting for 
 isValidToken to complete */
  if (state === "loading") {
    return <div>Loading..</div>;
  }

  return state === "loggedin" ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
