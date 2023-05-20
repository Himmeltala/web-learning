import { Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

interface PropsType {
  trolleyList: IProductList[];
}

function calcPrice(trolleyList: IProductList[]) {
  let totalPrice = 0;
  for (let i = 0; i < trolleyList.length; i++) {
    totalPrice += trolleyList[i].price;
  }
  return totalPrice;
}

export default function BottomMenu({ trolleyList }: PropsType) {
  return (
    <div className="f-c-c mt-4">
      <div className="size-1.2 color-red mr-4">¥{calcPrice(trolleyList)}</div>
      <div>
        <Badge count={trolleyList.length}>
          <ShoppingCartOutlined className="size-1.2" />
        </Badge>
      </div>
    </div>
  );
}
