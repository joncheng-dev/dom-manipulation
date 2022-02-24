$(document).ready(function () {
  $("button#hello").click(function () {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Hello to you too!</li>");
    $("ul#user")
      .children("li")
      .first()
      .click(function () {
        $(this).remove();
      });
    $("ul#webpage")
      .children("li")
      .first()
      .click(function () {
        $(this).remove();
      });
  });
  $("button#goodbye").click(function () {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>See you later!</li>");
    $("ul#user")
      .children("li")
      .first()
      .click(function () {
        $(this).remove();
      });
    $("ul#webpage")
      .children("li")
      .first()
      .click(function () {
        $(this).remove();
      });
  });
  $("button#stop").click(function () {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Okay fine.</li>");
    $("ul#user")
      .children("li")
      .first()
      .click(function () {
        $(this).remove();
      });
    $("ul#webpage")
      .children("li")
      .first()
      .click(function () {
        $(this).remove();
      });
  });
});
