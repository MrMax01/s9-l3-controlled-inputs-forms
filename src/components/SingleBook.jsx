import Card from "react-bootstrap/Card";

const SingleBook = (prop) => {
  //   console.log(prop);
  return (
    <Card>
      <Card.Img variant="top" src={prop.book.img} height={300} className="object-fit-cover" />
      <Card.Body>
        <Card.Title className="noCapo">{prop.book.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};
export default SingleBook;
