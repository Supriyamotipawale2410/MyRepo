import "./LoginComponent.css"

    export default function LoginComponent(){
    return (
        <div className="bg">
      <div className="login-container">
        <form>
            <h1>Please login here : </h1>
          <h2>Hello user</h2>
          <label>Username:</label>
          <input type="text" placeholder="Enter username"/>
          <br />
          <label>Password:</label>
          <input type="password" placeholder="Enter password" />
          <br />
          <label>Role:</label>
          <select>
            <option value="">Select role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="gym">Gym</option>
          </select>
          <br />
          <button type="submit">Login</button>
          <br />
          <a href ="#">Forgot password</a>&nbsp;
          <a href ="#">Register</a>
        </form>
      </div>
      </div>
    );
  }
  