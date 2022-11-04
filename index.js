import fetch from 'node-fetch';

async function getTickets(){
    const myTicket = await fetch('https://dpapi55.atlassian.net/rest/api/3/search', {
  method: 'GET',
  headers: {
    'Authorization': `Basic ${Buffer.from(
      'daftpunkapi@gmail.com:hgMC1QqsWN3BdWvcMlTg8F77'
    ).toString('base64')}`,
    'Accept': 'application/json'
  }
}).then(response => {
    console.log(
      `Response: ${response.status} ${response.statusText}`
    );
    return response.text();
  })
  .then(text => console.log(text))
  .catch(err => console.error(err)); 
    
//const response = await myTicket.json();
// console.log(response);
}



getTickets();

// console.log(myTicket);