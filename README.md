# BeesBeesBees

![](http://i.imgur.com/qrLEV.gif)

### Pseudoclassical bees - get ready to learn some science

Bees (the most noble of insects) progress through specific developmental stages over the course of their lifetimes. Each phase has specific traits and behaviors associated with it that are unique to that lifestage. In this repo, you will create bees of many lifestages while practicing the pseudoclassical instatiation pattern, inheritance, and subclassing.

### Class Structure

    .
    ├── Grub
    │   └── Bee
    │       ├── HoneyMakerBee
    │       └── ForagerBee
    │          └── RetiredForagerBee

As you can see in the diagram above, all bees start out as a Grub, grow into a Bee and are then assigned its specific jobs and tasks among its other charactersitics. This means that characteristics are inherited from the classes above (although they can be modified on the current class level).

### Resources
* [Phone and SmartPhone - an example of pseudoclassical inheritance patterns](https://gist.github.com/finalfantasia/0d5550b27cb049ad606f)
* [Object.create](http://dailyjs.com/2012/06/03/js101-object-create/)

## Bare minimum requirements

### NPM

- NPM is the default package manager that automatically gets installed when you install Node.js, it is basically a tool to install other js libraries and tools on Node.js environment.
  - [ ] To check if you have npm installed, run `npm -v` in your terminal. If you see a version number, you're all set..
  - [ ] If you don't have npm installed on your system, visit node [official website](https://nodejs.org/en/download/package-manager/) to install node and npm on your specific OS.
  - [ ] Install the required dependencies on the folder by running the following command `npm install`.

### Sub Classing

Build your first class in Grub.js. Grub will act as the superclass for all other types of bees. Work through the repo in the order specified below, making sure to pass all of the Specs in `test/index.html` --which you can run by simply opening it in your browser and refreshing the page whenever you make changes.

#### Things To Note:
- This assignment must be written in pseudo-classical style.
- Although there are multiple tests for each class, you will only be able to see one test at a time. As soon as one test fails the spec runner stops running and you must pass the current test to continue.

#### Grub
- [ ] Create a Grub class, in pseudo-classical style, with:
  - [ ] an `age` property that is set to `0`
  - [ ] a `color` property that is set to `pink`
  - [ ] a `food` property that is set to `jelly`
  - [ ] an `eat` method

#### Bee
- [ ] Create a Bee class, in pseudo-classical style, with:
  - [ ] `call` the Grub superclass
  - [ ] set the prototype
  - [ ] set the constructor
  - [ ] an `age` property that is set to `5`
  - [ ] a `color` property that is set to `yellow`
  - [ ] a `food` property that is inherited from grub
  - [ ] an `eat` method that is inherited from grub
  - [ ] a `job` property that is set to `keep on growing`

#### HoneyMakerBee
- [ ] Create a HoneyMakerBee class, in pseudo-classical style, with:
  - [ ] `call` the Bee superclass
  - [ ] set the prototype
  - [ ] set the constructor
  - [ ] an age property that is set to `10`
  - [ ] a job property that is set to `make honey`
  - [ ] a color property inherited from `bee` that is set to `yellow`
  - [ ] a food property that is inherited from grub
  - [ ] an eat method that is inherited from grub
  - [ ] a `honeyPot` property that is set to `0`
  - [ ] a `makeHoney` method that adds `1` to that honeyBee\'s honeyPot
  - [ ] a `giveHoney` method that subtracts `1` from that honeyBee\'s honeyPot

#### ForagerBee
- [ ] Create a ForagerBee class, in pseudo-classical style, with:
  - [ ] `call` the Bee superclass
  - [ ] set the prototype
  - [ ] set the constructor
  - [ ] an age property that is set to `10`
  - [ ] a `job` property that is set to `find pollen`
  - [ ] a `color` property inherited from `bee` that is set to `yellow`
  - [ ] a `food` property that is inherited from grub
  - [ ] an `eat` method that is inherited from grub
  - [ ] a `canFly` property that is set `true`
  - [ ] a `treasureChest` property that is set to an empty array `[]`
  - [ ] a `forage` method that allows the bee to add a `treasure` to the `treasureChest`

#### RetiredForagerBee
- [ ] Create a RetiredForagerBee class, in pseudo-classical style, with:
  - [ ] `call` the ForagerBee superclass
  - [ ] set the prototype
  - [ ] set the constructor
  - [ ] an `age` property that is set to `40`
  - [ ] a `job` property that is set to `gamble`
  - [ ] a `canFly` property that is set to `false`
  - [ ] a `color` property that is set to `grey`
  - [ ] a `forage` method that returns "I am too old, let me play cards instead"
  - [ ] a `food` property that is inherited from grub
  - [ ] an `eat` method that is inherited from grub
  - [ ] a `treasureChest` property inherited from ForagerBee that is set to an empty array `[]`
  - [ ] an always winning `gamble` method that allows the bee to add a `treasure` to the `treasureChest`
