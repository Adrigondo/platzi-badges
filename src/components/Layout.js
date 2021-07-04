import React from "react";

import Navbar from "./Navbar";

function Layout(props){
  // const children= props.children;
  return(
    <React.Fragment>
      <Navbar/>
      <div className="">
        {props.children}
      </div>
    </React.Fragment>
  );
}

export default Layout;