
import { RiUserHeartFill } from "react-icons/Ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import styles from "../../styles/AuthForm.module.css";
import Image from "next/image";
//import AuthContext from "../../context/AuthContext";
export default function LoginPage() {
    /*
    strapi code
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error } = useContext(AuthContext);

  useEffect(() => error && toast.error(error));

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };*/



  
  return (
    <Layout title="Login Page">
      <div className={styles.auth}>
        <h1>
          <RiUserHeartFill />
          &nbsp;Sign In
        </h1>
        <ToastContainer />
        <form >
          <div>
            <label htmlFor="email">Email Address</label>

            <input
              type="email"
              id="email"
             // value={email}
             // onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            ></input>
          </div>
          <div>
            <label htmlFor="password">Password</label>

            <input
              type="password"
              id="password"
            //  value={password}
             // onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            ></input>
          </div>
          <input type="submit" value="Login" className="btn"></input>
        </form>
        <p><button className={styles.sign}><Image classname={styles.img} src="/images/Google/google.jpg" width="20" height="20"alt=""/>Sign In With Google</button></p>
        <p>
          New User?
          <Link href="/account/register"> Create an Account</Link>
        </p>
        <p>
          <Link href="/account/forgotpassword">Forgot Password?</Link>
        </p>
      </div>
    </Layout>
  );
}