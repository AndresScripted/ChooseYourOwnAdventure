// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "Do you have homework?",
            choices: [
                {
                    text: "Yes",
                    nextLevel: "yesPath",
                },

                {
                    text: "No",
                    nextLevel: "noPath",
                },
            ]
        },

        yesPath: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "Will you do it?",
            choices: [
                {
                    text: "Yes",
                    nextLevel: "yesPathTwo",
                },
                
                {
                    text: "No", 
                    nextLevel: "noOnYesPath"
                    
                }
            ]
        },

        noPath: {
            message: "Are you sure?",
            choices: [
                {
                    text: "Yes",
                    nextLevel: "yesOnNoPath",
                },
                
                {
                    text: "No", 
                    nextLevel: "start"
                }
            ]
        },
        
        noOnYesPath: {
            message: "Are you procrasinating?",
            choices: [
                {
                    text: "Yes",
                    nextLevel: "yesPathThree",
                },
                
                {
                    text: "No", 
                    nextLevel: "noOnYesPathTwo"
                }
            ]
        },
        
        yesPathTwo: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "Good for you!",
            choices: [
                {
                    text: "Start!",
                    nextLevel: "start",
                },
                
            ]
        },
        
        yesPathThree: {
            message: "Dangerous game your playing!",
            choices: [
                {
                    text: "Back to start!",
                    nextLevel: "start",
                },
                
            ]
        },
        yesOnNoPath: {
            message: "Only you will chose the right path!",
            choices: [
                {
                    text: "start",
                    nextLevel: "start",
                },
                
                    
                
            ]
        },

    }
};
