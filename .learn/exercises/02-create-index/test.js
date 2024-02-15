const fs = require("fs");

test("index.html", function(){
    const indexExists = fs.existsSync(`./index.html`);
    expect(indexExists).toBe(true);
})