$(document).ready(function() {

    var menu = $(".menu");
    var lines = $(".lines");
    var line = $(".line");
    var menuOpen; //ตัวแปรเปล่า

    //สร้างฟังก์ชัน เพื่อทำการเปลี่ยน menu.cssตรง left ให้เป็นสูตรpxจากติดลบอยู่
    //เป็นการเปิด lines
    function openMenu() {
        menu.css("left", "0px");
        lines.css("bankground", "#777575");
        menuOpen = true;
    }

    //เป็นการปิดlines
    function closeMenu() {
        menu.css("left", "-320px");
        lines.css("bankground", "#fff");
        menuOpen = false;
    }

    //เป็นการทำให้คลิกเปิดปิดได้และใช้ if 
    function toggleMenu() {
        //เช็คว่าถ้าเมนูเปิด ให้เมนูเรียกใช้งานฟังก์ชัน ปิดเมนู
        if(menu) {
            closeMenu();
        //เช็คว่าถ้าเมนูปิด ให้เมนูเรียกใช้งานฟังก์ชัน เปิดเมนู
        } else {
            openMenu();
        }
    }

});
