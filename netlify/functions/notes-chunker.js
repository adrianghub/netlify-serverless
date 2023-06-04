exports.handler = async (event, context) => {
  if (event.httpMethod === "POST") {
    try {
      const payload = JSON.parse(event.body);
      const text = payload.text;

      function splitText(text) {
        const sentences = text.split(/[.!?]\s+/); 
        const output = [];
        
        for (let i = 0; i < sentences.length; i += 3) {
          const chunk = sentences.slice(i, i + 3).join(" ");
          output.push(chunk);
        }
        return output;
      }

      const chunks = splitText(text);

      return {
        statusCode: 200,
        body: JSON.stringify({
          chunks,
        }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message }),
      };
    }
  } else {
    return {
      statusCode: 501,
      body: JSON.stringify({ message: "Not Implemented" }),
      headers: { "content-type": "application/json" },
    };
  }
};
