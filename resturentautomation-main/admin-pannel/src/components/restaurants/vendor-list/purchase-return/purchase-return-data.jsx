import React from "react";
//custom components
import ActionButton from "../../../restaurants/action-button-template.jsx";
import Button from '@mui/material/Button';


const columns = [
  { field: 'returnDate',
  renderHeader: () => (
    <strong>
      {'Return Date'}
    </strong>
  ),
  width: 130,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'invoice',
  renderHeader: () => (
    <strong>
      {'Invoice No.'}
    </strong>
  ),
  width: 120,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'invoiceCategory',
  renderHeader: () => (
    <strong>
      {'Invoice Category'}
    </strong>
  ),
  width: 130,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'inventoryItem',
  renderHeader: () => (
    <strong>
      {'Inventory Item'}
    </strong>
  ),
  width: 120,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },
  { field: 'ingredientUnit',
  renderHeader: () => (
    <strong>
      {'Ingredient Unit'}
    </strong>
  ),
  width: 120,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'purchaseDate',
  renderHeader: () => (
    <strong>
      {'Purchase Date'}
    </strong>
  ),
  width: 120,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'orderQty',
  renderHeader: () => (
    <strong>
      {'Order Quantity'}
    </strong>
  ),
  width: 120,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'taxAmt',
  renderHeader: () => (
    <strong>
      {'Tax Amount'}
    </strong>
  ),
  width: 120,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'discountAmt',
  renderHeader: () => (
    <strong>
      {'Discount Amt'}
    </strong>
  ),
  width: 120,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'invoiceAmt',
  renderHeader: () => (
    <strong>
      {'Invoice Amount'}
    </strong>
  ),
  width: 120,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  {
    field: 'returnAmt',
    renderHeader: () => (
      <strong>
        {'Return Amount'}
      </strong>
    ),
    width: 150,
    align:'center',
    headerAlign:'center'
  },

  {
    field: 'action',
    renderHeader: () => (
      <strong>
        {'Action '}
      </strong>
    ),
    headerAlign:'center',
    align:'center',
    description: 'This will take you to new page.',
    renderCell: () => {
  return (
    <ActionButton label={"Action"} dropDown={["View Details"]}/>
  );
},
    sortable: false,
    width: 100,
  },
];

//in rows id refers to vendor id and inside purchase id refers to purchase id
const rows=[
  {id:"1",
    ret:
    [{id:"1",returnDate:"28/06/2022",invoice:"4234324",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button" },
      {id:"2",returnDate:"08/07/2022",invoice:"8734323",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button"},
      {id:"3",returnDate:"14/07/2022",invoice:"1257324",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button"},
      {id:"4",returnDate:"28/07/2022",invoice:"9034324",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button"}]
    },
    {id:"2",
      ret:
      [{id:"1",returnDate:"28/06/2022",invoice:"4234324",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button" },
        {id:"2",returnDate:"08/07/2022",invoice:"8734323",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button"},
        {id:"3",returnDate:"14/07/2022",invoice:"1257324",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button"},
        {id:"4",returnDate:"28/07/2022",invoice:"9034324",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button"}]
      },
      {id:"3",
        ret:
        [{id:"1",returnDate:"28/06/2022",invoice:"4234324",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button" },
          {id:"2",returnDate:"08/07/2022",invoice:"8734323",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button"},
          {id:"3",returnDate:"14/07/2022",invoice:"1257324",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button"},
          {id:"4",returnDate:"28/07/2022",invoice:"9034324",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button"}]
        },
        {id:"4",
          ret:
          [{id:"1",returnDate:"28/06/2022",invoice:"4234324",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button" },
            {id:"2",returnDate:"08/07/2022",invoice:"8734323",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button"},
            {id:"3",returnDate:"14/07/2022",invoice:"1257324",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button"},
            {id:"4",returnDate:"28/07/2022",invoice:"9034324",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button"}]
          },
          {id:"5",
            ret:
            [{id:"1",returnDate:"28/06/2022",invoice:"4234324",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button" },
              {id:"2",returnDate:"08/07/2022",invoice:"8734323",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button"},
              {id:"3",returnDate:"14/07/2022",invoice:"1257324",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button"},
              {id:"4",returnDate:"28/07/2022",invoice:"9034324",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button"}]
            },
            {id:"6",
              ret:
              [{id:"1",returnDate:"28/06/2022",invoice:"4234324",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button" },
                {id:"2",returnDate:"08/07/2022",invoice:"8734323",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button"},
                {id:"3",returnDate:"14/07/2022",invoice:"1257324",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button"},
                {id:"4",returnDate:"28/07/2022",invoice:"9034324",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button"}]
              },
              {id:"7",
                ret:
                [{id:"1",returnDate:"28/06/2022",invoice:"4234324",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button" },
                  {id:"2",returnDate:"08/07/2022",invoice:"8734323",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button"},
                  {id:"3",returnDate:"14/07/2022",invoice:"1257324",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button"},
                  {id:"4",returnDate:"28/07/2022",invoice:"9034324",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button"}]
                },
                {id:"8",
                  ret:
                  [{id:"1",returnDate:"28/06/2022",invoice:"4234324",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button" },
                    {id:"2",returnDate:"08/07/2022",invoice:"8734323",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button"},
                    {id:"3",returnDate:"14/07/2022",invoice:"1257324",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button"},
                    {id:"4",returnDate:"28/07/2022",invoice:"9034324",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button"}]
                  },
                  {id:"9",
                    ret:
                    [{id:"1",returnDate:"28/06/2022",invoice:"4234324",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button" },
                      {id:"2",returnDate:"08/07/2022",invoice:"8734323",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button"},
                      {id:"3",returnDate:"14/07/2022",invoice:"1257324",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button"},
                      {id:"4",returnDate:"28/07/2022",invoice:"9034324",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button"}]
                    },
                    {id:"10",
                      ret:
                      [{id:"1",returnDate:"28/06/2022",invoice:"4234324",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button" },
                        {id:"2",returnDate:"08/07/2022",invoice:"8734323",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button"},
                        {id:"3",returnDate:"14/07/2022",invoice:"1257324",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button"},
                        {id:"4",returnDate:"28/07/2022",invoice:"9034324",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button"}]
                      },

                      {id:"11",
                        ret:
                        [{id:"1",returnDate:"28/06/2022",invoice:"4234324",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button" },
                          {id:"2",returnDate:"08/07/2022",invoice:"8734323",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button"},
                          {id:"3",returnDate:"14/07/2022",invoice:"1257324",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button"},
                          {id:"4",returnDate:"28/07/2022",invoice:"9034324",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button"}]
                        },

                        {id:"12",
                          ret:
                          [{id:"1",returnDate:"28/06/2022",invoice:"4234324",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button" },
                            {id:"2",returnDate:"08/07/2022",invoice:"8734323",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button"},
                            {id:"3",returnDate:"14/07/2022",invoice:"1257324",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button"},
                            {id:"4",returnDate:"28/07/2022",invoice:"9034324",invoiceCategory:"#",inventoryItem:"Vegetables",ingredientUnit:"20",purchaseDate:"20/07/2022",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",orderQty:"18",returnAmt:"200",action:"button"}]
                          },
];

//to send vendor's purchase list data for vendor's menu routing
function purchaseReturnData(vid,rid){
    const vendor = rows.find(item=>item.id==vid);
    const purchaseReturn=vendor.ret;
    return purchaseReturn;
};

export{columns,rows,purchaseReturnData}
