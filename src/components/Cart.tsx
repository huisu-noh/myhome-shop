import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AddCount } from '../store';

export default function Cart() {
  const stock = useSelector((state: any) => {
    return state.stock;
  });
  const dispatch = useDispatch();

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>상품번호</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {stock.map((a: any, i: any) => {
            return (
              <tr key={i}>
                <td>{stock[i].id}</td>
                <td>{stock[i].name}</td>
                <td>{stock[i].count}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(AddCount(stock[i].id));
                    }}
                  >
                    +
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
