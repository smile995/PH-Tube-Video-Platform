const PHTube=async()=>{
    const response= await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data= await response.json();
    const categories=data.data;
    categories.forEach(categiry => {
        console.log(categiry.category);
    });
    // console.log(categories);
}
PHTube();