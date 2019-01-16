"use strict";

$(document).ready(function () {
  $(".ham_svg, .menu-header").click(function () {
    $(".menu_modal").slideToggle();
  });
  $(document).scroll(function () {
    var scrollBottom = $(window).scrollTop() + $(window).height();

    if (scrollBottom < $("#o-que-somos").position().top) {
      $(".indicador .stroke-1").attr("x2", "74");
      $(".indicador .stroke-1").attr("stroke", "#E52E6C");
      $(".indicador .stroke-5").attr("stroke", "#FFFFFF");
      $(".indicador .stroke-2").attr("stroke", "#FFFFFF");
      $(".indicador .stroke-3").attr("stroke", "#FFFFFF");
      $(".indicador .stroke-4").attr("stroke", "#FFFFFF");
      $(".indicador .stroke-2").attr("x2", "56");
      $(".indicador .stroke-3").attr("x2", "56");
      $(".indicador .stroke-4").attr("x2", "56");
      $(".indicador .stroke-5").attr("x2", "56");
    } else if (scrollBottom > $("#o-que-somos").position().top && scrollBottom < $("#doacoes").position().top) {
      $(".indicador .stroke-1").attr("x2", "56");
      $(".indicador .stroke-2").attr("x2", "74");
      $(".indicador .stroke-2").attr("stroke", "#E52E6C");
      $(".indicador .stroke-5").attr("stroke", "#FFFFFF");
      $(".indicador .stroke-1").attr("stroke", "#FFFFFF");
      $(".indicador .stroke-3").attr("stroke", "#FFFFFF");
      $(".indicador .stroke-4").attr("stroke", "#FFFFFF");
      $(".indicador .stroke-3").attr("x2", "56");
      $(".indicador .stroke-4").attr("x2", "56");
      $(".indicador .stroke-5").attr("x2", "56");
    } else if (scrollBottom > $("#doacoes").position().top && scrollBottom < $("#interessado").position().top) {
      $(".indicador .stroke-1").attr("x2", "56");
      $(".indicador .stroke-2").attr("x2", "56");
      $(".indicador .stroke-3").attr("x2", "74");
      $(".indicador .stroke-3").attr("stroke", "#E52E6C");
      $(".indicador .stroke-5").attr("stroke", "#FFFFFF");
      $(".indicador .stroke-1").attr("stroke", "#FFFFFF");
      $(".indicador .stroke-2").attr("stroke", "#FFFFFF");
      $(".indicador .stroke-4").attr("stroke", "#FFFFFF");
      $(".indicador .stroke-4").attr("x2", "56");
      $(".indicador .stroke-5").attr("x2", "56");
    } else if (scrollBottom > $("#interessado").position().top && scrollBottom < $("#contato").position().top) {
      $(".indicador .stroke-1").attr("x2", "56");
      $(".indicador .stroke-2").attr("x2", "56");
      $(".indicador .stroke-3").attr("x2", "56");
      $(".indicador .stroke-4").attr("x2", "74");
      $(".indicador .stroke-4").attr("stroke", "#E52E6C");
      $(".indicador .stroke-5").attr("stroke", "#FFFFFF");
      $(".indicador .stroke-1").attr("stroke", "#FFFFFF");
      $(".indicador .stroke-2").attr("stroke", "#FFFFFF");
      $(".indicador .stroke-3").attr("stroke", "#FFFFFF");
      $(".indicador .stroke-5").attr("x2", "56");
    } else if (scrollBottom > $("#contato").position().top) {
      $(".indicador .stroke-1").attr("x2", "56");
      $(".indicador .stroke-2").attr("x2", "56");
      $(".indicador .stroke-3").attr("x2", "56");
      $(".indicador .stroke-4").attr("x2", "56");
      $(".indicador .stroke-5").attr("x2", "74");
      $(".indicador .stroke-5").attr("stroke", "#E52E6C");
      $(".indicador .stroke-1").attr("stroke", "#FFFFFF");
      $(".indicador .stroke-2").attr("stroke", "#FFFFFF");
      $(".indicador .stroke-3").attr("stroke", "#FFFFFF");
      $(".indicador .stroke-4").attr("stroke", "#FFFFFF");
    }
  });
  $(".o-que-somos-modal").click(function () {
    $(".menu_modal").slideToggle();
    $("html, body").animate({
      scrollTop: $("#o-que-somos").offset().top
    }, 500);
  });
  $(".doacoes-modal").click(function () {
    $(".menu_modal").slideToggle();
    $("html, body").animate({
      scrollTop: $("#doacoes").offset().top
    }, 500);
  });
  $(".interessado-modal").click(function () {
    $(".menu_modal").slideToggle();
    $("html, body").animate({
      scrollTop: $("#interessado").offset().top
    }, 500);
  });
  $(".contato-modal").click(function () {
    $(".menu_modal").slideToggle();
    $("html, body").animate({
      scrollTop: $("#contato").offset().top
    }, 500);
  });
});