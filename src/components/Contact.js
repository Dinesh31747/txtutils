import React from 'react'
function Contact(props) {
  return (
    <div style={{color: props.mode === 'dark'?'white':'black'}}>
      <h2>Hello User!! </h2>
      &nbsp; <h4>
        If you have any issues or suggestions reguarding this website use this email : jataproludinesh9@gmail.com
      </h4>
      &nbsp;
      <a href='www.linkedin.com/in/jataprolu-dinesh-09978628a'>LinkedIn</a>
      <br/>
      <br/>
      &nbsp;
      <a href='https://github.com/Dinesh31747'>Github</a>
      <br/><br/><br/>
      <strong>Available for Internships (Summer 2024, Flexible Hours)</strong>
      <br/>
      <br/>
      <br/>
    </div>
  )
}

export default Contact
