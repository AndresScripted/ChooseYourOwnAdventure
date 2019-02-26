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
            music: "98_Lost_Mine.mp3",
            background_image: "intro-bg.jpg",
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
                    nextLevel: "noPathTwo"
                }
            ]
        },
        
        noOnYesPath: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
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
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
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
        
       noOnYesPathTwo: {
           background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You deserve an F",
            choices: [
                {
                    text: "Back to Start!",
                    nextLevel: "start",
                },
                
                    
                
            ]
        },
        
        noPathTwo: {
            message: "Check and make sure",
            choices: [
                {
                    text: "Start!",
                    nextLevel: "start",
                },
                
                    
                
            ]
        },

    }
};
