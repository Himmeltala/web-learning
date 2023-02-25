import { Card, Button } from "antd";

interface PropsType {
  productList: IProductList[];
  onInsert: (product: IProductList) => void;
}

export default function ProductList({ productList, onInsert }: PropsType) {
  function handleClick(index: number) {
    onInsert(productList[index]);
  }

  return (
    <div className="f-c-c">
      {productList.map((e, i) => (
        <Card hoverable key={e.name} className="w-60 mr-4" cover={<img className="h-60" src={e.cover} />}>
          <div className="size-1.2 font-bold">{e.name}</div>
          <div className="size-0.5 text-ellipsis line-clamp-2 mt-4">{e.desc}</div>
          <div className="text-end color-red font-bold mt-4">¥{e.price}</div>
          <div className="text-end mt-4">
            <Button type="primary" size="small" onClick={() => handleClick(i)}>
              <span className="size-0.5">加入购物车</span>
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}
