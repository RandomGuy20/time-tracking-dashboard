

// Pull card data from json data file


/* #region DO List 

1. Object Listeners for timeframe click
2. object listener for card click
3. Upon a click populate data based on the time click
4. Dynamically alter images and colors from Javascript

 #ednregion */

const dataCard = document.querySelectorAll(".data-card");
const backGroundImages =
[
    "images/icon-work.svg",
    "images/icon-play.svg",
    "images/icon-study.svg",
    "images/icon-exercise.svg",
    "images/icon-social.svg",
    "images/icon-self-care.svg"
]

const backGroundColors = 
[
    "hsl(15,100%,70%)",
    "hsl(195,74%,62%)",
    "hsl(348,100%,68%)",
    "hsl(145,58%,55%)",
    "hsl(264,64%,52%)",
    "hsl(43,84%,65%)",
]

const dataValues = [];


const getData = fetch('./data.json')
                     .then(response => response.json())
                     .then(data => //{dataValues.push(...data)});
                        {
                            data.forEach(element => 
                                {
                                    // console.log(element)
                                    dataValues.push(element);
                                });
                        });

setTimeout(() => 
{
    console.log(dataValues.length)
    for (let index = 0; index < dataValues.length; index++) 
        {
        
            console.log("In Diata Values " + dataValues[index].title);
            const cardLabel = dataCard[index].querySelector(".label");
    
            cardLabel.textContent = dataValues[index].title;
        }





}, 100);


// Populate image links in the data cards and background colors
for (let i = 0; i < dataCard.length; i++) 
{
    const data = dataCard[i].querySelector(".background");
    
    data.style.backgroundColor = backGroundColors[i];
    data.style.backgroundImage = `url(${backGroundImages[i]})` ;
    data.style.backgroundRepeat = 'no-repeat';
    data.style.backgroundPosition = 'top right';
    data.style.backgroundSize = '40px';

}


// Populte Card Labels




// Track Selected time buttons

//Track Clicked Activity Button