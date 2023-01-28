因为最近使用 uniapp 的 swiper 组件，自己实现了一个标签页。所以，在这里单独拿出来在这里实现，也是网页上非常常见的轮播图，只不过这个是
`标签+翻页=标签页`。[浏览效果](https://Himmelbleu.gitee.io/web-learning/03.examples/10.%E6%A0%87%E7%AD%BE%E9%A1%B5/index.html)

性能方面还没有考察，不过在数组末尾和开头处存在一种混乱的滑动情况。这个后期有时间再修复。主要是熟练使用数组进行重排序，熟练使用 CSS translateX 进行元素平移。

注意：手机端是没有用的，因为监听器是`mouseXxx`系列，仅仅针对于 PC 端鼠标而设计。

下图是标签页向右、向左，数组分别移动的变换规律：

![](../../docs/%E6%A0%87%E7%AD%BE%E9%A1%B5%E8%BD%AE%E8%AF%A2%E7%9A%84%E8%A7%84%E5%BE%8B.jpg)
