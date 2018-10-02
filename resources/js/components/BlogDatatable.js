import React from 'react';
import ReactDOM from "react-dom";
import Datatable from 'react-datatable-jq';
import axios from 'axios';

// datatable global options. You can import it from your config.js
const options = {
    dom: "<'dt-toolbar'<'col-xs-12 col-sm-6'f><'col-sm-6 col-xs-12 hidden-xs text-right'l>r>" + "t" + "<'dt-toolbar-footer'<'col-sm-6 col-xs-12 hidden-xs'i><'col-xs-12 col-sm-6'p>>",
    autoWidth: false,
    searching: false,
    paging: true,
    language: {
        search: "<span class='input-group-addon input-sm'><i class='glyphicon glyphicon-search'></i></span> ",
        lengthMenu: "每页显示 _MENU_ 条记录",
        info: "<b>从_START_到_END_ / 共_TOTAL_条记录</b>",
        infoEmpty: "显示0条记录",
        emptyTable: "没有符合条件的记录",
        zeroRecords: "没有符合条件的记录",
        loadingRecords: "加载中...",
        processing: "处理中...",
        paginate: {
            "first": "<b>首页</b>",
            "previous": "<b>上一页</b>",
            "next": "<b>下一页</b>",
            "last": "<b>尾页</b>"
        }
    }
}

export default class BasicDatatable extends React.Component {
    constructor(props) {
        super(props);
        // change the default options or add new option
        options.ording = false;
        this.options = options;

        // the events list on datatable
        this.events = [{
            type: "click",
            scope: "tbody tr td",
            func: function () {
                console.log("this is a test");
            }
        }];
        // the columns for the datatable
        this.columns = [{
            data: 'id',
            title: 'ID',
        },
        {
            data: 'name',
            title: 'Name',
            orderable: false
        },
        {
            data: 'body',
            title: 'Body',
            // render: function (data, full) {
            //     return data.toUpperCase() === 'M' ? "Boy" : "Girl";
            // },
            orderable: false
        },
        {
            data: 'created_at',
            title: 'Create Time',
            orderable: false
        },
        {
            data: 'updated_at',
            title: 'Update Time',
            orderable: false
        },
        {
            data: null,
            title: 'Menu',
            className: "menu",
            orderable: false,
            createdCell: function (td, cellData, rowData, row, col) {
                console.log(cellData.id);
                $(td).html('<button class="action" role="'+ cellData.id +'">action</button>');
                $(td).on('click', '.action', function (e) {
                    console.log("you click the " + e.target.attributes.getNamedItem("role").value + " action dom");
                });
            }
        }]
        // dtData 负责 datatable data的部分
        this.state = {
            DTdata: null
        }
    }

    componentWillMount() {
        console.log("datatable will mount");
        // let url = "/api/blog",
        //     postData = {
        //         "range": "all"
        //     },
        let postData = { range: "all" };
        let dtData = { 
            _method: "ajax", 
            url: "/api/dt", 
            data: function(d) {
                $.extend(d, postData);
                return d;
            }, 
            type: "get", 
            contentType: "application/json; charset=utf-8", 
            dataSrc: "data" 
        };

        // axios.get("/api/blog").then(response => {
        //     //$.extend(response.data, postData);
        //     //console.log(response.data);
        //     this.setState({ data: response.data });
        // });

        this.setState({ DTdata: dtData });

    }

    render() {
        // theme: one of ["bootstrap", "bootstrap4", "foundation", "jqueryui", "material", "semanticui", "uikit"], default JqueryDatatable
        return (
            <div>
                this is sample：
              <Datatable
                    theme={"bootstrap"}
                    options={this.options}
                    dtData={this.state.DTdata}
                    columns={this.columns}
                    events={this.events}
                    className="table table-striped table-hover"
                    id="sample_table"
                />
            </div >
        );
    }
}

if (document.getElementById("example")) {
    ReactDOM.render(<BasicDatatable />, document.getElementById("example"));
}
