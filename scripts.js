function startOrStopLoading() {

}

$(document).ready(
    function() {
        $('#carouselExampleControls .carousel-inner').hide();
        $.ajax({
                    url: "https://smileschool-api.hbtn.info/quotes",
                    type: "GET",
                    error: function(result) {
                        alert("Error");
                    },
                    success: function(response){
                                let i = 0;

                                response.forEach(e => {
                                    $('#carouselExampleControls .carousel-inner').append(`
                                    <div class="p-2 carousel-item m-2 justify-content-center w-100">
                                        <div class="d-block w-75 d-flex flex-column flex-sm-row" >
                                    <img class="m-5 d-block w-25 img-fluid rounded-circle" src="${e.pic_url}" alt="First slide">
                                    <div class="ml-5 d-flex flex-column">
                                    <p>« ${e.text}</p>
                                    <span>${e.name}</span>
                                    <span>${e.title}</span>
                                        </div>
                                        </div>
                                     </div>
                                    `);
                                    if (i === 0) {
                                        $('#carouselExampleControls .carousel-inner .carousel-item').addClass('active');
                                    }
                                    i += 1;
                                });
        }});
        setTimeout(() => {
            $('#carouselExampleControls .loader').hide()
            $('#carouselExampleControls .carousel-inner').show();
        }, 1000);
        
    }
);
function card_loader(name, url, id) {
    $(`#${name}`).hide();
    $.ajax({
        url: `https://smileschool-api.hbtn.info/${url}`,
        type: "GET",
        error: function(result) {
            alert("Error");
        },
        success: function(response){
            let i = 0;
            
            response.forEach(e => {
                $(`#${name} .carousel-inner`).append(`
                <div class="card carousel-item m-2" style="max-width: 300px;">
                                <div class="text-center" >
                                    <img class="card-img-top rounded" src="${e.thumb_url}" alt="First slide">
                                    <img class=" card-img-top play-btn w-25" style="margin-top: -80%" src="images/play.png" width="10px">
                                    <div class="c${i}">
                                        <h5><b>${e.title}</b></h5>
                                        <p>${e["sub-title"]}</p>
                                        <div>
                                            <div class="d-flex">
                                                <img class="rounded-circle w-25" src="${e.author_pic_url}">
                                                <h6 style="color: '#C271F'">${e.author}</h6>
                                            </div>
                                            <div class="stars d-flex justify-content-between">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                `);
                for (let j = 0; j <= 5; j++) {
                    if (j <= e.star) {
                        $(`#${name} .carousel-inner .c${i} .stars`).append(`<img class="m-a" style="width: 15px; height:15px"  src="./images/star_on.png">`);
                    } else {
                        $(`#${name} .carousel-inner .c${i} .stars`).append(`<img class="m-a" style="width: 15px; height:15px"  src="./images/star_off.png">`)
                    }
                }
                $(`#${name} .carousel-inner .c${i} .stars`).append(`<span class="offset-2">8 min</span>`);

                if (i === 0) {
                    $(`#${name} .carousel-inner .carousel-item`).addClass('active');
                }
                i += 1;
            });
        }});
        setTimeout(() => {
            $(`#${id} .loader`).hide()
            $(`#${name}`).show();
        }, 1000);
}
function form_filter() {
    $('.form-result-div .card').hide();
    $.ajax({
        url: `https://smileschool-api.hbtn.info/courses`,
        type: "GET",
        error: function(result) {
            alert("Error");
        },
        success: function(response){
            let i = 0;
            response.forEach(e => {
                
                $(`.form-result-div`).append(`
                <div class="card m-2 w-25">
                        <div class="text-center" >
                            <img class="card-img-top rounded" src="./images/thumbnail_1.jpg" alt="First slide">
                            <img class=" card-img-top play-btn w-25" style="margin-top: -80%" src="images/play.png" width="10px">
                            <div class="">
                                <h5><b>Diagnoal Smile</b></h5>
                                <p>Lorem ipsum dolor sit amet, consect adipiscrin elit, sed do eiusrod.</p>
                                <div>
                                    <div class="d-flex">
                                        <img class="rounded-circle w-25" src="./images/profile_1.jpg">
                                        <h6 style="color: '#C271F'">Phillip Massey</h6>
                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <img class="m-a" style="width: 15px; height:15px"  src="./images/star_on.png">
                                        <img class="m-a" style="width: 15px; height:15px" src="./images/star_on.png">
                                        <img class="m-a" style="width: 15px; height:15px" src="./images/star_on.png">
                                        <img class="m-a" style="width: 15px; height:15px" src="./images/star_on.png">
                                        <img class="m-a" style="width: 15px; height:15px" src="./images/star_off.png">
                                        <span class="offset-2">8 min</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `);
                for (let j = 0; j <= 5; j++) {
                    if (j <= e.star) {
                        $(`#${name} .carousel-inner .c${i} .stars`).append(`<img class="m-a" style="width: 15px; height:15px"  src="./images/star_on.png">`);
                    } else {
                        $(`#${name} .carousel-inner .c${i} .stars`).append(`<img class="m-a" style="width: 15px; height:15px"  src="./images/star_off.png">`)
                    }
                }
                $(`#${name} .carousel-inner .c${i} .stars`).append(`<span class="offset-2">8 min</span>`);

                if (i === 0) {
                    $(`#${name} .carousel-inner .carousel-item`).addClass('active');
                }
                i += 1;
            });
        }}); 
    setTimeout(() => {
        $(`.form-result .loader`).hide()
        $(`.form-result-div .card`).show();
    }, 1000);
}
card_loader('carousel2', 'popular-tutorials', "2");
card_loader('carousel3', 'latest-videos', "3");
form_filter();
