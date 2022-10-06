import React from 'react';
import axios from 'axios';

var handleSubmit = function(props) {
  axios.post('/glossaryList',{
    wordname: props.entry,
    definition: props.defentry
  })
  .then(() => {
    axios.get('/glossaryList')
    .then((response) =>{props.setGlossarylist(response.data)})
  })
  .catch(function (error) {
    console.log(error);
  })
}


const Usersubmit = function (props) {

  return (<form>
    <label>Input glossary Name:</label>
    <input type="text" value={props.entry} onChange={(event) => {
      props.setEntry(event.target.value)
    }}>
    </input>
    <br></br>
    <label>Input glossary definition:</label>
    <input type="text" value={props.defentry} onChange={(event) => {
      props.setDefentry(event.target.value)
    }}>
    </input>
    <button onClick= {() => handleSubmit(props)}>submit</button>
  </form>)

}

export default Usersubmit;