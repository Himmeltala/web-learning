import { Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

export default function BottomMenu(props: { trolleyList: IProductList[] }) {
  return (
    <div className="f-c-c mt-4">
      <div className="size-1.2 color-red mr-4">¥1000</div>
      <div>
        <Badge count={props.trolleyList.length}>
          <ShoppingCartOutlined className="size-1.2" />
        </Badge>
      </div>
    </div>
  );
}
