function createNumberDisplayFunction(numbers) {
    let currentIndex = -1;

    function displayNextNumber() {
      currentIndex = (currentIndex + 1) % numbers.length;
      alert(numbers[currentIndex]); 
    }

    return displayNextNumber;
  }

  const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const displayNext = createNumberDisplayFunction(myArray);

  const displayButton = document.getElementById('display-button');
  displayButton.addEventListener('click', displayNext);