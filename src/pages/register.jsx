import {Link} from "react-router";

function registerPage() {
    return (
        <>
        <Link className="registerRet" to="/">Go back to the homepage</Link>
            <div className="register-body">
                <form className="register-form">
                    <div className="comp">
                    <div>
                    <label className="labelReg">First Name </label>
                    <input className="inputRegister" type="text"/>
                    </div>
                    <div>
                    <label className="labelReg">Last Name </label>
                    <input className="inputRegister"/>
                    </div>
                    <div>
                    <label className="labelReg">Email </label>
                    <input className="inputRegister"/>
                    </div>
                    <div>
                    <label className="labelReg">Enter Password </label>
                    <input className="inputRegister"/>
                    </div>
                    <div>
                    <label className="labelReg">Renter Password  </label>
                    <input className="inputRegister"/>
                    </div>
                    <div>
                    <label className="labelReg">Username </label>
                    <input className="inputRegister"/>
                    </div>
                    <div>
                    <input className="register" type="submit" value="Register" />
                    </div>
            </div>
                </form>
            </div>
        </>
    );
}

export default registerPage;