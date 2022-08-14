import React from 'react';

function Main() {
  const token = localStorage.getItem('tokenFullStack');
  return (
    <div>
      <h1>Main</h1>
      <p>{token}</p>
    </div>
  );
}

export default Main;
