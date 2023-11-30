import React from "react";

class NoControlado extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const username = document.querySelector("input[name=username]").value;
    const password = document.querySelector("input[name=password]").value;
    console.log(`Data: ${username}, ${password}`);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="username" placeholder="mail@mail.com" />
        <input name="password" type="password" placeholder="password" />
        <input type="submit" />
      </form>
    );
  }
}

export default NoControlado;

//? Otra version
/* import React from "react";

class NoControlado extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Data: ${this.username.value}, ${this.password.value}`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input ref={(input) => (this.username = input)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" ref={(input) => (this.password = input)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default NoControlado; */
