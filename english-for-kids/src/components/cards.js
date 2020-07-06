import {
  hugA, jumpA, angryA, basketballA, blouseA, birdA, builderA, catA, chessA, chickA,
  coatA, cryA, danceA, diveA, doctorA, dogA,
  dolphinA, drawA, driverA, firemanA, fishA, flyA, footballA, frogA,
  giraffeA, happyA, hockeyA, laughA, lionA, mouseA, openA, pantsA,
  playA, pointA, policemanA, programmerA, rabbitA, regbyA, runA, runningA,
  sallerA, scaredA, sheepA, shirtA, skirtA, shoeA, singA, skipA, smileA,
  surprisedA, swimA, swimmingA, teacherA, tennisA, tiredA, rideA,
  chickenA, horseA, pigA, turtleA, dressA, bootA, sadA
} from "../assets/audio";
import {
  hug, jump, angry, basketball, blouse, bird, builder, cat, chess, chick,
  coat, cry, dance, dive, doctor, dog,
  dolphin, draw, driver, fireman, fish, fly, football, frog,
  giraffe, happy, hockey, laugh, lion, mouse, open, pants,
  play, point, policeman, programmer, rabbit, regby, run, running,
  saller, scared, sheep, shirt, skirt, shoe, sing, skip, smile,
  surprised, swim, swimming, teacher, tennis, tired, ride,
  chicken, horse, pig, turtle, dress, boot, sad
} from "../assets/img";

export const cards = [
  [
    {
      category: "Action (set A)",
      word: "cry",
      translation: "плакать",
      image: cry,
      audioSrc: cryA
    },
    {
      category: "Action (set A)",
      word: "dance",
      translation: "танцевать",
      image: dance,
      audioSrc: danceA
    },
    {
      category: "Action (set A)",
      word: "dive",
      translation: "нырять",
      image: dive,
      audioSrc: diveA
    },
    {
      category: "Action (set A)",
      word: "draw",
      translation: "рисовать",
      image: draw,
      audioSrc: drawA
    },
    {
      category: "Action (set A)",
      word: "fish",
      translation: "ловить рыбу",
      image: fish,
      audioSrc: fishA
    },
    {
      category: "Action (set A)",
      word: "fly",
      translation: "летать",
      image: fly,
      audioSrc: flyA
    },
    {
      category: "Action (set A)",
      word: "hug",
      translation: "обнимать",
      image: hug,
      audioSrc: hugA
    },
    {
      category: "Action (set A)",
      word: "jump",
      translation: "прыгать",
      image: jump,
      audioSrc: jumpA
    }
  ],
  [
    {
      category: "Action (set B)",
      word: "open",
      translation: "открывать",
      image: open,
      audioSrc: openA
    },
    {
      category: "Action (set B)",
      word: "play",
      translation: "играть",
      image: play,
      audioSrc: playA
    },
    {
      category: "Action (set B)",
      word: "point",
      translation: "указывать",
      image: point,
      audioSrc: pointA
    },
    {
      category: "Action (set B)",
      word: "ride",
      translation: "ездить",
      image: ride,
      audioSrc: rideA
    },
    {
      category: "Action (set B)",
      word: "run",
      translation: "бегать",
      image: run,
      audioSrc: runA
    },
    {
      category: "Action (set B)",
      word: "sing",
      translation: "петь",
      image: sing,
      audioSrc: singA
    },
    {
      category: "Action (set B)",
      word: "skip",
      translation: "пропускать, прыгать",
      image: skip,
      audioSrc: skipA
    },
    {
      category: "Action (set B)",
      word: "swim",
      translation: "плавать",
      image: swim,
      audioSrc: swimA
    }
  ],
  [
    {
      category: "Animal (set A)",
      word: "cat",
      translation: "кот",
      image: cat,
      audioSrc: catA
    },
    {
      category: "Animal (set A)",
      word: "chick",
      translation: "цыплёнок",
      image: chick,
      audioSrc: chickA
    },
    {
      category: "Animal (set A)",
      word: "chicken",
      translation: "курица",
      image: chicken,
      audioSrc: chickenA
    },
    {
      category: "Animal (set A)",
      word: "dog",
      translation: "собака",
      image: dog,
      audioSrc: dogA
    },
    {
      category: "Animal (set A)",
      word: "horse",
      translation: "лошадь",
      image: horse,
      audioSrc: horseA
    },
    {
      category: "Animal (set A)",
      word: "pig",
      translation: "свинья",
      image: pig,
      audioSrc: pigA
    },
    {
      category: "Animal (set A)",
      word: "rabbit",
      translation: "кролик",
      image: rabbit,
      audioSrc: rabbitA
    },
    {
      category: "Animal (set A)",
      word: "sheep",
      translation: "овца",
      image: sheep,
      audioSrc: sheepA
    }
  ],
  [
    {
      category: "Animal (set B)",
      word: "bird",
      translation: "птица",
      image: bird,
      audioSrc: birdA
    },
    {
      category: "Animal (set B)",
      word: "fish",
      translation: "рыба",
      image: fish,
      audioSrc: fishA
    },
    {
      category: "Animal (set B)",
      word: "frog",
      translation: "жаба",
      image: frog,
      audioSrc: frogA
    },
    {
      category: "Animal (set B)",
      word: "giraffe",
      translation: "жираф",
      image: giraffe,
      audioSrc: giraffeA
    },
    {
      category: "Animal (set B)",
      word: "lion",
      translation: "лев",
      image: lion,
      audioSrc: lionA
    },
    {
      category: "Animal (set B)",
      word: "mouse",
      translation: "мышь",
      image: mouse,
      audioSrc: mouseA
    },
    {
      category: "Animal (set B)",
      word: "turtle",
      translation: "черепаха",
      image: turtle,
      audioSrc: turtleA
    },
    {
      category: "Animal (set B)",
      word: "dolphin",
      translation: "дельфин",
      image: dolphin,
      audioSrc: dolphinA
    }
  ],
  [
    {
      category: "Clothes",
      word: "skirt",
      translation: "юбка",
      image: skirt,
      audioSrc: skirtA
    },
    {
      category: "Clothes",
      word: "pants",
      translation: "брюки",
      image: pants,
      audioSrc: pantsA
    },
    {
      category: "Clothes",
      word: "blouse",
      translation: "блузка",
      image: blouse,
      audioSrc: blouseA
    },
    {
      category: "Clothes",
      word: "dress",
      translation: "платье",
      image: dress,
      audioSrc: dressA
    },
    {
      category: "Clothes",
      word: "boot",
      translation: "ботинок",
      image: boot,
      audioSrc: bootA
    },
    {
      category: "Clothes",
      word: "shirt",
      translation: "рубашка",
      image: shirt,
      audioSrc: shirtA
    },
    {
      category: "Clothes",
      word: "coat",
      translation: "пальто",
      image: coat,
      audioSrc: coatA
    },
    {
      category: "Clothes",
      word: "shoe",
      translation: "туфли",
      image: shoe,
      audioSrc: shoeA
    }
  ],
  [
    {
      category: "Emotions",
      word: "sad",
      translation: "грустный",
      image: sad,
      audioSrc: sadA
    },
    {
      category: "Emotions",
      word: "angry",
      translation: "сердитый",
      image: angry,
      audioSrc: angryA
    },
    {
      category: "Emotions",
      word: "happy",
      translation: "счастливый",
      image: happy,
      audioSrc: happyA
    },
    {
      category: "Emotions",
      word: "tired",
      translation: "уставший",
      image: tired,
      audioSrc: tiredA
    },
    {
      category: "Emotions",
      word: "surprised",
      translation: "удивлённый",
      image: surprised,
      audioSrc: surprisedA
    },
    {
      category: "Emotions",
      word: "scared",
      translation: "испуганный",
      image: scared,
      audioSrc: scaredA
    },
    {
      category: "Emotions",
      word: "smile",
      translation: "улыбка",
      image: smile,
      audioSrc: smileA
    },
    {
      category: "Emotions",
      word: "laugh",
      translation: "смех",
      image: laugh,
      audioSrc: laughA
    }
  ],
  [
    {
      category: "Professions",
      word: "doctor",
      translation: "врач",
      image: doctor,
      audioSrc: doctorA
    },
    {
      category: "Professions",
      word: "fireman",
      translation: "пожарный",
      image: fireman,
      audioSrc: firemanA
    },
    {
      category: "Professions",
      word: "policeman",
      translation: "милиционер",
      image: policeman,
      audioSrc: policemanA
    },
    {
      category: "Professions",
      word: "builder",
      translation: "строитель",
      image: builder,
      audioSrc: builderA
    },
    {
      category: "Professions",
      word: "saller",
      translation: "продавец",
      image: saller,
      audioSrc: sallerA
    },
    {
      category: "Professions",
      word: "teacher",
      translation: "учитель",
      image: teacher,
      audioSrc: teacherA
    },
    {
      category: "Professions",
      word: "programmer",
      translation: "программист",
      image: programmer,
      audioSrc: programmerA
    },
    {
      category: "Professions",
      word: "driver",
      translation: "водитель",
      image: driver,
      audioSrc: driverA
    }
  ],
  [
    {
      category: "Sport",
      word: "football",
      translation: "футбол",
      image: football,
      audioSrc: footballA
    },
    {
      category: "Sport",
      word: "basketball",
      translation: "баскетбол",
      image: basketball,
      audioSrc: basketballA
    },
    {
      category: "Sport",
      word: "hockey",
      translation: "хоккей",
      image: hockey,
      audioSrc: hockeyA
    },
    {
      category: "Sport",
      word: "chess",
      translation: "шахматы",
      image: chess,
      audioSrc: chessA
    },
    {
      category: "Sport",
      word: "running",
      translation: "бег",
      image: running,
      audioSrc: runningA
    },
    {
      category: "Sport",
      word: "tennis",
      translation: "теннис",
      image: tennis,
      audioSrc: tennisA
    },
    {
      category: "Sport",
      word: "swimming",
      translation: "плавание",
      image: swimming,
      audioSrc: swimmingA
    },
    {
      category: "Sport",
      word: "regby",
      translation: "регби",
      image: regby,
      audioSrc: regbyA
    }


  ]
];
export default cards;
