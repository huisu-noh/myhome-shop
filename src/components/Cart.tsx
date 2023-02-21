import { Table } from 'react-bootstrap';

export default function Cart() {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>블랙 슈즈</td>
            <td>1</td>
            <td>무엇을 변경</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
