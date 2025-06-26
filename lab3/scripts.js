//login

function login(frm){
    var EmailChecked = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(EmailChecked.test(frm.gmail.value) == false){
        alert("Email không hợp lệ!");
        frm.gmail.focus();
        return false;
    }
    if(frm.psw.value.length < 8){
        alert("Mật khẩu không hợp lệ! (Độ dài < 8).");
        frm.psw.focus();
        return false;
    }
    return true;
}

//register

function register(frm){
    var EmailChecked = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(EmailChecked.test(frm.gmail.value) == false){
        alert("Email không hợp lệ!");
        frm.gmail.focus();
        return false;
    }
    if(frm.psw.value.length < 8){
        alert("Mật khẩu không hợp lệ! (Độ dài < 8).");
        frm.psw.focus();
        return false;
    }
    if(frm.repsw.value != frm.psw.value){
        alert("Nhập lại mật khẩu không đúng, vui lòng kiểm tra lại!");
        frm.repsw.focus();
        return false;
    }
    return true;
}

//Trang San Pham

var itemList={   
    "sp001":{ "name":"Sữa Chua Vị Kiwi", "price":21000, "photo":"images/sanpham/kiwi.jpg"}, 
    "sp002":{ "name":"Sữa Chua Vị Xoài", "price":22000, "photo":"images/sanpham/mango.jpg"}, 
    "sp003":{ "name":"Sữa Chua Vị Dưa lưới", "price":23000, "photo":"images/sanpham/cantaloupe.jpg"}, 
    "sp004":{ "name":"Sữa Chua Vị Mâm Xôi", "price":24000, "photo":"images/sanpham/blackberry.jpg"}, 
    "sp005":{ "name":"Sữa Chua Vị Dâu Tây", "price":25000, "photo":"images/sanpham/strawberry.jpg"}, 
    "sp006":{ "name":"Sữa Chua Vị Việt Quất", "price":26000, "photo":"images/sanpham/blueberry.jpg"}, 
    "sp007":{ "name":"Sữa Chua Vị Bưởi", "price":27000, "photo":"images/sanpham/grapes.jpg"}, 
    "sp008":{ "name":"Sữa Chua Vị Táo Xanh", "price":28000, "photo":"images/sanpham/green-apple.jpg"}, 
    "sp009":{ "name":"Sữa Chua Vị Dứa", "price":29000, "photo":"images/sanpham/pineapple.jpg"} 
}; 

function GoCart(){
    window.location.href = "donhang.html";
}
function addCart(id) {
    var buttonMap = {
        'sp001': 'button1',
        'sp002': 'button2',
        'sp003': 'button3',
        'sp004': 'button4',
        'sp005': 'button5',
        'sp006': 'button6',
        'sp007': 'button7',
        'sp008': 'button8',
        'sp009': 'button9',
    };

    var getbutton = buttonMap[id] || '';

    var quantity = parseInt(document.getElementById(getbutton).value) //lay so tu input number


    if (quantity <= 0 || isNaN(quantity)) {
        alert("Vui lòng nhập số lượng hợp lệ!");
        return;
    }

    var cart = JSON.parse(localStorage.getItem("cart")) || {}; // Lấy sản phẩm ra từ cart || chưa có thì tạo rỗng

    //Nếu sản phẩm đã có trong cart => thêm số lượng
    if (cart[id]) {
        cart[id].quantity += quantity;                  
    }
    //Nếu sản phẩm chưa có trong cart thì thêm vào cart
    else {
        cart[id] = {
            name: itemList[id].name,
            price: itemList[id].price,
            photo: itemList[id].photo,
            quantity: quantity
        };
    }

    localStorage.setItem("cart", JSON.stringify(cart)); //Lưu lại cart sau khi cập nhật sản phẩm!
    alert("Đã thêm vào giỏ hàng!");
}

function removeItem(id) {
    if (confirm("Bạn có chắc muốn xoá sản phẩm này?")) {
        var cart = JSON.parse(localStorage.getItem("cart")) || {};
        delete cart[id];
        localStorage.setItem("cart", JSON.stringify(cart));
        location.reload(); // reload để cập nhật giao diện
    }
}

function showCart(){

    var cart = JSON.parse(localStorage.getItem("cart")) || {};
    var container = document.getElementById("cartContainer");

    var tongTien = 0;

    for (var id in cart) {
        var item = cart[id];
        var thanhTien = item.price * item.quantity;
        tongTien += thanhTien;

        container.innerHTML += 
        `
        <div class="cartContain">
            <div class="cell1"><img src="${item.photo}" width="60"></div>
            <div class="cell2">${item.name}</div>
            <div class="cell3">${item.quantity}</div>
            <div class="cell4">${item.price.toLocaleString()}đ</div>
            <div class="cell5">${thanhTien.toLocaleString()}đ</div>
            <div class="cell6">
                <button onclick="removeItem('${id}')">X</button>
            </div>
        </div>
        `;
    }

    //Tính tiền
    var chietKhau = tongTien * 0.1;
    var thue = (tongTien - chietKhau) * 0.1;
    var tongDon = tongTien - chietKhau + thue;

    document.getElementById("tongTien").innerText = "Tổng thành tiền (A) = " + tongTien.toLocaleString() + "đ";
    document.getElementById("chietKhau").innerText = "Chiết khấu (B) = 0.1 x A = " + chietKhau.toLocaleString() + "đ";
    document.getElementById("thue").innerText = "Thuế (C) = 10% x (A - B) = " + thue.toLocaleString() + "đ";
    document.getElementById("tongDon").innerText = "Tổng đơn hàng = A - B + C = " + tongDon.toLocaleString() + "đ";
}

function confirmCart(){
    if (confirm("Bạn có chắc muốn đặt hàng?")) {
        var cart = JSON.parse(localStorage.getItem("cart")) || {};

        var isEmpty = true;
        for(var id in cart){
            isEmpty = false;
        }

        if(!isEmpty){
            for(var id in cart){
                delete cart[id];
            }
            localStorage.setItem("cart", JSON.stringify(cart));
            location.reload(); // reload để cập nhật giao diện
            alert("Đã đặt hàng thành công! Cảm ơn bạn vì đã đặt hàng của chúng tôi<3");
        }
        else{
            alert("Đơn hàng rỗng, vui lòng thêm sản phẩm!");
        }
    }
}
function clearCart(){
    if (confirm("Bạn có chắc muốn xoá tất cả không?")) {
        var cart = JSON.parse(localStorage.getItem("cart")) || {};

        var isEmpty = true;
        for(var id in cart){
            isEmpty = false;
        }

        if(!isEmpty){
            for(var id in cart){
                delete cart[id];
            }
            localStorage.setItem("cart", JSON.stringify(cart));
            alert("Đã xoá toàn bộ đơn hàng!");
            location.reload(); // reload để cập nhật giao diện
        }
        else{
            alert("Đơn hàng không có gì cả!");
        }
    }
}