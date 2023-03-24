import React from 'react';
//custom templates
import Title from "./title.jsx";
import Tab from "./tab-template.jsx";

//api contains title and tab component then tab component contains tab label and tab pannel then
//tab pannel contains card to display data

function ApiTemplate(props){
  return (
      <>
        <Title title={props.title} />
        <br/>
        <Tab tabLabel={props.tabLabel} tabPannel={props.tabPannel}/>
      </>
  )
}
export default ApiTemplate;
