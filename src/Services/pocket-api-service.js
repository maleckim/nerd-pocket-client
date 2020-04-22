import config from '../config'


const PocketApiService = {

  validateLogin(data, success, fail) {
    return fetch(`${config.API_ENDPOINT}/api/validateuser`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data)

    })
      .then(res => {

        if (res.ok) {
          return res.json().then(resJSON => {
            success(resJSON)
          })
        }
        throw new Error(res.statusText)
      })

      .catch(err => {return fail(err.message)})
  },


  registerUser(data, success, fail) {
    return fetch(`${config.API_ENDPOINT}/api/adduser`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(resJSON => { fail(resJSON) })
        }
        return success()
      })
  },

  getNoteCards(id) {
    return fetch(`${config.API_ENDPOINT}/api/notecards?userId=${id}`)
      .then(res => {
        if (res.ok) {
          return res.json()
        }
      })
      .then(resJSON => {
        return resJSON
      })
  },

  addNoteCards(id, data) {

    data['id'] = id

    return fetch(`${config.API_ENDPOINT}/api/notecards`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        if (res.ok) {
          Promise.resolve();
          window.location.reload();
        }
      })
  },

  deleteNoteCard(id) {
    return fetch(`${config.API_ENDPOINT}/api/notecards`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ id })
    })
      .then(res => {
        if (res.ok) {
          Promise.resolve();
          window.location.reload();
        }
      })
  },

  editNoteCard(id, data){

    data['id'] = id;

    return fetch(`${config.API_ENDPOINT}/api/notecards/edit`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        if(res.ok) {
          Promise.resolve();
          window.location.reload();
        }
      })
  },

  getNotes(id) {
    return fetch(`${config.API_ENDPOINT}/api/notes?userId=${id}`)
      .then(res => {
        if (res.ok) {
          return res.json()
        }
      })
      .then(resJSON => {
        return resJSON
      })
  },

  addNote(id, data) {

    data['id'] = id

    return fetch(`${config.API_ENDPOINT}/api/notes/add`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        if (res.ok) {
          Promise.resolve();
          window.location.reload();
        }
      })
  },

  editNote(id, data){

    data['id'] = id;

    return fetch(`${config.API_ENDPOINT}/api/notes/edit`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        if(res.ok) {
          Promise.resolve();
          window.location.reload();
        }
      })
  },

  deleteNote(user_id, note_id){
    let data = {
      user_id:user_id,
      note_id:note_id
    }

    return fetch(`${config.API_ENDPOINT}/api/notes`, {
      method: 'DELETE',
      headers: {
        'content-type':'application/json',
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        if(res.ok){
          Promise.resolve();
          window.location.reload();
        }
      })
  },

  getDeadlines(id) {
    return fetch(`${config.API_ENDPOINT}/api/deadlines?userId=${id}`)
      .then(res => {
        if (res.ok) {
          return res.json()
        }
      })
      .then(resJSON => {
        return resJSON
      })
  },

  createDeadline(data){

    return fetch(`${config.API_ENDPOINT}/api/deadlines`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        if (res.ok) {
          Promise.resolve();
          window.location.reload();
        }
      })

  },

  deleteDeadline(id){
    
    return fetch(`${config.API_ENDPOINT}/api/deadlines`, {
      method: 'DELETE',
      headers: {
        'content-type':'application/json',
      },
      body: JSON.stringify({id})
    })
      .then(res => {
        if(res.ok){
          Promise.resolve();
          window.location.reload();
        }
      })
  },
}

export default PocketApiService