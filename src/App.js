import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";
import fantasyBooks from "./books/fantasy.json";
import horrorBooks from "./books/horror.json";
import CommentArea from "./components/CommentArea";
import scifiBooks from "./books/scifi.json";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Component } from "react";

class App extends Component {
  state = {
    bookSelected: null,
  };

  setBookClicked = (value) => {
    this.setState({ bookSelected: value });
  };

  changeAppState = (newSelectedValue) => {
    this.setState({
      bookSelected: newSelectedValue,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <BookList setBookClicked={this.setBookClicked} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
