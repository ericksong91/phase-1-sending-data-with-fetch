function submitData(userName, userEmail){

    const formData = {
        name: `${userName}`,
        email: `${userEmail}`,
      };
      
      const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      };
      
      return (
        fetch("http://localhost:3000/users", configurationObject)
        .then(function (response) {
            return response.json();
         })
        .then(function (object){
            console.log(object)
            // document.getElementsByTagName('body')[0].innerHTML = object.id
            document.body.append(object.id)
        })
        .catch(function (error){
            alert('Error Processing Request')
            console.log(error.message)
            document.body.append(error.message)
        })
        
        )
}

// function handleHTML(object){
//     console.log(object)
//     // const title = document.querySelector('section#movieDetails h4');
//     // const summary = document.querySelector('section#movieDetails p');

//     const name = document.querySelector('body')
//     const email = document.querySelector('body')

//     name.document.body.innerHTML = object.name;
//     email.innerText = object.email;
// }

console.log(submitData('Rick', '123@123.com'))
