# Robot Framework TDD Outside-In

First of all clone this repo:

```sh
git clone git@github.com:lucagiove/rf-tdd-outside-in.git
```

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

#### Suggested IDE

[PyCharm](https://www.jetbrains.com/pycharm/download/)  
with [Robot Framework LSP plugin](https://plugins.jetbrains.com/plugin/16086-robot-framework-language-server)

Pycharm should automatically detect and use the virtual environment while the Robot Framework LSP plugin don't, you've to manually specify it.

