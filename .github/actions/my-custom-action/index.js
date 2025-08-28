const core = require('@actions/core');

async function run() {
  try {
    const data = core.getInput('data') || '<no data passed>';
    console.log("Starting action");
    await new Promise(resolve => setTimeout(resolve, 10000));
    core.debug("This is a debug message");
    console.log(`Data in input : ${data}`);
    console.log("Action completed succesfully.");
  } catch (error) {
    core.setFailed(`Installation failed: ${error.message}`);
  }
}

run();