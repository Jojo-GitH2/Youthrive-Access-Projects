const form = document.getElementById('form');
const foodImage = document.getElementById('foodImage');
const foodName = document.getElementById('foodName');
const foodImg = document.getElementById('foodImg');

form.addEventListener('change', (event) => {
    const selectedFood = event.target.value;
    applyTheme(selectedFood);
})

function applyTheme(selectedFood) {
    // Describe the theme to be applied
    const themes = {
        pizza: { bgColor: "#ffcccb", textColor: "#8b4513", imgSrc: "images/pizza.png", name: "Pizza" },
        burger: { bgColor: "#f4a460", textColor: "#3e2b22", imgSrc: "images/burger.png", name: "Burger" },
        pasta: { bgColor: "#ff6347", textColor: "#fff", imgSrc: "images/pasta.png", name: "Pasta" },
        sandwich: { bgColor: "#deb887", textColor: "#333", imgSrc: "images/sandwich.png", name: "Sandwich" },
        salad: { bgColor: "#98fb98", textColor: "#333", imgSrc: "images/salad.png", name: "Salad" },
        sushi: { bgColor: "#20b2aa", textColor: "#fff", imgSrc: "images/sushi.png", name: "Sushi" },
        tacos: { bgColor: "#cd853f", textColor: "#fff", imgSrc: "images/tacos.png", name: "Tacos" },
        icecream: { bgColor: "#add8e6", textColor: "#333", imgSrc: "images/ice_cream.png", name: "Ice Cream" },
        cake: { bgColor: "#ff69b4", textColor: "#fff", imgSrc: "images/cake.png", name: "Cake" },
        cookies: { bgColor: "#d2691e", textColor: "#fff", imgSrc: "images/cookies.png", name: "Cookies" },
        donuts: { bgColor: "#ff4500", textColor: "#fff", imgSrc: "images/donuts.png", name: "Donuts" },
        chips: { bgColor: "#f5deb3", textColor: "#333", imgSrc: "images/chips.png", name: "Chips" },
        popcorn: { bgColor: "#f0e68c", textColor: "#333", imgSrc: "images/popcorn.png", name: "Popcorn" },
        fries: { bgColor: "#daa520", textColor: "#333", imgSrc: "images/fries.png", name: "Fries" }
    };

    if (themes[selectedFood]) {
        document.body.style.backgroundColor = themes[selectedFood].bgColor;
        document.body.style.color = themes[selectedFood].textColor;
        foodImg.src = themes[selectedFood].imgSrc;
        foodName.innerText = themes[selectedFood].name;
        foodImage.style.display = 'block';
    }

}

function resetPage() {
    document.body.style.backgroundColor = '#f5f5f5';
    document.body.style.color = '#333';
    foodImage.style.display = 'none';
}