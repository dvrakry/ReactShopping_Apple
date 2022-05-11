import axios from "axios";
import { Button } from "react-bootstrap";

function MainPage(props) {
  return (
    <>
      <div
        className="main-bg"
        style={{ backgroundImage: `url(${props.ag})` }}
      ></div>

      <div className="container">
        <div className="row">
          {props.shoes.map((a, i) => {
            return <props.Card shoes={a} key={i} i={i} />;
          })}
        </div>

        <Button
          onClick={() => {
            axios
              .get("https://codingapple1.github.io/shop/data2.json")
              .then((result) => {
                console.log(result.data);
                // let copy = [...shoes, ...result.data];
                // setShoes(copy); => 편법
                const copy = props.shoes.concat(result.data);
                props.setShoes(copy);
              })
              .catch(() => {
                console.log("Ajax 실패");
              });
          }}
          variant="primary"
        >
          더보기
        </Button>
      </div>
    </>
  );
}

export default MainPage;
