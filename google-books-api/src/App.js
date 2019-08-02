import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Book Search
        </a>
      </header>
    </div>
  );
}
handleSubmit(e) {
  e.preventDefault();
  const book = (({title, url, description, rating}) => ({title, url, description, rating}))(this.state);
  const url ='https://www.googleapis.com/auth/books';
  const options = {
    method: 'POST',
    body: JSON.stringify(books),
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer $2a$10$ZhdeJefcb.5sx/DCmO/n8u5sJLcARAdbHw9tfm1mevGRq3s1.5DpW"
    }
  };

  fetch(url, options)
    .then(res => {
      if(!res.ok) {
        throw new Error('Something went wrong, please try again later');
      }
      return res.json();
    })
    .then(data => {
      this.setState({
        title: "",
        url: "",
        description: "",
        rating: 1
      });
      this.props.handleAdd(bookmark);
    })
    .catch(err => {
      this.setState({
        error: err.message
      });
    });
}


export default App;
