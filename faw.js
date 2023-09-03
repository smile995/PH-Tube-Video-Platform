Abir Ahmed Chowdhury
if (data.data && data.data.length > 0) {
        data.data?.forEach((news) => {
tor sob code aikhne thakbe
else {
       
        const noDataMessage = document.createElement('div');
        noDataMessage.innerHTML = `
            <div class="relative lg:left-[460px] mt-10">
                <img class="m-auto" src="./Icon.png" alt="">
                <p class="font-extrabold text-4xl text-center">Oops!! Sorry, There is no content here</p>
            </div>
        `;
        cardcontainer.appendChild(noDataMessage);
    }