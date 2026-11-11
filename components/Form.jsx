import { useState } from 'react';
export default function Form() {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [msgInput, setMsgInput] = useState('');

  function handleNameInput(e) {
    setNameInput(e.target.value);
  }

  function handleEmailInput(e) {
    setEmailInput(e.target.value);
  }

  function handleMsgInput(e) {
    setMsgInput(e.target.value);
  }

  function handleSubmit() {}
  return (
    <div id="form">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input required type="text" value={nameInput} onChange={handleNameInput} />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input required type="email" value={emailInput} onChange={handleEmailInput} />
        </div>

        <div>
          <label htmlFor="msg">Message</label>
          <textarea required type="text" value={msgInput} onChange={handleMsgInput} />
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}
