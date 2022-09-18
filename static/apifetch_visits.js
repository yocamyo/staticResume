updateVisitCount();

function updateVisitCount() {
    fetch('https://4ds0agn8sb.execute-api.us-east-2.amazonaws.com/serverless_lambda_stage/')
        .then(response => {
        return response.json()
      })
        .then(data => {
            console.log(data)
            document.getElementById('count').innerHTML = data;
        })
    }
