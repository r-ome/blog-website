import React from "react";

interface ContainerProps {
  style: React.CSSProperties,
  children: React.ReactNode
}

const Container = (props: ContainerProps) => {
  return (
    <div style={{
      border: '1px solid red',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      padding: '10px'
    }}>
      <h2> Container </h2>
      <div>
        {props.children}
      </div>
    </div>
  );
}

export default Container;