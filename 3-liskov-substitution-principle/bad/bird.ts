interface IBird {
  fly(): any;
  walk(): any;
  swim(): any;
}

export class Penguin implements IBird {
  fly() {
    console.log('Penguin can fly');
  }

  walk() {
    console.log('Penguin can walk');
  }

  swim() {
    console.log('Penguin can swim');
  }
}

export class Ostriche implements IBird {
  fly() {
    console.log('Ostriche can fly');
  }

  walk() {
    console.log('Ostriche can walk');
  }

  swim() {
    console.log('Ostriche can swim');
  }
}

const penguin = new Penguin();
penguin.fly();
penguin.walk();
penguin.swim();


const ostriche = new Ostriche();
ostriche.fly();
ostriche.walk();
ostriche.swim();