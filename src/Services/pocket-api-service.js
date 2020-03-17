import config from '../config'


const PocketApiService = {

  validateLogin(data, success, fail){
    return fetch(`http://localhost:8000/api/validateuser`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data)
      
    })
    .then(res => {
      if(!res.ok){ 
       return res.json().then(resJSON=>{fail(resJSON)
      });
      }
      return res.json().then(resJSON=>{success(resJSON)
      })
    })   
  },

  registerUser(data,success,fail){
    return fetch(`http://localhost:8000/api/adduser`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        if(!res.ok){
          return res.json().then(resJSON=>{fail(resJSON)})
        }
        return success()
      })
  },

  getNoteCards(id){
    return fetch(`http://localhost:8000/api/notecards?userId=${id}`)
      .then(res => {
        if(res.ok){
          return res.json().then(resJSON=>{console.log(resJSON)})
        }
      })
  }


}

export default PocketApiService