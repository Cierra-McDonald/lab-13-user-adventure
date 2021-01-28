

const vinyasa = {
    id: 'vinyasa',
    title: 'Vinyasa Flow',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'monsters.jpg',
    description: `
    As you enter into this space, remember, in vinyasa we allow our breath to guide us through our
    practice.  So...Inhale through your nose, stop at the top as your lungs fill with air,
    keep holding...and exhale through your mouth releasing a sigh.  
    You've come to your mat and noticed there are a lot of experienced yogis
    around you.  As they flow into an inversion you notice that your body is not yet prepared
    and your are only one that is still in the begginer's pose...How do you react?`
    ,
    choices: [{
        id: 'try',
        description: 'Try the Inversion',
        result: `
            You try the inversion! Now you know where your body and practice is and where you would
            like it to be!  The principle is that you try and that you breath through every step.
            You will be able to get the inversion in no time! 
        `,
        chakra: 2,
        crystal: 4
    }, {
        id: 'watch',
        description: 'I think I will watch this time',
        result: `
           As you watch, you imagine where you could be in maybe a month of continuing
           your vinyasa practice. However; you will never get stronger watching another 
           yogi build their own strength.
        `,
        chakra: -5,
        crystal: -3
    }, {
        id: 'run',
        description: 'I had no idea this class wasn\'nt for beginners, I\'m out!',
        result: `
            As you make a dash for the door you slip on a pile of sweat, and now everyone has spotted 
            you trying to dip class.   
        `,
        chakra: -7,
        crystal: -9
    }]
};

const kundalini = {
    id: 'kundalini',
    title: 'Keep it Kundalini',
    map: {
        top: '17%',
        left: '37%'
    },
    image: 'dragon.jpg',
    audio: 'dragon.wav',
    action: 'dragon-growl.aiff',
    description: ` Kundalini is a rewarding practice that brings several health benefits.  It's challenging
    breath exercises are paired with asanas and meditations.  As you come to sit on your mat, you notice that
    Kundalini is not like yin or vinyasa, there is a lot of chanting and meditation, you choose to fully engage in
    ...   
    `,
    choices: [{
        id: 'satnam',
        description: 'Sat Nam',
        result: ` Great choice.  Now, close your eyes, and chant to your self "Sat Nam", which means "I am truth",
        recieve all that the universe wants to give to you.  
        `,
        chakra: 2,
        crystal: 5
    }, {
        id: 'breath',
        description: 'Breath of Fire',
        result: ` You are no dragon, but the Breath of Fire will build your stamina, core muscles, and refresh your mind,
        as you seal your lips together and breath in and out quickly.  Your breaths should be around the rate of two to 
        three breaths per second.  Make sure to push the air powerfully from your nose with each exhale.  
        `,
        chakra: 4,
        crystal: 0
    }, {
        id: 'sing',
        description: 'Long Time Sun',
        result: `
           Our Kundalini practic will normally end with this song, it may feel strang singing along with strangers, 
           however; you leave class feeling light...“May the long time sun shine upon you, all love surround you,
           and the pure light within you, guide your way on.”
        `,
        chakra: 1,
        crystal: 7
    }]
};

const yin = {
    id: 'yin',
    title: 'Yin yoga',
    map: {
        top: '31%',
        left: '5%'
    },
    // prerequisites: ['vinyasa', 'kundalini'],
    image: 'treasure-chests.png',
    audio: 'treasure-chests.wav',
    action: 'chest-opening.wav',
    description: `Welcome to our yin practice, not as intense or physically demanding as vinyasa or kundalini, but
    none the less enriching.  Here on our mats we will practice several seated postures and meditation, helping us 
    seek out our inner peace, at this moment, you feel you need to mostly align your...`,
    choices: [{
        id: 'spine',
        description: 'Caterpillar',
        result: `Get up from your chair and onto the mat.  Extend your legs straight in front of you and forward fold.
        Allow your spine to round gently and hold here.  Grabbing a blanket or pillow to place between your knees and 
        head if need be.  You want to relax, not worry about your flexibility right now, do what feels good to you! `,
        chakra: 3,
        crystal: 9
    }, {
        id: 'childs-pose',
        description: 'Wide-kneed Childs Pose',
        result: `Ahh a classic, except bring your big toes togehter on the mat creating a larger space, by taking your 
        knees out wide.  Rest your head in between...you deserve this.`,
        chakra: 2,
        crystal: 6
    }, {
        id: 'lower-back',
        description: 'Sphinx',
        result: `You lie on your stomach, placing your elbows under your shoulders.
        Allow all of your weight to fall into your forearms and release tension in your back...relax.
        Sitting in a chair all day can really build tension here.`,
        chakra: 5,
        crystal: 7
    }]
};

const adventure = [
    vinyasa, 
    kundalini,
    yin,
];

export default adventure;