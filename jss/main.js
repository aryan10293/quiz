import question from "./getQuestion.js";
function getFetch(){
    const url = 'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy'
  
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          question(data)
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
  }
  getFetch()