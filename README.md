# Robot Framework TDD Outside-In

### Setup End to End tests with Robot Framework

#### Python3 & pip3

Make sure to have at least a Python version >3.7

    python3 --version

Make sure to have pip3 installed

    python3 -m ensurepip --upgrade
    pip3 --version

#### Python virtual environment

Create a virtual environment in the folder `venv`:

```sh
cd e2e-tests
python -m venv venv
source venv/bin/activate 
```

#### Install python dependenices

Install Robot Framework and its dependencies:

```sh
pip3 install -r requirements.txt
```

#### Install Chromium webdriver

Download the binary for your operating system: `https://chromedriver.chromium.org/downloads` and move under `venv/bin/` sub directory

#### Run the selfcheck test

```sh
robot selfcheck.robot
```


