import React from 'react';
import posed from 'react-pose';
import './App.css';

const Box = posed.div({
  hoverable: true,
  draggable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  hover: {
    scale: 1.2,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
  },
  drag: {
    scale: 1.1,
    boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
  }
});

const Input = posed.input({
  focusable: true,
  init: {
    color: '#aaa',
    outlineWidth: '0px',
    outlineOffset: '0px',
    scale: 1
  },
  focus: {
    color: '#000',
    outlineWidth: '12px',
    outlineOffset: '5px',
    outlineColor: '#AB36FF',
    scale: 1.2
  }
});

const Label = posed.span({
  init: { color: '#000' },
  hover: { color: 'rgb(255, 0, 0)' },
  drag: { color: 'rgb(7, 34, 247)' }
});
const Example = () => <div><Box className="box"><Label>起风了</Label></Box> <Input value="Gimme focus!" /></div>;

export default Example;
