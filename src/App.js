import React,{useState} from 'react';
import s from './global.module.scss'
import  {data}  from './store/data'
import Title from './components/title';
import List from './components/list/List';
// import AddItem from './components/addItem/AddItem';
import AddList from './components/addlist/AddList';



function App() {
  const [details,setDetails]= useState(data)
  const [showAdd,setShowAdd]= useState(null)
  return (
    <div className={s.App}>
      <div className={s.listContainer}>
        <Title>My Lessons</Title>
        <button className={s.createBtn} onClick={() => setShowAdd(true)}>Create new post</button>
        {/* <AddItem details={details} setDetails={setDetails}/> */}
        <List details={details} setDetails={setDetails}/>
         {showAdd ? <AddList setShowAdd={setShowAdd} details={details} setDetails={setDetails}/> : showAdd}
      </div>
    </div>
  );
}

export default App;
