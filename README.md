# meta-weather


#### 1. Clone this repository

```bash
git clone https://github.com/abrarkhan1234/meta-weather.git && cd ./meta-weather
```

#### 2. Install [NVM](https://github.com/creationix/nvm)

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

#### 3. Install the correct version of [Node](https://nodejs.org/en/)

```bash
nvm install
```

You will need to restart your terminal in order to start using the `nvm` command.

Configure `nvm` to use the right version of Node. In the `web` directory:

```bash
nvm use
```

#### 4. Install Dependencies

```bash
npm install
```

#### 4. Run Cucumber Tests

```bash
npm run test:cucumber
```
