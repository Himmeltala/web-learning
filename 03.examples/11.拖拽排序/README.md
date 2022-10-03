开发时间：2022 年 11 月 27。

GitHub 和 Gitee 个人主页中可以对自己的项目进行排序，并且是可拖拽的，于是我就想自己实现一个。

要熟练使用 CSS translate 进行元素平移。

在线浏览地址：https://enziandom.gitee.io/web-learning/03.examples/11.拖拽排序/index.html

基本思路是：页面载入时需要把元素虚拟化进二维数组中，并且虚拟化初始的元素所对应的 translate 值。这个 translate 二维数组在后期交换时会被修改。
