const MenuItem = function (title) {
  return (
    <li>
      <a href="">{title}</a>
    </li>
  );
};

const MainMenu = function () {
  return (
    <ul>
      <li>head</li>
    </ul>
  );
};

//MainMenu.append(MenuItem("first"));
//MainMenu.append(MenuItem("second"));

const root = document.getElementById("root");
const title = document.createElement("p");

title.textContent = "Hello";
//root.append(MainMenu());
root.append(title);

title.append = "Hello";
root.append(MainMenu());
// ReactDOM.render(
//   <div>
//     <MainMenu />
//   </div>,
//   root
// );
