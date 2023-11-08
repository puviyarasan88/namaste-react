const parent = React.createElement(
  "div",
  { id: "heading" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is H1 tag"),
    React.createElement("h2", {}, "This is H2 Tag"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
