

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

const timeButton = document.querySelectorAll(".time-btn");

const priorTimeValues =["Yesterday - ", "Last Week - ", "Last Month - "];

const typeBUttons = document.querySelectorAll(".btn");



let systemStarted = false;

// GEt data from .json File
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

                        
//Set data after grabbing d8ata, make a loading waiting page during this probably
setTimeout(() => 
{
    console.log(dataValues.length)
    for (let index = 0; index < dataValues.length; index++) 
        {
            const cardLabel = dataCard[index].querySelector(".label");
            const mainHours = dataCard[index].querySelector(".current-time");
            const priorHours = dataCard[index].querySelector(".prior-time-label");
            cardLabel.textContent = dataValues[index].title;
            mainHours.textContent = "";
            priorHours.textContent = "";
        }

systemStarted = true;

}, 1000);


// Populate image links in the data cards and background colors
for (let i = 0; i < dataCard.length; i++) 
{
    const data = dataCard[i].querySelector(".background");
    
    data.style.backgroundColor = backGroundColors[i];
    data.style.backgroundImage = `url(${backGroundImages[i]})` ;
    // data.style.backgroundRepeat = 'no-repeat';
    // data.style.backgroundPosition = 'top right';
    // data.style.marginRight = '10px';
    data.style.backgroundSize = '50px';

}




// Track Selected time buttons
timeButton.forEach(button => 
{
    button.addEventListener("click", () => 
    {
        timeButton.forEach(btn => btn.classList.remove("active-time"));
        button.classList.add("active-time");

        // Get which index has active time, then grab the data from there, also change text to match
        for (let index = 0; index < timeButton.length; index++) 
            if(timeButton[index].classList.contains("active-time"))
                SetCardData(index);

    });

});


//Start adding data to the card based on the index
function SetCardData(buttonIndex)
{
    for (let index = 0; index < dataCard.length; index++) 
    {
        const mainHours = dataCard[index].querySelector(".current-time");
        const priorHours = dataCard[index].querySelector(".prior-time-label");

        mainHours.textContent = dataValues[index].timeframes[timeButton[buttonIndex].textContent.toLowerCase()].current + "hrs";
        priorHours.textContent = priorTimeValues[buttonIndex] + dataValues[index].timeframes[timeButton[buttonIndex].textContent.toLowerCase()].previous + "hrs";
    }
}



//Track Clicked Activity Button


function ClickedTypeButton(index,button)
{
    console.log("Click index is " + index);

}


typeBUttons.forEach((button,index) =>
{
    button.addEventListener("click", () =>
    {
        //ClickedTypeButton(index);

        if(button.classList.contains("active"))
        {
            button.classList.remove("active");
        }
        else
        {
            typeBUttons.forEach(element => 
            {
                element.classList.remove("active");
            });
            button.classList.add("active");
        }
    });


});