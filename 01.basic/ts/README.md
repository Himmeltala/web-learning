# 编译生成 js 文件

编译 TS 文件必须先安装 ts-node、typescript 依赖包。`npm i -g ts-node typescript`。

写好的 ts 文件，使用命令`tsc`编译：

```cmd
tsc index.ts
```

编译之后生成 js 文件，使用命令`node`运行 js 文件：

```cmd
node index.js
```

# 直接编译运行

使用指令`ts-node`直接编译并允许 ts 文件，这个命令不会生成 js 文件：

```bash
ts-node index.ts
```

# 什么是 TS

TypeScript 是 JavaScript 的超集。有断言、交叉类型、接口等优秀的特性。TypeScript 对其进行了补充。

由于 TypeScript 不是 ECMA(标准的国际组织)制定和提出的新特性，而是微软开发出来的 JavaScript 超集。目前，浏览器并不支持 TypeScript 直接运行。
