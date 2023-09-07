import { Component } from "react";
import { Button, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";

class SingleBook extends Component {
  state = {
    review: {
      name: "",
      rate: "",
      comment: "",
      idBook: "",
    },
  };
  handleChange = (propertyName, propertyValue) => {
    this.setState({ review: { ...this.state.review, [propertyName]: propertyValue } });
  };

  postOn = (event, bookId) => {
    event.preventDefault();
    this.setState({ review: { ...this.state.review, idBook: bookId } });
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NjkxOTEwYmNhMDAwMTQ1ODQwMTMiLCJpYXQiOjE2OTQwOTc5NzEsImV4cCI6MTY5NTMwNzU3MX0.GdQsz182yV7pgRdapt0yK0usVcEy9HbUeZlMhOhMAHQ",

        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.review),
    }).then((response) => console.log(response.ok));
  };
  render() {
    const book = this.props.book;
    return (
      <Card>
        <Card.Img variant="top" src={book.img} height={300} className="object-fit-cover" />
        <Card.Body>
          <Card.Title className="noCapo">{book.title}</Card.Title>
          <Form
            onSubmit={(event) => {
              this.postOn(event, book.asin);
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label>Nome:</Form.Label>
              <Form.Control
                type="text"
                placeholder="your name..."
                value={this.state.review.name}
                onChange={(event) => this.handleChange("name", event.target.value)}
                required
              />
            </Form.Group>
            <Form.Select
              aria-label="Default select"
              value={this.state.review.rate}
              onChange={(event) => this.handleChange("rate", event.target.value)}
              required
            >
              <option value="">rate us...</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Select>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={this.state.review.comment}
                onChange={(event) => this.handleChange("comment", event.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    );
  }
  //   console.log(prop);
}
export default SingleBook;
