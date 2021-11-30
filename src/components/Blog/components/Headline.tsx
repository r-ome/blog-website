import React from "react";

interface HeadlineProps {
  title: React.ReactNode
}

const Headline = (props: HeadlineProps) => {
  return (
    <div>
      {props.title}
    </div>
  )
}

export default Headline;