module.exports = {
    testMatch: [
        "**/*.test.ts",  // Match .test.ts files anywhere in your project
        "**/*.test.js",  // Match .test.js files anywhere in your project
        // you can add more patterns if you need specific file extensions or folders
    ],
    preset: 'ts-jest',
    testEnvironment: 'node',
};
