### This is a test for Volvo page link
These are simple test to check out the webpage https://www.volvocars.com/intl/v/car-safety/a-million-more to ensure that certain elements and other characteristics are correct. 

### Steps

- Change your path directory in the code to your local directory .eg const { join } = require('/Users/genedarocha/Downloads/volvo_webdriver/tmp/webdriverio-tutorial-write-tests-3') in wdio.conf.js


### To start
- Access the appropriate branch related to the video - ex: "write-tests-3" 
- Clone the branch locally
- Run `npm i`

### wdio Image comparison site software was installed using the following command
- npm install --save-dev wdio-image-comparison-service 

### Run Tests in the default project directory
- npx wdio wdio.conf.js     

### Following Functions added to wdio.conf.js files for image comparison
services: ['chromedriver','image-comparison',// The options
  {
      // Some options, see the docs for more
      baselineFolder: join(process.cwd(), './tests/sauceLabsBaseline/'),
      formatImageName: '{tag}-{logName}-{width}x{height}',
      screenshotPath: join(process.cwd(), '.tmp/'),
      savePerInstance: true,
      autoSaveBaseline: true,
      blockOutStatusBar: true,
      blockOutToolBar: true,
      // NOTE: When you are testing a hybrid app please use this setting
      isHybridApp: true,
      // Options for the tabbing image
      tabbableOptions:{
          circle:{
              size: 18,
              fontSize: 18,
              // ...
          },
          line:{
              color: '#ff221a', // hex-code or for example words like `red|black|green`
              width: 3,
          },
      }
      // ... more options ],


### Example of some successful tests

[chrome 91.0.4472.164 mac os x #0-0] Spec: /Users/genedarocha/Downloads/volvo_webdriver/tmp/test-3-no2/webdriverio-tutorial-write-tests-3/test/specs/search.js
[chrome 91.0.4472.164 mac os x #0-0] Running: chrome (v91.0.4472.164) on mac os x
[chrome 91.0.4472.164 mac os x #0-0] Session ID: f7cb19ab3a53aa3b786d4e8e0fff5745
[chrome 91.0.4472.164 mac os x #0-0]
[chrome 91.0.4472.164 mac os x #0-0] Volvo Cars Test Suite
[chrome 91.0.4472.164 mac os x #0-0]    ✓ Test 1 - IT should open the url and check that the title is correct
[chrome 91.0.4472.164 mac os x #0-0]    ✓ Test 2 - IT should find cookie screen and click the accept buttopn
[chrome 91.0.4472.164 mac os x #0-0]
[chrome 91.0.4472.164 mac os x #0-0] Example
[chrome 91.0.4472.164 mac os x #0-0]    ✓ Test 3 - IT should save some screenshots
[chrome 91.0.4472.164 mac os x #0-0]    ✓ Test 4 - IT should compare successful with a baseline
[chrome 91.0.4472.164 mac os x #0-0]
[chrome 91.0.4472.164 mac os x #0-0] 4 passing (1m 36.8s)

### Test Cases
- Test Case 1: Check that Title on webpage https://www.volvocars.com/intl/v/car-safety/a-million-more is equal to 'A million more | Volvo Cars - International'
- Test Case 2: Click on the 'Accept Cookie' Button as its the first time on the site to accept all cookies from Volvo Cars
- Test Case 3: Check that a screen can be saved, element save, save a full page and scroll a full page, same images to compare 
- Test Case 4: Compare saved images to ensure that a minimum % of change is acceptable for a test 
- Test Case 5: Ensure that the words / image 'Our Cars' exist on the right hand side and is clickable to show range of cars 
- Test Case 6: Ensure that the logo 'Volvo Cars' is displayed on the left hand side. 


Image Files stored in /tests/desktop_chrome 
Also ensure that all tests have some form of assertions as part of their conditions 

Apologies, did not have the time to dockerise, but here are some instructions.

How to dockerise the Webdriver.io framework

### 1 - Create Dockerfile -

Note: you need to create Dockerfile with no extension(no .js no .anything) in the framework directory
FROM node:12

###  Set up a working directory
WORKDIR /app

# Install chrome and other required dependencies

-RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
-RUN echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list
-RUN apt-get update -qq && apt-get install -y -qq --no-install-recommends \
    vim \
    python3-setuptools \
    python3-pip \
    google-chrome-stable \
    libnss3-dev \
    xvfb \
    openjdk-8-jdk \
    gcc libpq-dev \
    python3-dev python3-pip python3-venv python3-wheel \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*
RUN pip3 install wheel

COPY . .
RUN mkdir ~/Downloads
RUN npm i
RUN npm rebuild node-sass

# Run all tests
CMD npm test

### 2. Create the new docker image by running this command using terminal:
  docker build .

###. 3. Find id of your new docker image by running:
  docker images

### 4. Run your test inside docker container by specifying first 3 characters of your docker image id(b92 is an example):
  docker run -it b92
