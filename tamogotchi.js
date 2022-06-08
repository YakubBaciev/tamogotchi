const tamogotchi = {
  name: 'lola',
  meal: 1,
  energy: 3,
  mood: 4,
 getStatus: function(){
   let food = "";
   if (this.meal < 3) {
     food = `Я голоден (${this.meal})`;
   } else {
     food = `Я не голоден (${this.meal})`;
   }

   let newEnergy = "";
   if (this.energy < 3) {
     newEnergy = `Я хочу спать (${this.energy})`;
   } else {
     newEnergy = `Я не хочу спать (${this.energy})`;
   }

  let newMood = "";
  if (this.mood < 3) {
    newMood = `Мне скучно (${this.mood})`;
  } else {
    newMood = `Мне весело (${this.mood})`;
  }
  
  if (this.meal <= 0 || this.mood <= 0 || this.energy <= 0) {
    this.name = 'Умер';
     return this.name;
  } else {


    return `Имя: ${this.name}, Еда: ${food}, Энергия: ${newEnergy}, Настроение: ${newMood}.`;
}
},
 setName: function(name){
   this.name = name;
  },
  eat: function(){
    if(this.meal < 5){
      this.meal++;
    }
   this.mood--;
  },
  sleep: function(){
    if(this.energy < 5){
      this.energy++;
    }
    this.meal--;
  },
  play: function(){
    if(this.mood < 5){
      this.mood++;
    }
    this.energy--;
  },
};


