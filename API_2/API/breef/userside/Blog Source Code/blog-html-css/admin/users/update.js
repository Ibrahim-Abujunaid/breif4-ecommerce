document.getElementById('updateUserForm').addEventListener('submit', (event) => {
  event.preventDefault()
  const username = document.getElementById('username').value
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  const queryString = window.location.search;
  const searchParams = new URLSearchParams(queryString);
  const id = searchParams.get('id');

  updateUser({
      id: id,
      username: username,
      email: email, 
      password: password
  })
})
function updateUser(user) {
  const apiUrl = 'http://localhost/API/serverside/userupdate.php'
  fetch(apiUrl, {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
  })
      .then(response => response.json())
      .then(result => {
          console.log(result)
          window.location.href = 'index.html';
      })
      .catch(error => {
          console.error('Error:', error);
      });
}
  
  
  
  
  
  
  
  
  
  
  
  // const updateUserForm = document.getElementById('updateUserForm')
  // updateUserForm.addEventListener('submit', (event) => {
  //     event.preventDefault()
  //     const username = document.getElementById('username').value
  //     const email = document.getElementById('email').value
  //     const password = document.getElementById('password').value
  //     const queryString = window.location.search;
  //     const searchParams = new URLSearchParams(queryString);
  //     const id = searchParams.get('id');
  //     const formData = {
  //         username: username,
  //         email: email,
  //         password: password
  //     }
  //     fetch('http://localhost/breefFRont/server/userupdate.php', {
  //             method: 'PUT',
  //             headers: {
  //                 'Content-Type': 'application/json',
  //             },
  //             body: JSON.stringify(formData),
  //         })
  //         .then(response => {
  //             if (!response.ok) {
  //                 throw new Error('Network response was not ok');
  //             }
  //             return response.json();
  //         })
  //         .then(data => {
  //             console.log('User updated:', data);
  //             window.location.href = "index.html"
  //         })
  //         .catch(error => {
  //             console.error('Error:', error);
  //         });
  // });