---
layout: post
title:  "Una Guía para aprender a crear aplicaciones web modernas con Ruby
on Rails y Ember.js (Parte 1)"
author: Luis Mendoza
date:   2016-01-15 19:00:00 -0600
categories: es
---

Es difícil darse cuenta qué rápido se mueve el mundo de la tecnología. Para los que nos dedicamos —o queremos dedicar— a esto de la <i>programación</i>. Puede llegar a ser una tarea arbumadora entender qué lenguajes y frameworks aprender. Yo pasé por ahí. La realidad es que existe un mundo increíble de documentación y conocimiento listo para ser consumido, pero saber por dónde empezar es como empezar a aprender otro idioma.

Hay que meterse en un mundo lleno de git, GET, POST, jQuery, AJAX, SaSS, SQL, NoSQl, REST, foo, baz, var y quien sabe que otras palabras. También hay palabras como sistemas de integración continua, pruebas unitarias y de integración, control de versiones... Y un millón y medio de términos que hay que entender en algún momento para ser un profesional del desarrollo de aplicaciones web y/o móviles. Y a eso se le tiene que agregar la de por sí compleja tarea de programar>.

Cuando la gente me pregunta qué lenguaje les recomiendo para aprender a programar nunca tengo la respuesta correcta. Y esta guía no se trata de contestar esa pregunta. Aquí, la idea es aprender cuales son los componentes necesarios para crear sistemas web modernos y utilizar herramientas que cumplen con estos requerimientos. Por sistemas web modernos a aplicaciones cuya infraestructura es similar a lo que hacen las empresas más exitosas de tecnología. Me refiero a empresas como Google, Facebook, Twitter, Dropbox, Slack, Spotify, etc...

Las herremientas que vamos a utilizar son <i>frameworks</i>. Librerías de código que simplifican el proceso de desarrollo y abstraen las tareas repetitivas y código base que todas las aplicaciones requieren. Pero ese es solamente un beneficio agregado de utilizar un <i>framework</i>. La ventaja principal y razón de ser de un <i>framework</i> es el uso de <i>patrones de diseño</i>.

Estos últimos no son formas de programar o funciones de los lenguajes de programación, son más bien la manera en que se piensa como interactúan las partes del código.

En esta guía se utilizaran dos <i>frameworks</i>:

* #####Ruby on Rails:
Escrito en Ruby y considerado como uno de los padres de los <i>frameworks</i> web. Con éste se desarrolló la versión inicial de Twitter y es utilizado en empresas como Github y Airbnb. Lo utilizaremos para construir el API (término que será explicado en un momento) de nuestro aplicación.

* #####Ember.js:
Escrito en JavaScript, es un <i>framework</i> para construir apliciones web de lado del cliente, <i>i.e.</i> que se ejecutan en el navegador del usuario. Este tipo de aplicaciones son llamdas <i>Single Page Applications</i>. Un ejemplo de estas es la página web de Netflix o el player web de Spotify.
