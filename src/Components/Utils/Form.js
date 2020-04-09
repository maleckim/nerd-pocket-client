import React,{useState} from 'react'

export default function Form(props) {
  const [subject, setSubject] = useState()
  const [topic, setTopic] = useState()
  const [content, setContent] = useState()

  return (
    <>
    <div className='noteHead'>
      <h3>Create a new note</h3>
    </div>

    <div className='addNote'>
      <form className='signForm' onSubmit={(e) => props.submit(e, subject, topic, content)}>
        <label for='noteSubject'>Subject</label><br />
        <input type='text' id='cardSubject' name='cardSubject' onChange={e => setSubject(e.target.value)} /><br />
        <label for='noteQuestion'>Topic</label><br />
        <textarea id='cardQuestion' type='text' name='cardQuestion' onChange={e => setTopic(e.target.value)} /><br />
        <label for='noteAnswer'>Content</label><br />
        <textarea id='cardAnswer' type='text' name='cardAnswer' onChange={e => setContent(e.target.value)}/><br />
        <input type='submit' />
      </form>
    </div>
    </>
  )
}