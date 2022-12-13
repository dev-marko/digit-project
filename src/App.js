import { useEffect, useState } from "react";
import menuObject from "./assets/data/menu.json";

const App = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    setMenu(menuObject.data);
    console.log(menu);
  }, [menu])

  return (
    <div>
      {
        menu.map((item) => {
          return <div>{item.name}</div>
        })
      }
    </div>
  );
}

export default App;
