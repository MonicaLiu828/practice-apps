import React, { useState } from "react";
import {useEffect} from 'react';
import axios from 'axios';
import Usersubmit from './usersubmit.jsx';
import Filter from './filter.jsx';
import GlossaryList from './glossaryList.jsx'

const App = () => {
  const[entry, setEntry] = useState('');
  const[defentry, setDefentry] = useState('')
  // const[]
  const[filentry, setFilentry] =useState('');
  const[glossaryList, setGlossarylist] = useState([]);

  useEffect(() => {

    axios.get('/glossaryList')
    .then(function (response) {
      setGlossarylist(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
  },[]);



  return (
    <div>
      <Usersubmit entry={entry} setEntry={setEntry} defentry={defentry} setDefentry={setDefentry}
      setGlossarylist={setGlossarylist}/>
      <Filter setFilentry={setFilentry} filentry={filentry} glossaryList={glossaryList} setGlossarylist={setGlossarylist}/>
      <GlossaryList glossarylist={glossaryList} setGlossarylist={setGlossarylist}/>
    </div>
  )
}

export default App;


