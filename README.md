# postman-newman-starter

Starter project to execute postman collections in CLI. This includes the execution of a single collection stored as .json file in the repo, and generating test results.

## Requirements

-  Node 18

## Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/asvaldivia/postman-newman-starter.git

2. Go to the project folder:

   ```bash
      cd postman-newman-starter

3. Install the dependencies:

   ```bash
      npm install
   
4. Run the following to test, there are already a collection and environment in the repo:

   ```bash
      npm run test
  
5. If it is successful, the result will be show in the CLI, and also reports will be generated in the 'newman' folder in the project (html, xml).


## Usage

- Once the project has been cloned, there are a collection and enviroment file ready to run with a "npm run test" command.
- To run your own collection and environment you need to store them in the './src/collections_envs' folder.
- Once you have your collection and env in the correct folder, you need to go to the 'main.ts' file in './src/main.ts' and provide the path and name of both your collection and environment:

<img alt="drawing" width="600" src="https://github.com/asvaldivia/postman-newman-starter/assets/51498295/5c194161-943f-4482-a82e-b7c105e1e066">

- Finally just run

   ```bash
      npm run test
