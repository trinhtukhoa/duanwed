const usernameInputNode = document.getElementById('username');
const passwordInputNode = document.getElementById('password');

const messageErrorNodes = document.getElementsByClassName('error-message');

function onClickLogin(){
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    console.log('regex',emailRegex.test(usernameInputNode.value));
    if(usernameInputNode.value.length === 0){
        messageErrorNodes[0].innerText = 'Tên Đăng Nhập Không Được Bỏ Trống'

    } 
    else if (emailRegex.test(usernameInputNode.value) ===false) {
        messageErrorNodes[0].innerText = 'Tên đăng nhập cần là Email !!';

    }
    else {
        messageErrorNodes[0].innerText = '';

    }
    if(passwordInputNode.value.length === 0){
        messageErrorNodes[1].innerText = 'Mật Khẩu Không Được Bỏ Trống'

    }
    else{
        messageErrorNodes[1].innerText = '';

    }
    if(messageErrorNodes[0].innerText.length === 0 && messageErrorNodes[1].innerText.length === 0){
        localStorage.setItem('username', usernameInputNode.value);
        location.href = 'index.html';
    }

}