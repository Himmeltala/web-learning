# 基础知识

tsx 写标签有许多不同之处。

- style 内联样式符合 js 对象书写，在 html 中，样式属性键是短横线分割，在 tsx 中以驼峰命名法平替即可，没有学习成本。
- 与 js 数据有关联时，通过 `{}` 即可。Vue 中模板语法是 `:class` 这样的。

React Hook 之后，官方推荐使用纯函数写组件，不推荐 class 组件，但 class 组件与函数组件并存，没有被替换。所以，学习仓库以函数组件来学习。

# 组件学习

1. 父组件传递子组件：props；
2. 子组件通知父组件：回调函数；
3. 状态提升：父组件管理子组件通用的数据。

状态提升：父组件更新对象数据需要拷贝。

```ts
function handleInsert(newVal: IProductList) {
  setTrolleyList([...trolleyList, newVal]);
}
```

## state 快照机制

函数组件的 state 不是类组件的异步更新，更不可能是同步更新，而是独有的快照更新。

快照更新的意思是，不管 setXXX 多少次，都是基于那个时候的快照更新的，快照保留了那个时候的状态。

```jsx
export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <h1>{number}</h1>
    <button onClick={() => {
      setNumber(number + 5);
      setTimeout(() => {
        alert(number);
      }, 3000);
    }}>+5</button>
  )
}
```

number 按理来说已经是 5 了，那么 alert 弹出的结果也就是 5，实际上并不是这样。alert 弹出的结果是 0。

打破这个快照机制，需要传递一个**状态更新函数**：

```jsx
export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(n => n + 5);
          setNumber(n => n + 5);
        }}>
        +10
      </button>
    </>
  );
}
```
