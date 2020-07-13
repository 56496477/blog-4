(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{815:function(n,e){n.exports='### Partial<T>\n\n`Partial<T>`: 意味 T 集合的子集;\n\n### Pick<T, K>\n\n`Pick<T, K>`: 相对 `Partial<T>`, `Pick<T, K>` 限制了子集中必须含有 K 定义的类型字段。\n\n```js\ninterface Todo {\n  title: string;\n  description: string;\n  completed: boolean;\n}\ntype TodoPreview = Pick<Todo, "title" | "completed">;\nconst todo: TodoPreview = {\n  title: "Clean room",\n  completed: false\n};\n```\n\n### Readonly<T>\n\n`Readonly<T>`: T 中类型只读;\n\n### Record<K, T>\n\n`Record<K, T>`: 建立 K 到 T 之间的 map 映射。\n\n```js\ninterface PageInfo {\n  title: string;\n}\ntype Page = "home" | "about" | "contact";\nconst x: Record<Page, PageInfo> = {\n  about: { title: "about" },\n  contact: { title: "contact" },\n  home: { title: "home" }\n};\n```\n\n### Omit<T, K>\n\n`Omit<T, K>`: 申明一个类型其在 T 类型中`移除 K 中包含的属性值`;\n\n```js\ninterface Todo {\n  title: string;\n  description: string;\n  completed: boolean;\n}\ntype TodoPreview = Omit<Todo, "description">;\nconst todo: TodoPreview = {\n  title: "Clean room",\n  completed: false\n};\n```\n\n### Exclude<T, U>\n\n`Exclude<T, U>`: 申明一个类型其在 T 类型中`移除 U 中所包含的类型`;\n\n```js\ntype T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"\ntype T1 = Exclude<"a" | "b" | "c", "a" | "b">; // "c"\ntype T2 = Exclude<string | number | (() => void), Function>; // string | number\n```\n\n### NonNullable<T>\n\n`NonNullable<T>`: 申明一个类型其将 T 类型中的 null 与 undefined 移除;\n\n### InstanceType<T>\n\n`InstanceType<T>`: 申明一个由构造函数实例类型组合而成的类型;\n\n```js\nclass C {\n  x = 0;\n  y = 0;\n}\ntype T0 = InstanceType<typeof C>; // C\ntype T1 = InstanceType<any>; // any\ntype T2 = InstanceType<never>; // any\ntype T3 = InstanceType<string>; // Error\ntype T4 = InstanceType<Function>; // Error\n```\n\n### link\n\n* [utility-types](https://www.elsewebdevelopment.com/wp-content/uploads/typescript-3.7-utility-types-printable-cheatsheet.pdf)\n'}}]);