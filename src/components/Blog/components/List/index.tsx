import React from "react";
import { Item } from "./components";

interface Blog {
  title: string,
  description: string,
  body: string
}

interface ListProps {
  blogs: Blog[] 
}

const List = (props: ListProps) => {
  return (
    <div>
      {props.blogs.map((item: Blog, i) => {
        return <Item key={i} {...item} />
      })}
    </div>
  )
}

export default List;