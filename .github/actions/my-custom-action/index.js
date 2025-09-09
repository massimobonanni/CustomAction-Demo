const core = require('@actions/core');

function logWithTimestamp(message) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${message}`);
}

async function run() {
  try {
    const data = core.getInput("data") || "<no data passed>";
    const timeout = core.getInput("timeout") || 10000;

    logWithTimestamp("Starting action - V2.0");
    core.info("This is an info message");
    core.debug("This is a debug message");
    await new Promise((resolve) => setTimeout(resolve, timeout));
    logWithTimestamp(`Data in input : ${data}`);
    logWithTimestamp("Action completed succesfully.");
    
  } catch (error) {
    core.setFailed(`Installation failed: ${error.message}`);
  }
}

run();
