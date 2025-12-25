"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function Todo(props) {
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h2", { children: props.todo.title }), (0, jsx_runtime_1.jsx)("p", { children: props.todo.description }), (0, jsx_runtime_1.jsxs)("p", { children: ["Done: ", props.todo.done ? 'true' : 'false'] })] }));
}
(0, jsx_runtime_1.jsx)(Todo, { todo: {
        title: "Go To Gym",
        description: "8-10PM",
        done: true
    } });
//# sourceMappingURL=todo.js.map