import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Home() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <Head>
        <title>Login</title>
        <meta name="description" content="Login Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.body}>
          <h2>Cheffy</h2>
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
            maiores repudiandae quas quis voluptates sequi consequuntur
            laboriosam obcaecati amet itaque, quos, fuga ab animi, molestiae
            aspernatur unde provident quaerat. Praesentium.
          </p>
        </div>

        <div className={styles.part2}>
          <form className={styles.form}>
            <h1 className={styles.welcome}>Welcome Back</h1>
            <p className={styles.continue_text}>Sign in to continue</p>
            <div className={styles.input}>
              <i className={`fa fa-envelope ${styles.icon} `}></i>
              {/* <label htmlFor="exampleInputEmail1">Email</label> */}
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className={styles.input_password}>
              <i className={`fa fa-lock ${styles.icon} `}></i>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter your Password"
                required
              />
            </div>
            <div className={styles.keep}>
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                checked="checked"
              />
              <p className={styles.keepsign}>Keep me signed in</p>
            </div>
            <p className={styles.terms}>
              By signing in, you agree to our{" "}
              <span>
                Terms and <br />
                Conditions
              </span>{" "}
              and <span>Privacy statement.</span>{" "}
            </p>
            <div className={styles.button}>
              <Link href="/success">
                <button type="submit" className={styles.btn}>
                  SIGN IN NOW
                </button>
              </Link>
              <p>Forgot password?</p>
            </div>
            <hr />
            <div className={styles.continue_with}>
              <p>or continue with</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                {" "}
                <path
                  d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                  fill="#1876F1"
                ></path>{" "}
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"
                  fill="#067CB6"
                />
              </svg>
            </div>
          </form>
          <div className={styles.question}>
            <p>Don&apos;t have an account?</p>
            <Link href="/sign-up">
              <button className={styles.sign_up}>SIGN UP</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
