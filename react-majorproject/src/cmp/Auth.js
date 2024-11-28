import React, { Component } from "react";

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }
    Login() {
        console.warn("state", this.state);
        //alert("Login Sucessfull")

        fetch('https://randomuser.me/api/')
    .then(response => {
      if(response.ok) return response.json();
      throw new Error('Request failed.');
    })
    .then(data => {
      this.setState({name: data.results[0].name,
        image: data.results[0].picture.medium});
    })
    .catch(error => {
      console.log(error);
    });
    }

    render() {
        return (
            <div>
                <div>
                    <input
                        type="text"
                        onChange={(e) => {
                            this.setState({ email: e.target.value });
                        }}
                    />
                    <br /> <br />
                    <input
                        type="password"
                        onChange={(e) => {
                            this.setState({ password: e.target.value });
                        }}
                    />
                    <br /> <br />
                    <button onClick={() => this.Login()}>Login</button>
                </div>
            </div>
        );
    }
}

export default Auth;