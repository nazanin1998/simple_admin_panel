import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Welcome from './components/Welcome/Welcome.js'
import App from './components/App/App.js';

function Comment(props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img className="Avatar"
                    src={props.avatarUrl}
                    alt={props.name}
                />
                <div className="UserInfo-name">
                    {props.name}
                </div>
            </div>
            <div className="Comment-text">
                {"props.text"}
            </div>
            {/* <div className="Comment-date">
                {formatDate(props.date)}
            </div> */}
        </div>
    );
}

var ob = {
    author: {
        name: "nazi",
        avatarUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAz1BMVEVOi/YAAAD////R0tTX2NpRkP8KGjPU1dcpKCX4+PhPjfpNivR2dnhkZmkiP2xRkP1Bdc4PGzGLi4syNDXFxsirrK45Z7YIDxpKhOpEfNkjHyA9bMC1tbfKzM4dHyCgoKALEyEpSYDg4ODv7+82YalIgeMaLlIZGBQQDgWbm5tvb29+fn5IRUa8vLxQUFBgYGAiGhYYEhSKiYaWpsKlxP5HU209OzqRlqOfuukfTJAfFQAOAAAkISU0TX4mJjAnKzoeDgA3VpAqNE0ZKUszW6HcQKjAAAADfklEQVR4nO3aC1PaWBiAYb5cpBwEDC3IRVAusVtUhK7rbq27tdv+/9+030kQAWvEGVdmTt5nnIGBMJPzekgOgUIBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADklwlfatd7/OpMHEV7LxGdlne9z6/NdOXju5f4Tdpm1zv9yrTBJ6+UGCV/z/AmTjY49kYjz/POpDSSuvccVxucTzyvJH2vLke5bWDnQUMaXr9fym0Dqy+liy3eCs42CIZeT868qYzy22A68S5lOJTL1cFO94d5ajDSM8K1nhh6q4NtiFR6+Wmgjofe8HhtsKVZZy7nF5sN9p1sMK2rT/V1n3+/+mPW0QrXf/51dfX54YlrBxscyK99Cbs3HTX/+jUO156JXWugEX4tNuVb2+B2HJu1bZybBso8oRD+PbMR2rWNbXa9w2/JHNx1/unMbg5yNepN3+4OxnezmYuzf1vh93/DcHxz8825qybbM7HOgHB8m+d5kDLl3CcAALjsudV+Hj4NdLPXO/oB0fUIpivSytqgLe5dIXmQjMyMs8doL6gkE8HFt4RpNVtm+wa6edm5z0nhqezpsn+lwaMrJsmDaQMTRzJw7mcGtarIXss8NDDt5prFo0kDEx+KfKntdo9fnymfikTl2vj+imh58xJqcqi0DbomPhGpunhAKGiEH6ZcHST/XxNvNlikGQwKRmfBwLlZYNkIkb4p0sHZBmdHS2fLC+b6vHFzFlim0LTjXBz8tEE9KC4E9dUvDfRQ4eCpMWxZ9qRvyq2ULobqfm/B1wbtxRMayYSF5K5LIczPwxMV6WGvFR0uiMz7S3OR+8ft2SO2m58cNh2KEO6lhz096zWf+GJtRXe5VdWhJYJpD6yfek9HV9nPUEnXid+TFzj1vWL6U1STNjgKMlws1sr3L3DQtg1cZhtMKxkuc9Cgu80xcdd7+T9rRc8l+JF5jcUFJqyJTIZB0LPrxCBoiDT0RtdIH/RmIpFx6Hz4JG1QCfziB9vAL9oGRT9poDcV/Wi56/17C2kDnwY0oAENaFCggUUDGlg0oIFFAxpYNKCBRYNlg+B8flH0/d679z3fLx7Np76fuwY6fE3gF5M/v9jzc9ngMRrQgAY0oEEOG4Qi/fdP+JifBhmiXe/emzDdagbnv3BNmbCWur9d4ejPLgAAAAAAAAAAAAAAAAAAAAAAAAAAwCP/AXoeZttnU45ZAAAAAElFTkSuQmCC"
    }

}
function Avatar(props) {
    return (
        <img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    );
}

ReactDOM.render(         <React.StrictMode>
    <App name='my love'/>         </React.StrictMode>
, document.getElementById('app'));
