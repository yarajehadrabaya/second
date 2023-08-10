const apiResponse = {
        
    "Pork Burger": {
            publisher: "All Recipes",
            source_url:
                    "http://allrecipes.com/Recipe/Slow-Cooker-Pulled-Pork/Detail.aspx",
            recipe_id: "29057",
            image_url: "http://forkify-api.herokuapp.com/images/586964c174.jpg",
            social_rank: 99.99999999999972,
            publisher_url: "http://allrecipes.com",
    },
    "Chicken Burger": {
            publisher: "What's Gaby Cooking",
            source_url:
                    "http://whatsgabycooking.com/cheddar-jalapeno-chicken-burgers-with-guacamole/",
            recipe_id: "9eb23b",
            image_url:
                    "http://forkify-api.herokuapp.com/images/CheddarJalapenoChickenBurgerswithGuacamole4fdb.jpg",
            social_rank: 99.99999999998766,
            publisher_url: "http://whatsgabycooking.com",
    },
    "Popper Burger": {
            publisher: "Closet Cooking",


            source_url:
                    "http://www.closetcooking.com/2012/05/bacon-wrapped-jalapeno-popper-burgers.html",
            recipe_id: "35119",
            image_url:
                    "http://forkify-api.herokuapp.com/images/Jalapeno2BPopper2BBurgers2B5002B186755e06e2b.jpg",
            social_rank: 99.9999999996593,
            publisher_url: "http://closetcooking.com",
    },
    "Soup": {
            publisher: "Closet Cooking",
            source_url:
                    "http://www.closetcooking.com/2012/09/bacon-double-cheeseburger-soup.html",
            recipe_id: "35109",
            image_url:
                    "http://forkify-api.herokuapp.com/images/Bacon2BDouble2BCheeseburger2BSoup2B5002B0677c192317c.jpg",
            social_rank: 99.99999999937391,
            publisher_url: "http://closetcooking.com",
    },
};
  

    const foodSearchInput = document.getElementById('foodSearch');
    const searchButton = document.getElementById('searchButton');
    const outputDiv = document.getElementById('output');

    searchButton.addEventListener('click', () => {
        const foodName = foodSearchInput.value;
        const foodInfo = apiResponse[foodName];

        if (foodInfo) {
            const html = `
                <h2>${foodName}</h2>
                <p>Publisher: ${foodInfo.publisher}</p>
                <p>Recipe ID: ${foodInfo.recipe_id}</p>
                <img src="${foodInfo.image_url}" alt="${foodName}">
                <p><a href="${foodInfo.source_url}></a></p>
            `;
            outputDiv.innerHTML = html;
        } else {
            outputDiv.innerHTML = '<p>Food not found.</p>';
        }
    });