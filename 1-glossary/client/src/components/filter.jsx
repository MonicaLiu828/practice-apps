import React, { useState } from "react";
import {useEffect} from 'react';

var handlefilter = function (e, props) {
  console.log(e);
  e.preventDefault();
  var res = []
  var searched = props.filentry
  // console.log(searched)
  props.glossaryList.forEach((eachlist) => {
    if(eachlist.wordname === props.filentry) {
      res.push(eachlist)
    }
  })
  props.setGlossarylist(res);
}

const Filter = (props) => {
  return(<form>
      <label>filter by name: </label>
      <input type="text" value={props.filentry} onChange={(event) => {
        props.setFilentry(event.target.value)
      }}></input>
      <button onClick={(e) =>handlefilter(e, props)}>filter</button>
    </form>
  )

}

export default Filter;