export default function question(data){
    let answers = [...data['results'][0]['incorrect_answers']]
    answers.push(data['results'][0]['correct_answer'])
    document.getElementById('question').innerText = data['results'][0]['question']
    function randomize(values) {
        let index = values.length,  randomIndex;
    
        // While there remain elements to shuffle.
        while (index != 0) {
    
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * index);
        index--;
    
        // And swap it with the current element.
        [values[index], values[randomIndex]] = [
            values[randomIndex], values[index]];
        }
    
        return values;
    }
  let arr = answers
  // loop through answers to display answers
  arr.for
  console.log(randomize(arr)[1]);
}