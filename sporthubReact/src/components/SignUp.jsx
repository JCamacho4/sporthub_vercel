export default function SignUp() {
    return (
      <div className="card w-25">
  
        <form>
          <h3>Sign Up</h3>

          <div className="mb-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label>Name</label>
            <input 
              type="text" 
              className="form-control" 
              />
          </div>
          
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary mb-2">
              Sign Up
            </button>
          </div>
          
          <p className="forgot-password text-right">
            Already registered? <a href="/login">Log in here!</a>
          </p>
        </form>
  
      </div>
    );
  }
  