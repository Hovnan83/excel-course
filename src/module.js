console.log("module.js");

async function start() {
  await Promise.resolve("asinc working");
}

start().then(() => console.log("AAA+++!!!"));
