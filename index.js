function catCarousel(){

  $('.thumbnail').on('click', e => {

    let source = $(e.currentTarget).find("img").attr("src");  
    let alternate = $(e.currentTarget).find("img").attr("alt");
   
   $(".hero img").attr("src", source).attr("alt", alternate);
  });
}

$(catCarousel);
  
