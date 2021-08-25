import React from "react";
import { ErrorListProps } from "@rjsf/core";

const ErrorList: React.FC<ErrorListProps> = (props): React.ReactElement => {
  console.log("ErrorList", { props });
  return <div />;
  // const { errors } = props;
  // return (
  //   <div className="panel panel-danger errors">
  //     <div className="panel-heading">
  //       <h3 className="panel-title">Errors</h3>
  //     </div>
  //     <ul className="list-group">
  //       {errors.map((error, i) => {
  //         return (
  //           <li key={i} className="list-group-item text-danger">
  //             {error.stack}
  //           </li>
  //         );
  //       })}
  //     </ul>
  //   </div>
  // );
}

export default ErrorList;