import { execSync } from "child_process";

// Replace with your project's root directory path
const projectRoot = './';

try {
    execSync(`node --test ${projectRoot}/tests`, { stdio: 'inherit' });
    console.log('Tests passed successfully!');
} catch (error) {
    console.error('Tests failed!', error);
    process.exit(1); // Exit with an error code
}
