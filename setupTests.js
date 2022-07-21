global.fetch = require("whatwg-fetch");
fetch.mockResponse(JSON.stringify({ testing: true }));
