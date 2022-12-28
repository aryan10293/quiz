import randomize from "./random.js"

export default function question(data,i){
    let answers = [...data['results'][i]['incorrect_answers']]
    answers.push(data['results'][i]['correct_answer'])
    document.getElementById('question').innerHTML = data['results'][i]['question']
  // loop through answers to display answers
  randomize(answers).forEach((x,a) => {
      const ul = document.getElementById('ul')
      let li = document.createElement('li')
        li.innerText = `${a+1}: ${x}`
        ul.appendChild(li)

  })
  return data
} 