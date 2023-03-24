import React from "react";
//
var idfinal="";

//getting id of row from table template
function getId(id){
  idfinal=id;
};
//to send id of restaurant which was selected to view
function Id(){
  return idfinal;
}

export  {getId,Id};
