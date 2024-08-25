const usernameInputNode = document.getElementById('username');
const passwordInputNode = document.getElementById('password');
const retypepasswordInputNode = document.getElementById('retypepassword');

const messageErrorNodes = document.getElementsByClassName('error-message');

function validateUsername() {
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (usernameInputNode.value.length === 0) {
        messageErrorNodes[0].innerText = 'Tên Đăng Nhập Không Được Bỏ Trống';
    } else if (!emailRegex.test(usernameInputNode.value)) {
        messageErrorNodes[0].innerText = 'Tên đăng nhập cần là Email !!';
    } else {
        messageErrorNodes[0].innerText = '';
    }
}

function validatePassword() {
    if (passwordInputNode.value.length === 0) {
        messageErrorNodes[1].innerText = 'Mật Khẩu Không Được Bỏ Trống';
    } else {
        messageErrorNodes[1].innerText = '';
    }
}

function validateRetypePassword() {
    if (retypepasswordInputNode.value.length === 0) {
        messageErrorNodes[2].innerText = 'Vui Lòng Nhập Lại Mật Khẩu';
    } else if (retypepasswordInputNode.value !== passwordInputNode.value) {
        messageErrorNodes[2].innerText = 'Mật khẩu nhập lại không khớp';
    } else {
        messageErrorNodes[2].innerText = '';
    }
}

function onClickLogin() {
    validateUsername();
    validatePassword();
    validateRetypePassword();

    if (
        messageErrorNodes[0].innerText.length === 0 &&
        messageErrorNodes[1].innerText.length === 0 &&
        messageErrorNodes[2].innerText.length === 0
    ) {
        localStorage.setItem('username', usernameInputNode.value);
        location.href = 'dangnhap.html';
    }
}
