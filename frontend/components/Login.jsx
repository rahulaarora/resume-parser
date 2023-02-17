import classes from "../styles/Login.module.css";
import { useSession, signIn } from "next-auth/react";

const Login = () => {
    function signInHandler(event) {
        event.preventDefault();
        signIn(undefined, { callbackUrl: '/', redirect: false });
    }

    return (
        <div>
            <div className={`${classes.clapyResets} ${classes.root}`}>
                <div className={classes.sec}>
                    <div className={classes.login}>Login</div>
                    <div className={classes.sec2}>
                        <div className="justify-content-center">
                            <button
                                type={"button"}
                                onClick={signInHandler}
                                className={classes.login2 + " " + classes.sec8}
                            >
                                Sign In / Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;