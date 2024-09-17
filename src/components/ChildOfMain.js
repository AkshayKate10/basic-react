import React from "react";

function ChildOfMain({ userNameProp, passwordProp, isSubmitted }) {
  console.log("CHILD OF MAIN");

  if (!isSubmitted) return;
  return (
    <div>
      <h4>Child Of Main</h4>

      <div>
        <div> User Name = {userNameProp}</div>
        <div> Password = {passwordProp}</div>
      </div>
    </div>
  );
}

export default ChildOfMain;
