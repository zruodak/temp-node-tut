const { readFile, writeFile, read } = require("fs");

console.log('Start');
readFile("./content/first.txt", "utf8", (err, result) => {
   if (err) return err;
   const first = result;

   readFile("./content/second.txt", "utf8", (err, result) => {
      if (err) return err;
      const second = result;

      writeFile(
         "./content/result-async.txt",
         `Here is the result: ${first}, ${second}`,
         (err, result) => {
            if (err) return err;
            console.log('Done with this task');
         }
      );
   });
});
console.log('Starting the next one...');