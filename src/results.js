import React from 'react';
var _ = require('lodash');
const Results = ({data}) => {  
    let resultsArr = []
    for(const value of data) {
        const {show} = value
        if(show.image) {
            resultsArr.push(show)
        }
    }
   const filterType = _.sortBy(resultsArr, 'name');

   const renderdItems =  filterType.map((item, index) => { 
    console.log(item.name)
        return <table key={item.id}><thead><tr><th>{item.name}<hr></hr></th></tr></thead>
        <tbody><tr><td><img src={(item.image) ? item.image.medium : ''} alt= {item.name}/></td></tr></tbody>
        </table>
    })
    return <ul> {renderdItems}</ul>
}   
export default Results