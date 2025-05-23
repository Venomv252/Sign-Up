import "./First.css"
export default function Main() {
  return (
    <>
      <main class="main-content">
        <div class="auth-container signup-mode">
          <div class="auth-form-container">
            <div class="auth-form-wrapper">
              <h2>Create Account</h2>
              <form class="auth-form">
                <div class="form-group">
                  <input
                    placeholder="Full Name"
                    class=""
                    type="text"
                    value=""
                    name="name"
                  ></input>
                </div>
                <div class="form-group">
                  <input
                    placeholder="Email Address"
                    class=""
                    type="email"
                    value=""
                    name="email"
                  ></input>
                </div>
                <div class="form-group">
                  <input
                    placeholder="Password"
                    class=""
                    type="password"
                    value=""
                    name="password"
                  ></input>
                </div>
                <button type="submit" class="auth-btn">
                  Sign Up
                </button>
              </form>
              <div class="auth-switch">
                <p>
                  Already have an account? <button>Login</button>
                </p>
              </div>
            </div>
          </div>
          <div class="auth-animation-container">
            <div class="animation-circle circle-1"></div>
            <div class="animation-circle circle-2"></div>
            <div class="animation-circle circle-3"></div>
            <div class="animation-content">
              <h2>Welcome!</h2>
              <p>Login to access your personalized dashboard</p>
              <button class="animation-btn">Login</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
