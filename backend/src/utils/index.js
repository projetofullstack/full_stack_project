const parseCalmeCase = (obj) => Object.entries(obj).reduce((acc, [key, value]) => {
  const newKey = key.split('_').map((word, index) => {
    if (index === 0) return word;
    return word[0].toUpperCase() + word.slice(1);
  }).join('');
  acc[newKey] = value;
  return acc;
}, {});

class ErrorClient extends Error {
  badRequest(message = 'Bad Request') {
    return {
      statusCode: 400,
      message,
      error: 'Bad Request',
      stack: this.stack,
    };
  }

  unauthorized(message = 'Unauthorized') {
    return {
      statusCode: 401,
      message,
      error: 'Unauthorized',
      stack: this.stack,
    };
  }

  internalServerError(message = 'Internal Server Error') {
    return {
      statusCode: 500,
      message,
      error: 'Internal Server Error',
      stack: this.stack,
    };
  }

  conflict(message = 'Conflict') {
    return {
      statusCode: 409,
      message,
      error: 'Conflict',
      stack: this.stack,
    };
  }
}

module.exports = {
  parseCalmeCase,
  ErrorClient,
};
