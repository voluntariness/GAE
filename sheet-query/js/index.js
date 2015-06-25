(function() {

    var grid = $('#table-list').flexigrid({
        url: '#',
        dataType: 'json',
        colModel: [
            {
               display: '發送時間',
               name: 'time', 
               width: 200, 
               align: 'center'
            }, {
                display: '通知對象',
                name: 'notice_for',
                width: 200,
                align: 'center'
            }, {
               display: '內容',
               name: 'content', 
               width: 400
               // align: 'center'
            }, {
                display: ' ',
                name: 'view', 
                width: 100, 
                align: 'center',
                process: function(div, id) {
                    var $a = $('<a>檢視</a>')
                        .attr({href: Endold.linkTo(VIEW_URL, {id: id}) })
                        .bind('click', option.view);

                    $(div).html($a);
                    // return div;
                }
            }
        ],
        idProperty: 'id',
        sortname: "time",
        sortorder: "desc",
        usepager: true,
        title: '通知',
        useRp: true,
        rp: 10,
        showTableToggleBtn: true,
        width: '100%',
        height: 300

    });
})();