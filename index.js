const PHTube = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await response.json();
    const categories = data.data;
    const buttonContainer = document.getElementById('button_container');

    categories.forEach((category) => {
        const newDiv = document.createElement('div')
        newDiv.innerHTML = `
        <button onclick="videoDisplay('${category.category_id}')">${category.category}</button>
        `;
        buttonContainer.appendChild(newDiv)
        // console.log(category);
    });

}
const videoDisplay = async(categoryid) => {
    const response=await fetch (`https://openapi.programming-hero.com/api/videos/category/${categoryid}`);
    const data=await response.json();
    const videos=data.data
    // console.log(videos);
    videos.forEach(video=>{
        console.log(video);
    })

    // console.log(categoryid);
};




PHTube();