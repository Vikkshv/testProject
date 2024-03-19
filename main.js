document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('phone-input'); 
    const leftBrackedSymbolIndex = 2;
    const rightBrackedSymbolIndex = 6;
    const firstDashIndex = 10;
    const secondDashIndex = 13;
    const totalLength = leftBrackedSymbolIndex + rightBrackedSymbolIndex + firstDashIndex + secondDashIndex;
    

    function formatPhoneNumber(value) {
        value = '+7' + value.substring(2).replace(/\D/g, '');

        if (value.length > leftBrackedSymbolIndex) {
            value = value.slice(0, leftBrackedSymbolIndex) + '(' + value.slice(leftBrackedSymbolIndex);
        }
        if (value.length > rightBrackedSymbolIndex) {
            value = value.slice(0, rightBrackedSymbolIndex) + ')' + value.slice(rightBrackedSymbolIndex);
        }
        if (value.length > firstDashIndex) {
            value = value.slice(0, firstDashIndex) + '-' + value.slice(firstDashIndex);
        }
        if (value.length > secondDashIndex) {
            value = value.slice(0, secondDashIndex) + '-' + value.slice(secondDashIndex);
        }
        if (value.length > totalLength) {
            value = value.slice(0, totalLength);
        }

        return value;
    }

    input.addEventListener('input', function(e) {
        if (e.target.value.length < leftBrackedSymbolIndex || !e.target.value.startsWith('+7')) {
            e.target.value = '+7';
        } else {
            e.target.value = formatPhoneNumber(e.target.value);
        }
    });

    function handleSubmit(event) {
        console.log()
        if (sessionStorage.getItem('formSubmitted')) {
          event.preventDefault();
          document.getElementById('submitButton').disabled = true;
          alert('Вы уже отправляли эту форму ранее.');
        } else {
          sessionStorage.setItem('formSubmitted', 'true');
        }
      }
      
      document.getElementById('myForm').addEventListener('submit', handleSubmit);
});

