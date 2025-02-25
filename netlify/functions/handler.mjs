export const config = { path: "/*" };

import worker from "../../dist/main_node.mjs";

export default worker.fetch;
