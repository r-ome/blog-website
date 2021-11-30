import React from "react";

interface ItemListInterface {
  title: string,
  description: string,
  body: string
}

const Item = (props: ItemListInterface) => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      border: "1px solid black",
      marginBottom: "10px",
      cursor: 'pointer'
    }}>
      <div className="blog-list-title" >
        {props.title}
      </div>
      
      <div className="blog-list-description">
        {props.description}
      </div>

      <div className="blog-list-body">
        {props.body}
      </div>
    </div>
  );
}

export default Item;