const fs = require('fs')
const chalk = require('chalk');
const getNotes = () => {
    return "Your Notes...."
} 

const addNote = (title, body) => {
      const notes = loadNotes()
      const duplicateNotes = notes.filter((note) => note.title === title)
      const duplicateNote = notes.find((note)=> notes.title === title)
     
     // Above function is same as below 
    //   const duplicateNotes = notes.filter(function(note) {
    //     return note.title === title
    //  })
    debugger
      
      if (!duplicateNote) {
        
        notes.push({
            title: title,
            body: body
          })
    
          saveNotes(notes)
          console.log(chalk.green("New note added!"))

      }

      else {
        console.log(chalk.red("Note title taken"))
      }

      
} 

const saveNotes = (notes)=> {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = function () {

    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)   
    } catch(e) {
       return []
    }
    
}


const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)


        // const notesToKeep = notes.filter( function(note){
        //     return note.title !== title;
        // })
    if(notes.length > notesToKeep.length)
    {
        console.log(chalk.green.inverse(' Note Removed'))
        saveNotes(notesToKeep) 
    }

    else {
        console.log(chalk.red.inverse(' No note found'))

    }
    

}


const listNotes = ()=> {
    const notes = loadNotes()
    console.log(chalk.inverse('Your Notes'))
    notes.forEach((note)=> {
        console.log(note.title)
    })

}

const readNotes = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if(note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }
    else{  
    console.log("no note found")
    }
}

module.exports = {
    getNotes : getNotes,
    addNote : addNote,
    removeNote : removeNote,
    listNotes : listNotes,
    readNotes: readNotes
}