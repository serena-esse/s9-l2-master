import Alert from "react-bootstrap/Alert";

function Welcome() {
  return (
    <Alert variant="success">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
        Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so
        that you can see how spacing within an alert works with this kind of content.
      </p>
      <hr />
      <p className="mb-0">Dove le storie prendono vita.</p>
    </Alert>
  );
}

export default Welcome;
