import React from 'react';
import axios from 'axios';

var handleDelete = function (name,props) {
  axios.delete('/glossaryList',
    { data: { wordname: name } }
  )
  .then(() => {
    axios.get('/glossaryList')
    .then((response) => {props.setGlossarylist(response.data)})
  })
  .catch(function (error) {
    console.log(error);
  })
}

var handleEdit = function (name,props) {
  var result = prompt("You can enter your text below");
  axios.put('/glossaryList', {
    wordname: name,
    definition: result
  })
  .then (() => {
    axios.get('/glossaryList')
    .then((response) => {props.setGlossarylist(response.data)})
  })
  .catch(function (error) {
    console.log(error);
  })
}

const GlossaryList = (props) => {

  return (<div>
    {props.glossarylist.map((each) => {
      return <div>
        <br></br>
        {each.wordname}
        <br></br>
        <div>the definition is: </div>
        {each.definition}
        <button onClick={() => handleEdit(each.wordname,props)}>Edit</button>
        <button  onClick={()=> handleDelete(each.wordname,props)}>Delete</button>
        </div>
    })}
  </div>)

}

export default GlossaryList;