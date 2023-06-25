import React, { useState } from 'react';

const PostRequestExample = () => {
  const [responseData, setResponseData] = useState(null);

  const handleSubmit = (url) => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => setResponseData(data))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => handleSubmit('http://104.211.219.98/numbers/primes')}
        style={buttonStyle}
      >
        Prime
      </button>
      <br />
      <button
        type="button"
        onClick={() => handleSubmit('http://104.211.219.98/numbers/fibo')}
        style={buttonStyle}
      >
        Fibo
      </button>
      <br />
      <button
        type="button"
        onClick={() => handleSubmit('http://104.211.219.98/numbers/odd')}
        style={buttonStyle}
      >
        Odd
      </button>
      <br />
      <button
        type="button"
        onClick={() => handleSubmit('http://104.211.219.98/numbers/rand')}
        style={buttonStyle}
      >
        Rand
      </button>
      <br />

      {responseData && (
        <div>
          <h2 style={headingStyle}>Response:</h2>
          <div style={outputContainerStyle}>
            {responseData.numbers.map((number, index) => (
              <p key={index} style={outputStyle}>{number}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const buttonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '10px 20px',
  margin: '5px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};

const headingStyle = {
  fontSize: '20px',
  fontWeight: 'bold'
};

const outputContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap'
};

const outputStyle = {
  margin: '5px'
};

export default PostRequestExample;
