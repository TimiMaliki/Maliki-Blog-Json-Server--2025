
// const form = document.querySelector('form')

// const createPost = async (e) => {
//     e.preventDefault()

//     const posts = {
//         Header: form.title.value,
//         text: form.text.value,
//         BODY: form.body.value
//     }
    


//     await fetch("http://localhost:3000/posts", {
//      method: 'POST',
//     body: JSON.stringify(posts),
//     headers:{
//         'Content-Type': 'application/json',
//     }
//     })


    

//     window.location.replace("/index.html")



// }



// form.addEventListener("submit" , createPost)


// const input = document.getElementById('image-upload');

// input.addEventListener('change', async (event) => {
//     const file = event.target.files[0];
//     if (file) {
//         const reader = new FileReader();

//         reader.onload = async () => {
//             const base64Image = reader.result;
//             // Send the Base64 string to your server
//             const response = await fetch("http://localhost:3000/posts", {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ image: base64Image }),
//             });

//             if (response.ok) {
//                 alert('Image uploaded successfully!');
//             } else {
//                 alert('Failed to upload image.');
//             }
//         };

//         reader.readAsDataURL(file); // Convert file to Base64 string
//     }
// });


// console.log(form)




const form = document.querySelector('form');
const input = document.getElementById('image-upload');

// Variable to store the Base64 image
let base64Image = '';

// Handle image upload
input.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            base64Image = reader.result; // Store the Base64 image
        };
        reader.readAsDataURL(file); // Convert file to Base64 string
    }
});

// Handle form submission
const createPost = async (e) => {
    e.preventDefault();

    // Create the post object, including the Base64 image
    const posts = {
        Header: form.title.value,
        text: form.text.value,
        BODY: form.body.value,
        image: base64Image, // Include the Base64 image
    };

    // Send the data to the server
    try {
        const response = await fetch("http://localhost:3000/posts", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(posts),
        });

        if (response.ok) {
            alert('Post created successfully!');
            window.location.replace("/index.html");
        } else {
            alert('Failed to create post.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while creating the post.');
    }
};

form.addEventListener("submit", createPost);
