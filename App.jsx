import Header from './components/header/header'
import Form from './components/form/form'
import List from './components/list/list'
import { useState } from 'react'
function App() {
  const [list, setList] = useState([]);

  const addList = (newItem) => {
    setList([...list, { text: newItem, completed: false }]);
  }

  const deleteItem = (key) => {
    const newList = [...list];
    newList.splice(key, 1);
    setList(newList);
  }
  const toggleCompletion = (index) => {
    const newList = [...list];
    newList[index].completed = !newList[index].completed;
    setList(newList);
  }
  return (
    <div>
      <Header />
      <Form addList={addList} />
      <hr />
      {list.map((listItem, i) => (
        <List key={i} index={i} item={listItem} deleteItem={deleteItem} toggleCompletion={toggleCompletion}/>
      ))}
    </div>
  );
}

export default App;
