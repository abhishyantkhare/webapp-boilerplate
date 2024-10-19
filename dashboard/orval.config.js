module.exports = {
  immersiveai: {
    output: {
      mode: "tags-split",
      target: "src/api/generated/queries",
      schemas: "src/api/generated/schemas",
      client: "react-query",
      mock: true,
    },
    input: {
      target: "../backend/openapi.json",
    },
  },
};
