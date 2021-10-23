$(function () {
  const sp = window.matchMedia("(max-width:768px)").matches;
  $(window).on("scroll", function () {
    $(this).scrollTop() > (sp ? 620 : 620)
      ? $(".js-header").addClass("isShown")
      : $(".js-header").removeClass("isShown");
  });

  $('a[href^="#"]').click(function () {
    const speed = 500;
    const href = $(this).attr("href");
    const target = $(href == "#" || href == "" ? "html" : href);
    const position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    $(".js-menu").fadeOut();
    return false;
  });

  $(".js-menubar").on("click", function (e) {
    e.preventDefault();
    $(".js-menu").fadeIn();
  });

  $(".js-menuclose,.js-menu").on("click", function (e) {
    e.preventDefault();
    $(".js-menu").fadeOut();
  });

  $(".l-spmenu_inner").on("click", function (e) {
    e.stopPropagation();
  });
});
