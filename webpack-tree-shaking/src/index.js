// import { func1 } from "./util_esm";
// func1();

// import { func1 } from "./util_commonjs";
// func1();

// import("./util_esm").then((util) => util.func1());

// bad case
// import { fill } from 'lodsash';

// good case 1
// import fill from "lodash/fill";

// good case 2
import { fill } from "lodash-es";

const arr = [1, 2, 3];
fill(arr, "a");
