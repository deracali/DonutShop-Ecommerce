import styled from "styled-components";
import RiHeart3Line from "react-icons/ri";
import Colors from "../../Colors";
import Img from "./imgStyled";
import Row from "./Row";
import PricedIndicator from "./PricedIndicator";

const MostSaleItemEl = styled.span`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  min-width: 40vw;
  align-items: center;
  background-color: ${Colors.Gray};
  padding: 1.5rem;
  min-height: min-content;
  border-radius: 50px;

  > img {
    width: 75%;
    filter: drop-shadow(0px 11px 0.5px #21212115);
  }
`;
const Title = styled.span`
  font-weight: 400;
  font-size: 1.1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const Like = styled.span`
  background-color: ${Colors.Gray2};
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  color: ${Colors.Ash};
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 1.3rem;
`;
const Price = styled.span`
  font-size: 1.3rem;
  font-weight: 500;
  color: ${Colors.Primary};
`;

export default function MostSaleItems({ id, title, image, price }) {
  const { Cart, SetCart } = useContext(CartContent);
  function addToCart() {
    const tmpItems = Cart.Items;
    let total = Cart.Total;

    const index = tmpItems.findIndex((x) => x.id === id);
    if (index >= 0) {
      tmpItems[index].qnty += 1;
    } else {
      tmpItems.push({
        id,
        image,
        title,
        qnty: 1,
        price,
      });
    }

    total += price;
    total = Math.round(((total + Number.EPSILON) * 100) / 100);
    const f = { Total: total, Items: tmpItems };
    SetCart(f);
    localStorage.setItem("Cart", JSON.stringify(f));
  }
  return (
    <MostSaleItemEl
      onClick={() => {
        addToCart();
      }}
    >
      <Img src={image} />
      <Title>{title}</Title>
      <Row jc="space-between">
        <Like>
          <RiHeart3Line />
        </Like>
        <Price>
          <PricedIndicator fontSize="1.1rem" />
          {price}
        </Price>
      </Row>
    </MostSaleItemEl>
  );
}
