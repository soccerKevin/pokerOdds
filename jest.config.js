module.exports = {
  testEnvironment: "node", // Specifies the Node.js environment for testing
  testMatch: ["**/?(*.)+(spec|test).(t|j)s"], // Matches test files
  moduleFileExtensions: ["ts", "js", "json"], // Supported file extensions
  coverageDirectory: "./coverage", // Output directory for code coverage
  collectCoverage: true, // Enable coverage collection
  collectCoverageFrom: [
    "src/**/*.(t|j)s", // Include all JS files in the src folder
    "!src/**/index.(t|j)s" // Exclude index files
  ],
  verbose: true, // Display individual test results
};
