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
    // Security fix: Sanitize href to prevent DOM-based XSS
    // Only allow valid ID selectors (alphanumeric, hyphen, underscore)
    if (href === "#" || href === "") {
      const target = $("html");
      const position = target.offset().top;
      $("html, body").animate({ scrollTop: position }, speed, "swing");
      $(".js-menu").fadeOut();
      return false;
    }
    // Validate that href is a valid ID selector
    const id = href.substring(1); // Remove the # prefix
    if (!/^[a-zA-Z0-9_-]+$/.test(id)) {
      // Invalid ID, reject it
      return false;
    }
    // Use document.getElementById for safe DOM access
    const element = document.getElementById(id);
    if (element) {
      const position = $(element).offset().top;
      $("html, body").animate({ scrollTop: position }, speed, "swing");
      $(".js-menu").fadeOut();
    }
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

  // $.ajax("https://connpass.com/api/v1/event/?series_id=6256&order=2&count=1", {
  //   type: "get",
  //   dataType: "jsonp",
  // }).done(function (data) {
  //   const eventData = data.events[0];
  //   const weeks = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  //   const fulldate = new Date(eventData.started_at);
  //   const fulldateEnd = new Date(eventData.ended_at);
  //   const year = fulldate.getFullYear();
  //   const month = fulldate.getMonth() + 1;
  //   const date = fulldate.getDate();
  //   const day = weeks[fulldate.getDay()];
  //   const startHour = String(fulldate.getHours()).padStart(2, "0");
  //   const startMinute = String(fulldate.getMinutes()).padStart(2, "0");
  //   const endHour = String(fulldateEnd.getHours()).padStart(2, "0");
  //   const endMinute = String(fulldateEnd.getMinutes()).padStart(2, "0");

  //   const eventDate = `${year}.${month}.${date}(${day}) ${startHour}:${startMinute}〜${endHour}:${endMinute}`;

  //   const eventTitle = eventData.title;
  //   const eventLink = eventData.event_url;

  //   $(".js-eventDate").text(eventDate);
  //   $(".js-eventTitle").text(eventTitle);
  //   $(".js-eventLink").attr("href", eventLink);

  //   FONTPLUS.reload();
  // });
});
