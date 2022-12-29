import question from "./getQuestion.js";
const button = document.getElementById('btn')
function getFetch(){
    const ul = document.getElementById('ul')
    const url = 'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple'
    let score = 0
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          let i = 0
          question(data,i)
            ul.addEventListener('click', function(e){
              let cool = e.target.textContent.slice(3)
              if (cool === question(data,i)['results'][i]['correct_answer']) {
                score++
                ul.innerText = ''
                console.log(i)
                i++
                question(data,i)
              }else if (i === 9) {
                document.getElementById('display').innerText = ''
                alert(`Score ${score}/10`)
              } else {
                ul.innerText = ''
                console.log(i)
                i++
                question(data,i)
              }
            })
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
  }
  getFetch()

