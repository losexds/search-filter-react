import {useState} from "react";

import "./css/App.css"

export default function App () {
  const list = [
      "Banana",
      "Apple",
      "Orange",
      "Mango",
      "Pineapple",
      "Watermelon"
  ]

  const [List, UpdateList] = useState(list);

  const handleSearch  = e => {
      if (e.target.value === "") {
          UpdateList(list);
          return;
      }

      const filteredValues = list.filter(
          item => item.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
      );
      UpdateList(filteredValues);
  }


  return (
      <div className="App">
        <div className="container">
            <div className="__header">
                <input onChange={handleSearch} className="input" type="text" placeholder="Введите текст" />
            </div>
            <div className="__body_list">
                {List.map(item => (
                    <div key={item} className="item">{item}</div>
                ))}
            </div>
            <div className="__footer">
                <a href="https://github.com/losexds" target="_blank" rel="noreferrer">@losexds</a>
            </div>
        </div>
      </div>
  )
}
