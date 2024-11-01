export const parseUser = jsonString => {
    try {
      return JSON.parse(jsonString);
    } catch (error) {
      return null;
    }
  };

  const userParsingResult = '{"name":"Tom"}';
 console.log (parseUser( userParsingResult));