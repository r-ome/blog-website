import React from "react";
import {
  Container,
  List
} from "./components"

const dummyBlogs = [
  {
    title: "something title",
    description: null,
    body: "SOMETHING SOMETHING SOMETHING"
  },{
    title: "something title 2",
    description: null,
    body: "SOMETHING SOMETHING SOMETHING"
  },{
    title: "something title 3",
    description: null,
    body: "SOMETHING SOMETHING SOMETHING"
  },{
    title: "something title 4",
    description: null,
    body: "SOMETHING SOMETHING SOMETHING"
  },{
    title: "something title 5",
    description: null,
    body: "SOMETHING SOMETHING SOMETHING"
  },
]

const Blog = () => {
  return (
    <Container>
      <List blogs={dummyBlogs}/>
    </Container>
  )
}

export default Blog;