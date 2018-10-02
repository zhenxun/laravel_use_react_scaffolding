import React from "react";
import ReactDOM from 'react-dom';
import fontawesome from 'fontawesome';
import glyphicons from 'glyphicons';

import $ from 'jquery';
import DataTable from 'datatables.net-bs';
import DataTableButtons from 'datatables.net-buttons';


console.log(DataTable === $.fn.dataTable); // true


export default class MyDatatable extends React.Component{
    componentDidMount(){
       this.sample = $(this.refs.sample);
       this.sample.DataTable({
           ajax:{
               url: "/api/blog",
               dataSrc: ''
           },
           columns:[
               {title: 'name', data: 'name'},
               {title: 'body', data: 'body'},
               {title: 'CreateTime', data: 'created_at'},
               {
                data: null,
                title: 'Menu',
                className: "menu",
                orderable: false,
                createdCell: function (td, cellData, rowData, row, col) {
                    $(td).html('<button class="btn btn-sm btn-info action" role="'+ cellData.id +'">action</button>');
                    $(td).on('click', '.action', function (e) {
                        console.log("you click the " + e.target.attributes.getNamedItem("role").value + " action dom");
                    });
                }
            }
           ]
       });
    }

    componentWillUnmount(){
        this.sample.DataTable.destroy(true);
    }

    render(){
        return(
        <div>
          <table id="example" className="table table-striped table-bordered" ref="sample" width="100%">
          </table>
        </div>
        ); 
    }

}

if (document.getElementById('example')) {
    ReactDOM.render(<MyDatatable />, document.getElementById('example'));
}