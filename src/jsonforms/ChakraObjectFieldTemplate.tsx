import React from "react";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const ChakraObjectFieldTemplate = (props: any): React.ReactElement => {
  console.log("ChakraObjectFieldTemplate", { props });
  const options = props.uiSchema["ui:options"] || {};

  return options?.onlyProperties ? (
    <>
      {props.properties.map((element: any) => element.content)}
    </>
  ) : (
    <div>
      {props.title}
      {props.description}
      {props.properties.map((element: any) => element.content)}
    </div>
  );
}

export default ChakraObjectFieldTemplate;