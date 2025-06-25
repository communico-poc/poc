const target = '19116111';
const endpoint = '/ajax/fetch/delete_schedule';

fetch(endpoint, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: 'id=' + target
})
.then(response => {
    console.log(`Delete request sent for ID ${target}. Status: ${response.status}`);
    return response.text();
})
.then(data => {
    console.log('Server response:', data);
})
.catch(error => {
    console.error('Fetch failed:', error);
});
