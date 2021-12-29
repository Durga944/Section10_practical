const poll = {
    question : 'What is your favourite programming language?',
    options : ['0:JavaScript','1:Pyhton','2:Rust','3:C++'],

    answer: new Array(4).fill(0),
    registerNewAnswer(){
        const answer = Number(
            prompt(`${this.question} \n ${this.options.join('\n')}\n(Write opetion number)`)
        );
        console.log(answer);

        typeof answer==='number' && answer < this.answer.length && this.answer[answer]++;
        console.log(this.answer);

        this.displayResults();
        this.displayResults('string');
    },
    displayResults(type='array'){
        if(type==='array'){
            console.log(this.answer);
        }else if(type==='string'){
            console.log(`Poll result are ${this.answers.join(',')}`);
        }
    }
};
// poll.registerNewAnswer();

document.querySelector('.poll')
addEventListener('click',poll.registerNewAnswer.bind(poll));