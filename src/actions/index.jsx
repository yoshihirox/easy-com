const ADD_CHORD = 'ADD_CHORD';


export const addChord =(name,compose,text,categolies)=>({

                type: ADD_CHORD,
                name,
                compose,
                text, 
                categolies
});
