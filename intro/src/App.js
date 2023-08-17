import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row } from 'reactstrap';

function App() {
  return (
    <div>
      <h3>
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <ProductList />
            <CategoryList />
          </Row>
        </Container>



      </h3>
    </div>
  );
}

export default App;
