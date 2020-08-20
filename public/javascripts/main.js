$(document).ready(function () {
    var socket = io(window.location.origin);
    socket.on("broadcast", (data) => {
        $(".countSock").text(data)
    })
    $("#setNam").modal({backdrop:'static',keyboard:false})
    $(".submitSetName").click((e)=>{
        var name = $("#valName").val();
        if(name == "" || name == null){

        }else{
            $("#setName").modal("hide")
        }
    })

    socket.on("server-chat", (obj) => {
        if (socket.id == obj.id) {
            var content = `<div class="d-flex justify-content-end mb-4">`
            content += `<div class="msg_cotainer_send"><b>${obj.name}</b> : ${obj.data}</div>`
            content += `<div class="img_cont_msg">`
            content += `<img class="rounded-circle user_img_msg" src="data:image/png;base64,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">`
            content += `</div>`
            content += `</div>`
            content += `</div>`
            $(".msg_card_body").append(content)
        } else {
            var content =
                `<div class="d-flex justify-content-start mb-4"><div class="d-flex justify-content-start mb-4"><div class="img_cont_msg"><img class="rounded-circle user_img_msg" src="data:image/png;base64,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"></div><div class="msg_cotainer"><b>${obj.name}</b> -> ${obj.data}</div></div></div>`
            $(".msg_card_body").append(content)
        }
    })
    $('#action_menu_btn').click(function () {
        $('.action_menu').toggle();
    });
    $(".send_btn").click(function (e) {
        var name = $("#valName").val();
        $('.msg_card_body').animate({
            scrollTop: 5000
        });
        var msg = $(".type_msg").val();
        if (msg == "") {

        } else if(name =="" || name == null){
            $("#setName").modal("show")
        }
        else {
            var obj = {
                name: name,
                data: msg,
                id: socket.id
            }
            socket.emit("client-chat", obj);
            $(".type_msg").val('');
        }


    });

});