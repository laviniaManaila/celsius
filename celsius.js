document.addEventListener('DOMContentLoaded', function(event) {
    const temperatureInput = document.getElementById('temperatureInput');
    const unitSelect = document.getElementById('unitSelect');
    const convertBtn = document.getElementById('convertBtn');
    const resultDiv = document.getElementById('result');

    convertBtn.addEventListener('click', function() {
        const temperature = parseFloat(temperatureInput.value);
        const unit = unitSelect.value;
        let result;
        
       
        if (isNaN(temperature)) {
            resultDiv.textContent = 'Invalid number';
            temperatureInput.style.borderColor = 'red';
        } else {
            if (unit === 'celsius') {
                result = (temperature - 32) * 5 / 9;
                resultDiv.textContent = `Result: ${result.toFixed(2)} °C`;
            } else if (unit === 'fahrenheit') {
                result = (temperature * 9 / 5) + 32;
                resultDiv.textContent = `Result: ${result.toFixed(2)} °F`;
            }
            temperatureInput.style.borderColor = ''; 
        }
    });
  
    convertBtn.addEventListener('click', function() {
        convertBtn.setAttribute ('disabled','disabled')
    })
    temperatureInput.addEventListener('input',function() {
        resultDiv.textContent = 'Result'
    })
    temperatureInput.addEventListener('input' , function () {
        convertBtn.removeAttribute ('disabled')
    })
    unitSelect.addEventListener('change' , function () {
        convertBtn.removeAttribute ('disabled')
    })

});

