window.onload = function () {
    const input = document.querySelector('.typer');
    const message = "Rick Sanchez.";
    const btn = document.querySelector('.btn');
    let timer = null;

    btn.addEventListener('click', function (e) {
        clearTimeout(timer)
        e.target.setAttribute('disabled', 'disabled')
        timer = setTimeout(() => {
            writeWord(message);
            
        }, 300);
    })

    const writeWord = (word) => {
        let splited = Array.from(word)
        let count = 0

        function myLoop() {
            setTimeout(() => {
                console.log(splited[count])
                let letter = ''
                let lastLetter = ''
                
                lastLetter = input.innerHTML
                letter = lastLetter + splited[count]
                
                input.innerHTML = letter
                // input.innerHTML =+ 
                count++
                
                if(count < splited.length ){
                    myLoop()
                }

            }, 200);
        }

        myLoop()

        setTimeout(() => {
            eraseWord()
        }, 3000);
    }

    const eraseWord = () => {

        let lastWord = input.innerHTML
        let count = lastWord.length


        // let lastWord = input.innerHTML
        // let count = lastWord.length

        console.log(count)
        
        myLoop()
        function myLoop() {
            setTimeout(() => {
                // console.log(splited[count])
                let word = ''
                word = lastWord.slice(0, -1)
                lastWord = word
                // console.log(word)
                input.innerHTML = word
                
                count--
                
                if(count >= 0 ){
                    myLoop()
                } 
                if(count == 0){
                    btn.removeAttribute('disabled');
                } 

            }, 120);
        }

        


    }


}