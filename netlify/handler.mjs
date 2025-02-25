export const config = { path: "/edge/*" };

import worker from "../dist/main_node.mjs";

export default worker.fetch;
