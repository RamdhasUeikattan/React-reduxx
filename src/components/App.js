import React from 'react'
import './app.css';
import { GridComponent, ColumnDirective, ColumnsDirective, Page, Inject} from '@syncfusion/ej2-react-grids';
import {data} from './data';

const App = () => (
  <div>
    <GridComponent allowPaging={true} pageSettings={{pageSize:8}} dataSource={data}>
          <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID'></ColumnDirective>
            <ColumnDirective field='CustomerID' headerText='Customer ID'></ColumnDirective>
            <ColumnDirective field='OrderDate' textAlign='right' format='yMd'></ColumnDirective>
            <ColumnDirective field='ShipCountry' headerText='Ship Country'></ColumnDirective>
            <ColumnDirective headerText='Template' template={`<div><select onchange='onChange()'><option> Select </option><option> DeSelect </option></select></div>`} >
            </ColumnDirective>
          </ColumnsDirective>
          <Inject services={[Page]} />
        </GridComponent>
  </div>
)

export default App

window.onChange = () =>{
  console.log(document.activeElement.value);
}