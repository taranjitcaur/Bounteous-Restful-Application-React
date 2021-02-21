import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Results from './results';

const App = () => {
  const [data, setData] = useState([])
  const getTVShowNames = (title) => {    
    let cancel
    axios({
      method: 'get',
      url: `http://api.tvmaze.com/search/shows?q=${title}`,
      responseType: 'stream'
    }, {cancelToken: new axios.CancelToken(c => cancel =c )} ).then(function (response) {
        setData(response.data)        
    });
    return () => cancel()  
}
useEffect(() => {
    getTVShowNames('superman')
  }, [])    
  return (    
    <div className="App">        
         <Results data={data}/>   
    </div>
  );
}
export default App;