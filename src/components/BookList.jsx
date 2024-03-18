// import React from "react";
// import SingleBook from "./SingleBook";
// import Row from "react-bootstrap/Row";
// import Container from "react-bootstrap/Container";

// function BookList(props) {
//   return (
//     <Container fluid>
//       <Row>
//         {props.books.map(function (book) {
//           return <SingleBook key={book.asin} book={book} />;
//         })}
//       </Row>
//     </Container>
//   );
// }

// export default BookList;

import React, { Component } from "react";
import SingleBook from "./SingleBook";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import CommentArea from "./CommentArea";
import { Form } from "react-bootstrap";
import FormGroup from "react-bootstrap/FormGroup";
import FormControl from "react-bootstrap/FormControl";

class BookList extends Component {
  state = {
    textToSearch: "",
    bookSelected: null, // asin del libro selezionato, null se nessun libro è selezionato
  };

  saveTextToSearch = (value) => {
    this.setState({ textToSearch: value });
  };

  setBookClicked = (asin) => {
    this.setState({ bookSelected: asin });
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col md={6}>
            <Form>
              <FormGroup>
                <FormControl
                  type="text"
                  name="search"
                  id="search"
                  value={this.state.textToSearch}
                  placeholder="Cerca libro"
                  onChange={(e) => this.saveTextToSearch(e.target.value)}
                />
              </FormGroup>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Row>
              {this.props.books
                .filter((book) => book.title.toLowerCase().includes(this.state.textToSearch.toLowerCase()))
                .map((book) => (
                  <SingleBook key={book.asin} book={book} setBookClicked={this.setBookClicked} />
                ))}
            </Row>
          </Col>
          <Col md={6}>
            <CommentArea bookAsin={this.state.bookSelected} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookList;
