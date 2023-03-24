import React from "react";
import Title from "../title.jsx";
import Tab from "./list-tab-template.jsx";


function ListTemplate(props){
  return (
    <>
    <Title title={props.title}/>
    <br/>
    <Tab tabLabel={props.tabLabel} tabPannel={props.tabPannel}/>
    </>
  )
}
export default ListTemplate;
