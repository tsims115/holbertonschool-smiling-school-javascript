$(document).ready(
    function() {
        $.ajax({
                    url: "https://smileschool-api.hbtn.info/quotes",
                    type: "GET",
                    error: function(result) {
                        alert("Error");
                    },
                    success: function(response){
                                let i = 0;
                                response.forEach(e => {
                                    console.log(e);
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
    }
)
