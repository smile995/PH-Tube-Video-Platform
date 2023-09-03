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
    const videoContainer=document.getElementById("videoContainer");
    videos.forEach(video=>{
        console.log(video);
        const videoDiv=document.createElement("div");
        videoDiv.innerHTML=`
        <figure><img  src="${video.thumbnail}" alt="Shoes" /></figure>
                <div class="card-body">
                  <div class="flex items-start">
                    <div class="flex items-start ">
                        <img class="rounded-full w-10" src="${video.authors[0].profile_picture}"" alt="not founded">
                        
                      </div>
                      <div class="pl-5">
                        <h2 class="card-title">${video. title} </h2>
                        <div class="flex items-center" >
                        
                         <p>${video.authors[0].profile_name}</p>
                         <img src="" alt="">
                        
                        </div>
                        <p>${video.others.views} views</p>
                      </div>
                  </div>
                  
                </div>
                `;
                videoContainer.appendChild(videoDiv)   
    })

    // console.log(categoryid);
};




PHTube();