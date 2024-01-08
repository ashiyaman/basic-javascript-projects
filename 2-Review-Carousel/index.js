let infos = [
    {
        id: 1,
        img: "photo1.jpg",
        name: "Ashiya Banu",
        job: "Web Developer",
        description: "Love this plugin! Does exactly what it is supposed to do and so far without any real issues. (You might want to review some Dummy Text generation which contains words and even sentences with a meaning and that should not suppose to happen)"
    },
    {
        id: 2,
        img: "photo2.jpg",
        name: "Aneesha",
        job: "Tester",
        description: "Thank you for the quick response and even faster fix!! Now that I can get to rate, I'd give it five.. My co-workers love the 'fun/new' dummy text the documents!! Works like a charm, as you might be able to figure out ;)"
    },
    {
        id: 3,
        img: "photo3.png",
        name: "Supriya",
        job: "Software Engineer",
        description: "Well, seems like a nice plugin and all, but it doesn't work on mac.. Or atleast, I can't get it to work :( Tried to open the 'Generate' by shortcut and by right-click - no such luck.. I won't be rating this plugin, since it 'don't' work on Mac, so no worries -- won't destroy the ratings.. Atleast not untill I try the plugin lol :P"
    },
    {
        id: 4,
        img: "photo4.png",
        name: "Sumathi",
        job: "Analyst",
        description: "Really nice idea, this adds a little flavor to all those dummy-texts! I can recommend setting up keystrokes for this, it'll speed up the process a lot!"
    },
]

let parentDiv = document.querySelector("#cardDetails")

window.onload = () => {
    let currentCard = infos[0]
    parentDiv.setAttribute("key", currentCard.id)
    updateCard(currentCard)
}

let changeCard = (type) => {
    let currentId = parseInt(parentDiv.getAttribute("key")); // Convert to a numeric value
    let newId = (type === 'previous') ? (currentId === 1) ? 4 : currentId - 1 : (currentId === 4) ? 1 : currentId + 1;
    let newCard = infos.find(info => info.id === newId);
    parentDiv.setAttribute("key", newCard.id)
    updateCard(newCard)
}

let updateCard = (card) => {
    document.querySelector(".img-container > img").src = "images/" + card.img;
    document.querySelector("#name").innerHTML = card.name;
    document.querySelector("#job").innerHTML = card.job;
    document.querySelector("#description").innerHTML = card.description;
}

