interface IBirdFly {
  fly(): any;
}

interface IBirdWalk {
  walk(): any;
}

interface IBirdSwim {
  swim(): any;
}

export class Penguin implements IBirdWalk, IBirdSwim {
  walk() {
    console.log('Penguin can walk');
  }

  swim() {
    console.log('Penguin can swing');
  }
}

export class Ostriche implements IBirdWalk {
  walk() {
    console.log('Ostriche can walk');
  }
}

export class Duck implements IBirdWalk, IBirdFly, IBirdSwim {
  walk() {
    console.log('Duck can walk');
  }

  fly() {
    console.log('Duck can fly');
  }

  swim() {
    console.log('Duck can swim');
  }
}

const penguin = new Penguin();
penguin.walk();
penguin.swim();

const ostriche = new Ostriche();
ostriche.walk();

const duck = new Duck();
duck.walk();
duck.fly();
duck.swim();