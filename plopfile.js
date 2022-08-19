module.exports = function (plop) {
  plop.setGenerator("problem", {
    description: "this is a skeleton plopfile",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "controller name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/{{name}}/index.ts",
      },
    ],
  });
};
