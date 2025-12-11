define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'user/user/index',
                    add_url: 'user/user/add',
                    edit_url: 'user/user/edit',
                    del_url: 'user/user/del',
                    multi_url: 'user/user/multi',
                    table: 'user',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'user.id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'id', title: __('Id'), sortable: true},
                        {field: 'group.name', title: __('前缀')},
                        {field: 'username', title: __('telegram/邮箱/手机号'), operate: 'LIKE'},
                        {field: 'nickname', title: __('登记人'), operate: 'LIKE'},
                        
                        //{field: 'email', title: __('Email'), operate: 'LIKE'},
                        //{field: 'mobile', title: __('Mobile'), operate: 'LIKE'},
                        //{field: 'avatar', title: __('Avatar'), events: Table.api.events.image, formatter: Table.api.formatter.image, operate: false},
                        //{field: 'level', title: __('Level'), operate: 'BETWEEN', sortable: true},
                        {field: 'gender', title: __('状态'), formatter: Table.api.formatter.status,  searchList: {1: __('在聊'), 0: __('断聊'), 2: __('深聊')}},
                        {field: 'bio', title: __('描述'), operate: 'LIKE'},
                        //{field: 'score', title: __('Score'), operate: 'BETWEEN', sortable: true},
                        //{field: 'successions', title: __('Successions'), visible: false, operate: 'BETWEEN', sortable: true},
                        //{field: 'maxsuccessions', title: __('Maxsuccessions'), visible: false, operate: 'BETWEEN', sortable: true},
                        {field: 'updatetime', title: __('更新时间'), formatter: Table.api.formatter.datetime, operate: 'RANGE', addclass: 'datetimerange', sortable: true},
                        {field: 'createtime', title: __('创建时间'), formatter: Table.api.formatter.datetime, operate: 'RANGE', addclass: 'datetimerange', sortable: true},
                        //{field: 'status', title: __('Status'), formatter: Table.api.formatter.status, searchList: {normal: __('Normal'), hidden: __('Hidden')}},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});