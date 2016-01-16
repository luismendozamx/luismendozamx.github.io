/*
 * Scripts for blog.mendoza.io
 * Author: Luis Mendoza (@luismendozamx)
 * License: MIT
 */

$(document).ready(function() {
  targetLinks();
});

function targetLinks() {
  $('article a').attr('target', '_blank');
}
