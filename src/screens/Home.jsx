import  { useEffect, useRef } from 'react';
import  { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { doc, updateDoc } from "firebase/firestore";
import { deleteDoc } from "firebase/firestore";
import { db } from '../Config';
import {  getDocs } from "firebase/firestore";

const Home = () => {
  const [todo, setTodo]=useState([])
  const todoValue =useRef();
  useEffect(()=>{
async function getDatafromFairstore(){
  
  const querySnapshot = await getDocs(db , "todos");
  querySnapshot.forEach((doc) => {
    
    console.log(doc.id, " => ", doc.data());
    todo.push({id:doc.id,...doc.data()})
    setTodo([...todo])
  });

}
getDatafromFairstore()
  },[])

 async function addTodo(event){
    event.preventDefault()
    if(todoValue.current.value === ''){
      alert('fill the value')
      return 
    
    }
    const inputValue = todoValue.current.value
    // console.log(todoValue.current.value);
    // todo.push(todoValue.current.value)
    // setTodo([...todo])
    try {
      const docRef = await addDoc(collection(db, "todos"), {
       todo:inputValue
       
      });
    todo.push({
        todo:inputValue,
        id:docRef.id

      })
      setTodo([...todo])
      console.log(todo);
      
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
   async function editFunction(index){
      const newvalue = prompt ('enter new todo');
     todo[index].todo = newvalue
      setTodo([...todo])
      const washingRef = doc(db, "todos",todo[index].id)
      await updateDoc  (washingRef ,{
        todo:newvalue,
        
        
      })
      
  }
  async function deleteFunction (index){
    console.log(todo[index].id);
    
    todo.splice(index ,1);
    setTodo([...todo])

    await deleteDoc(doc(db, "todos", todo[index].id));

  }

  return (
      <>
        <div className='text-center bg-primary text-white p-2 rounded w-50 mx-auto mt-5'>
          <h1>Todo App</h1>
          <form onSubmit={addTodo}>
            <input type="text" placeholder='Enter Todo' style={{ width: 400 }} ref={todoValue} />
            <button className="btn btn-outline btn-warning">Add Todo</button>
          </form>
          <ul className='mt-4 list-unstyled'>
            {todo.length > 0 ? (
              todo.map((item, index) => (
                  <div key={index}>
                    
                  <li>
                    <button onClick={() => editFunction(index)}>Edit</button>
                    <button onClick={() => deleteFunction(index)}>Delete</button>
                    {item.todo}
                  </li>
                </div>
              ))
            ) : (
              <h1>Not found</h1>
            )}
          </ul>
        </div>
      </>
    );
  }
    export default Home;
    

 




