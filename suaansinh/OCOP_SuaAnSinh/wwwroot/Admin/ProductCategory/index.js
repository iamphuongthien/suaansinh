﻿$(function () {
    $("#btn_them").click(function (e) {
        e.preventDefault();
        $.get("/Admin/ProductCategories/Create", function (data) {
            $('#sharing_modal .modal-content').html(data);
            $('#sharing_modal').modal("show");
        });
    })
    $("body").on("click", "#btn_cancel", function (e) {
        e.preventDefault();
        $('#sharing_modal').modal('hide');
    })
    $("body").on("click", "#btn_remove", function (e) {
        e.preventDefault();
        $('#sharing_modal').modal('hide');
    })
    $("body").on("click", "#btn_save_create", function (e) {
        e.preventDefault();
        if ($("#frmCreateProductCategory").valid()) {
            $("#frmCreateProductCategory").submit();
        }
    })
    $("body").on("click", "#btn_save_edit", function (e) {
        e.preventDefault();
        if ($("#frmEditProductCategory").valid()) {
            $("#frmEditProductCategory").submit();
        }
    })
    $("body").on("click", ".btn-edit", function (e) {
        e.preventDefault();
        var id = $(this).data("id");
        $.get("/Admin/ProductCategories/Edit/" + id, function (data) {
            $('#sharing_modal .modal-content').html(data);
            $('#sharing_modal').modal('show');
        });
    })

    $("body").on("click", ".btn-delete", function (e) {
        e.preventDefault();
        var id = $(this).data("id");
        Swal.fire({
            title: 'Bạn muốn xóa trường thông tin này?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: `Đồng Ý`,
            cancelButtonText: `Đóng`,
        }).then((result) => {
            if (result.value) {
                $.get("/Admin/ProductCategories/Delete/" + id, function (res) {
                    if (res.status == "success") {
                        toastr.success('Xóa thành công.')
                        location.reload();
                    } else {
                        toastr.error(res.message)
                    }
                });
            }
        })
    })
})