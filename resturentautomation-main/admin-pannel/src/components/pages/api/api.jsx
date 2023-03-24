import React from 'react';
import Drawer from "../../navbar/Drawer.jsx";
//importing custom components
import ApiTemplate from "../../api/api-template.jsx";
import ListTemplate from "../../api/list/list-template.jsx";

//import api ApiData
import * as Data from "../../api/api-data.jsx";

{/*passing content prop in drawer to update content exporting all functions to paths
  in order to render required content according to path mapping*/}

  {/*Now in api template passing data for different api submenu pages from api-data file
    props are title, tabLabel tabPannel(pannel data) */}
function PaymentGatewayK(){
  return(
    <div>
    <Drawer content=<ApiTemplate title={Data.ApiData[0].title} tabLabel={Data.ApiData[0].tabLabel} tabPannel={Data.ApiData[0].tabPannel}/>/>
    </div>
  )
}

function DeliveryPartnerK(){
  return(
    <div>
    <Drawer content=<ApiTemplate title={Data.ApiData[1].title}  tabLabel={Data.ApiData[1].tabLabel} tabPannel={Data.ApiData[1].tabPannel}/>/>
    </div>
  )
}

function CloudStorage(){
  return(
    <div>
    <Drawer content=<ApiTemplate title={Data.ApiData[2].title}  tabLabel={Data.ApiData[2].tabLabel} tabPannel={Data.ApiData[2].tabPannel}/>/>
    </div>
  )
}
function Sms(){
  return(
    <div>
    <Drawer content=<ApiTemplate title={Data.ApiData[3].title} tabLabel={Data.ApiData[3].tabLabel} tabPannel={Data.ApiData[3].tabPannel}/>/>
    </div>
  )
}
function Email(){
  return(
    <div>
    <Drawer content=<ApiTemplate title={Data.ApiData[4].title} tabLabel={Data.ApiData[4].tabLabel} tabPannel={Data.ApiData[4].tabPannel}/>/>
    </div>
  )
}
function List(){
  return(
    <div>
    <Drawer content=<ListTemplate title={Data.ApiListData[0].title} tabLabel={Data.ApiListData[0].tabLabel} tabPannel={Data.ListPannelData}/>/>
    </div>
  )
}

export {PaymentGatewayK,DeliveryPartnerK,CloudStorage,Sms,Email,List};
