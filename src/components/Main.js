import React, { useState, useEffect } from "react";
import ChildOfMain from "./ChildOfMain";

function Main({ getUserName }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  //   const checkStateButtonClick = () => {
  //     console.log("userName", userName);
  //     console.log("password", password);
  //   };

  const onChangeHandle = (event) => {
    setIsSubmitted(false);
    if (event.target.id === "userName") {
      setUserName(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  useEffect(() => {
    getUserName(userName);
    console.log("on change of userName");
  }, [userName]);

  useEffect(() => {
    console.log("only once");
  }, []);

  useEffect(() => {
    console.log("Every render");
  });
  /*********
   * var vs let vs const
   * hoisting
   * == vs ===
   * map - only works on array.. return new array with same number of elements of original array.
   * filter - only works on array.. return new array. number of elements depends upon condition written in arrow function.
   * forEach - only works on array.. DOES NOT RETURN ANYTHING. ONLY ITERATES ON ARRAY.
   * How to pass data in react components
   * from parent to child pass data with props.
   * from child to parent using callback function. function body is in parent, function call is in child.
   *
   * what is virtual dom?
   * useState - to store data in react component
   * useEffect 1 - [] - call only once after initial render.. useful to call api
   * useEffect 2 - [stateName] - call only on change of stateName variable given in dependency array.
   * useEffect 3 - without dependency array - call every time on each render.
   * useEffect 4 - returning from useEffect is useful for cleanup jobs.
   */
  console.log("MAIN");

  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "1rem" }}>
      <h4>Main</h4>
      <div>
        Username:
        <input id="userName" onChange={onChangeHandle} />
      </div>
      <div>
        Password: <input id="password" onChange={onChangeHandle} />
      </div>
      <div>
        <button onClick={() => setIsSubmitted(true)}>Submit</button>
      </div>
      {/* 
      <div>
        <button onClick={checkStateButtonClick}>Check State</button>
      </div> */}
      <ChildOfMain
        userNameProp={userName}
        passwordProp={password}
        isSubmitted={isSubmitted}
      />
    </div>
  );
}

export default Main;
