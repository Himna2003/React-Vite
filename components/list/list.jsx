import React from 'react';
import './list.css';

const List = (props) => {
  return (
    <li className={props.checked ? 'list checked' : 'list'}>
      {props.item.text}
      <span>
        <i
          className="fa-solid fa-trash icon-delete"
          onClick={() => {
            props.deleteItem(props.index);
          }}
        ></i>  
      </span>
        <input className ="check" type="checkbox"
          checked={props.checked}
          onChange={() => {
            props.toggleCompletion(props.index);
          }} 
        />
    </li>
  );
};

export default List;

