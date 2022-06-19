import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let posts = [
   {id: 1, message: 'Hi, how are you', likesCount: 12},
   {id: 2, message: "it's my first post in my social network", likesCount: 2},
   {id: 2, message: "it's amazing", likesCount: 1},
   {id: 2, message: "i'm a future it specialist", likesCount: 43}
];

let dialogsData = [
   {id: '1', name: 'Dima'},
   {id: '2', name: 'Max'},
   {id: '3', name: 'Lera'},
   {id: '4', name: 'Dasha'},
   {id: '5', name: 'Igor'}
]

let messagesData = [
   {id: '1', message: 'Hi'},
   {id: '2', message: 'How are you?'},
   {id: '3', message: 'What are you doing'},
   {id: '4', message: 'What you thin about IT-KAMASUTRA?'}
]

ReactDOM.render(
   <App posts={posts} dialogsData={dialogsData} messagesData={messagesData}/>, document.getElementById('root')
);