function openPetDetails(petName) {
    let details = {
        image1: {
            image: "image1.jpg",
            breed: "Labrador Retriever",
            color: "Golden",
            size: "Medium",
            age: "2 years",
            vaccinated: "Yes",
            adoptionFee: "$100",
            ownerName: "John Doe",
            ownerAddress: "123 Dog St., New York",
            contact: "123-456-7890"
        },
        image2: {
            image: "image2.jpg",
            breed: "Persian Cat",
            color: "White",
            size: "Small",
            age: "3 years",
            vaccinated: "Yes",
            adoptionFee: "$80",
            ownerName: "Emma Smith",
            ownerAddress: "456 Cat Ave., Los Angeles",
            contact: "987-654-3210"
        },
        image3: {
            image: "image3.jpg",
            breed: "Macaw Parrot",
            color: "Green & Blue",
            size: "Small",
            age: "1.5 years",
            vaccinated: "No",
            adoptionFee: "$50",
            ownerName: "James Brown",
            ownerAddress: "789 Parrot Rd., Miami",
            contact: "555-123-4567"
        },
        image4: {
            image: "image4.jpg",
            breed: "Himalayan Rabbit",
            color: "White",
            size: "Small",
            age: "1 year",
            vaccinated: "Yes",
            adoptionFee: "$60",
            ownerName: "Alice Johnson",
            ownerAddress: "321 Rabbit Blvd., Chicago",
            contact: "888-123-4567"
        }
    };

    let pet = details[petName];

    if (pet) {
        let detailsWindow = window.open("", "_blank", "width=500,height=600");
        detailsWindow.document.write(`
            <html>
            <head>
                <title>Pet Details</title>
                <style>
                    body { font-family: Arial, sans-serif; text-align: center; background: #f8f9fa; padding: 20px; }
                    .container { background: white; padding: 15px; border-radius: 10px; box-shadow: 2px 2px 10px rgba(0,0,0,0.2); }
                    img { width: 80%; border-radius: 10px; }
                    h2 { color: #333; }
                    p { font-size: 16px; color: #555; margin: 5px 0; }
                    .highlight { font-weight: bold; color: #007bff; }
                </style>
            </head>
            <body>
                <div class="container">
                    <h2>${pet.breed}</h2>
                    <img src="${pet.image}" alt="${pet.breed}">
                    <p><span class="highlight">Color:</span> ${pet.color}</p>
                    <p><span class="highlight">Size:</span> ${pet.size}</p>
                    <p><span class="highlight">Age:</span> ${pet.age}</p>
                    <p><span class="highlight">Vaccinated:</span> ${pet.vaccinated}</p>
                    <p><span class="highlight">Adoption Fee:</span> ${pet.adoptionFee}</p>
                    <h3>Owner Details</h3>
                    <p><span class="highlight">Name:</span> ${pet.ownerName}</p>
                    <p><span class="highlight">Address:</span> ${pet.ownerAddress}</p>
                    <p><span class="highlight">Contact:</span> ${pet.contact}</p>
                </div>
            </body>
            </html>
        `);
        detailsWindow.document.close(); // Ensure the window loads properly
    } else {
        alert("Pet details not found!");
    }
}
