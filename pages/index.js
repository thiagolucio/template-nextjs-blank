function Login() {
    return (        
        <div className="container">
        <div className="login-container">
          <div className="login-img">
            <img src="assets/coruja.gif" className="rounded" alt="coruja te vigiando" />
          </div>
          <h3 className="title-login cinzel-font">Owl Login</h3>
          <div className="login-fields">
            <input className="input-user nobile-font animate__animated animate__headShake animate__slow animate__infinite animate__infinite animate__delay-3s" type="text" placeholder="username" />
            <input className="input-password nobile-font animate__animated animate__headShake animate__slow animate__infinite animate__delay-2s" type="password" placeholder="password"  />
            <button className="btn btn-block btn-owl mt-5 cinzel-font"><strong>Into the wild</strong></button>
            <div className="recover-options">
              <div className="mt-2 text-right">
                <a href="#" className="text-decoration-none">
                  <small className="text-owl">
                    Help! I'm lost in the forest!
                  </small>
                </a>
              </div>
            </div>
          </div>            
        </div>
      </div>       
    );
}

export default Login;