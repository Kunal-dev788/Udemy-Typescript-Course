type LogMessage = (message: string) => void;

const log: LogMessage = (message) => {
  console.log(message);
};

log("Hello TypeScript");


type ThrowError = (error: string) => never;

const throwError: ThrowError = (error) => {
  throw new Error(error);
};

try {
  throwError("Test error");
} catch (e) {
  console.log("Error caught successfully");
}


function processData(data: string): void {
  log(`Processing ${data}`);
}
processData("sample data");


function errorHandlingScenario(): never {
  throwError("An unexpected error occurred!");
}

try {
  errorHandlingScenario();
} catch (e) {
  console.log("Scenario error caught");
}