import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, changeAge } from "./../store/userSlice.js";

function Cart() {
  let a = useSelector((state) => state.user);
  console.log(a);

  let b = useSelector((state) => state.재고);
  console.log(b);

  let 데이터 = useSelector((state) => state.데이터);
  console.log(데이터);

  let dispatch = useDispatch();

  return (
    <div>
      {a.name} {a.age}의 장바구니
      <button
        onClick={() => {
          dispatch(changeAge(100));
        }}
      >
        버튼
      </button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {데이터.map((k, i) => (
            <tr key={i}>
              <td>{데이터[i].id}</td>
              <td>{데이터[i].name}</td>
              <td>{데이터[i].count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(changeName());
                  }}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
