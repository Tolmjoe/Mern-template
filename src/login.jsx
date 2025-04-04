import {Link} from "react-router";

function LoginPage() {
    return (
        <>
            <Link className="loginRet" to="/">Go back to the homepage</Link>
            <div className="login-body">
                <form className="login-form">
                   <div className="embox"> <label className="labelEm">Email:  </label>
                    <input className="inputLogin" type="email"/>
                   </div>
                    <div className="passbox">
                    <label>Password: </label>
                    <input className="inputLogin" type="password"/>
                    </div>
                    <input className="labelLog" type="submit" value="Login" />
                </form>
            </div>
        </>
    );
}


export default LoginPage;