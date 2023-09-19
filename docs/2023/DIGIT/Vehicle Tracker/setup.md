---
sidebar_position: 3
title: Setup
---


### 1. Fork it :fork_and_knife:
Fork the this repo [eGov rnd](https://github.com/egovernments/egov-rnd). This will create a copy of this repo in your account and you will be able to make changes to it. 

### 2. Clone it :busts_in_silhouette:
Go to your forked repo and clone it to your local machine. 

```bash
git clone https://github.com/<your-github-id>/egov-rnd.git
```
OR
```bash
gh repo clone <your-github-id>/egov-rnd
```

### 3. Set it up :arrow_up:
Being a Flutter project, you should have Flutter installed on your system. If you don't have it, you can install it from their [website](https://flutter.dev/docs/get-started/install).

You should have Make installed on your system aswell to use the Makefile. If you don't have it, you can install it using the following command:

```bash
brew install make
```
On windows you can get make from [Choco](https://chocolatey.org/install)

```bash
choco install make
```

Then you can cd into the project directory and run the following command to setup the project:

cd int the project directory
```bash
cd egov-rnd/vehicle-tracker/vehicle_tracker_app/
```

Run the following command to install the dependencies:
```bash
flutter pub get
```

### 4. Run it :checkered_flag:
Run the following command to start the app:
```bash
flutter run
```
