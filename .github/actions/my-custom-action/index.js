
async function run() {
  try {
    const data = core.getInput("data") || "<no data passed>";
    console.log("Starting action");
    await new Promise((resolve) => setTimeout(resolve, 10000));
    console.log(`Data in input : ${data}`);
    console.log("Action completed succesfully.");
  } catch (error) {
    console.log(`Installation failed: ${error.message}`);
  }
}

run();
