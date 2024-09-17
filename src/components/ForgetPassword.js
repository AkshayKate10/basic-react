import React from "react";

function ForgetPassword({ userNameFromMain }) {
  console.log("FORGET PASSWORD");

  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "1rem" }}>
      <h4>Forget Password</h4>
      userName = {userNameFromMain}
    </div>
  );
}

export default ForgetPassword;
