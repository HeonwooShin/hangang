const body = document.body;
const photographer = document.querySelector('.photographer');

function displayPhotographer(backgroundId) {
    if (backgroundId <= 2)
        photographer.innerHTML = '<span>Photo by <a href="https://unsplash.com/@sarahleephoto?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Sarah Lee</a> on <a href="https://unsplash.com/s/photos/han-river?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>';
    else
        photographer.innerHTML = '<span>Photo by <a href="https://unsplash.com/@minkus?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Minkus</a> on <a href="https://unsplash.com/s/photos/han-river?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>';
}

function setBackground(hour) {
    let backgroundId;

    if (6 <= hour && hour <= 10)
        backgroundId = 1;
    else if (11 <= hour && hour <= 16)
        backgroundId = 2;
    else if (17 <= hour && hour <= 19)
        backgroundId = 3;
    else
        backgroundId = 4;
    
    background = document.createElement('img');
    background.src = `./backgrounds/${backgroundId}.jpg`;
    body.prepend(background);

    displayPhotographer(backgroundId);
}

function getDate() {
    const date = new Date();
    hour = date.getHours();
    setBackground(hour);
}

getDate();