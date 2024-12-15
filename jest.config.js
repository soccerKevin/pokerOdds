module.exports = {
  testEnvironment: "node", // Specifies the Node.js environment for testing
  testMatch: ["**/?(*.)+(spec).[tj]s"], // Matches test files
  moduleFileExtensions: ["ts", "js", "json"], // Supported file extensions
  coverageDirectory: "./coverage", // Output directory for code coverage
  collectCoverage: true, // Enable coverage collection
  collectCoverageFrom: [
    "src/**/*.[tj]s", // Include all JS files in the src folder
    "!src/**/index.[tj]s", // Exclude index files
    "!src/**/spec?(s)/*.[tj]s" // Exclude index files
  ],
  transform: {
    "^.+\\.[tj]s$": "babel-jest" // Use Babel for JS and TS file transformation
  },
  verbose: true, // Display individual test results
};
