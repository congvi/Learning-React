import React from 'react';
import ReactDOM from 'react-dom';
const host = document.getElementById('new-content');
const timer = document.getElementById('timer');
const todolist = document.getElementById('todolist');
const hello = document.getElementById('hello');
const checknumber = document.getElementById('checknumber');
const event = document.getElementById('event');
import {MarkdownEditor} from './List/List';
import {Timer} from './List/Timer';
import {TodoApp} from './List/Todolist';
import {Hello} from './List/Hello';
import {TodoChecknumber} from './List/Checknumber';
import {Avatar} from './List/Event';

if (!host) {
  throw new Error('Cannot attach app to DOM');
}

ReactDOM.render(
  <MarkdownEditor/>,
  host
);

if (!timer) {
  throw new Error('Cannot attach app to DOM');
}

ReactDOM.render(
  <Timer/>,
  timer
);

if (!todolist) {
  throw new Error('Cannot attach app to DOM');
}

ReactDOM.render(
  <TodoApp/>,
  todolist
);

if (!hello) {
  throw new Error('Cannot attach app to DOM');
}

ReactDOM.render(
  <Hello name="Everyone," temperature="27°C"/>,
  hello
);

if (!checknumber) {
  throw new Error('Cannot attach app to DOM');
}

ReactDOM.render(
  <TodoChecknumber />,
  checknumber
);

if (!event) {
  throw new Error('Cannot attach app to DOM');
}

ReactDOM.render(
  <Avatar />,
  event
);