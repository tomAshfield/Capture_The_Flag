const solution = document.getElementById('solution');
const modal = document.querySelector('#my-modal');
const closeBtn = document.querySelector('.close');
const image = document.getElementById("img");
const desc = document.getElementById("desc")

solution.addEventListener('click', showAnswer);

var index = 0;
buttonList = ["Hide Answer", "View Answer"];
imgList = ['images/best_bathroom_answer1.png', "images/best_bathroom.png"]
descList = ["Utilizing the brute force technique, I repeatedly queried the database until the next character of the flag was successfully identified. Once obtained, I appended the character to the request link variable and proceeded to the next one.", "After visiting 90% of the university's bathrooms, I've indisputably declared one bathroom to hold my personal 'Golden Toilet' reward. Now it is your job to uncover the mystery of Delaware's BEST bathroom!!!"]

// Open
function showAnswer() {
    image.src = imgList[index % 2];
    solution.innerHTML = buttonList[index % 2];
    desc.innerHTML = descList[index % 2];
    index += 1;
}

