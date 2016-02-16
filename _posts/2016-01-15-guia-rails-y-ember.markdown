---
layout: post
title:  "Una Guía para aprender a crear aplicaciones web modernas con Ruby
on Rails y Ember.js (Introducción)"
author: Luis Mendoza
date:   2016-01-15 19:00:00 -0600
categories: es
---

Es fácil darse cuenta lo rápido que se mueve el mundo de la tecnología. Todo el tiempo hay algo nuevo y mejor que lo anterior y constantemente nos adaptamos a nuevas maneras de utilizar, automatizar y crear con tecnología. Sin embargo, el cambio nunca es fácil y decidir tampoco.

Para los que nos dedicamos —o queremos dedicar— a esto de la <i>programación</i>, con tantos cambios y nuevas tendencias, escoger qué lenguajes y herramientas aprender puede llegar a ser una tarea abrumadora.

Yo también pasé por ahí.

Existe un mundo increíble de documentación y conocimiento listo para ser consumido, pero saber por dónde empezar es como empezar a aprender otro idioma.

Hay que meterse en un mundo lleno de *git, GET, POST, jQuery, AJAX, SaSS, SQL, NoSQl, REST, foo, baz, var* y quien sabe que otras palabras. Un millón y medio de términos que hay que entender en algún momento para ser un profesional del desarrollo de aplicaciones web y/o móviles. Y a eso, se le tiene que agregar la de por sí compleja tarea de programar.

Cuando la gente me pregunta qué lenguaje les recomiendo para aprender a programar nunca tengo la respuesta correcta. Y esta guía no se trata de contestar esa pregunta. Aquí, la idea es aprender cuales son los componentes necesarios para crear sistemas web modernos y las herramientas de trabajo que se utilizan en el proceso.

Con sistemas web modernos me refiero a aplicaciones cuya infraestructura es similar a lo que hacen las empresas de tecnología más exitosas. Empresas como Google, Facebook, Twitter, Dropbox, Slack, Spotify, etc...

Las herramientas que vamos a utilizar son <a href="https://es.wikipedia.org/wiki/Ruby_on_Rails"><i>frameworks</i></a>. Librerías de código que simplifican el proceso de desarrollo y abstraen las tareas repetitivas y código base que todas las aplicaciones requieren. Pero ese es solamente un beneficio agregado de utilizar un <i>framework</i>. La ventaja principal y razón de ser de un <i>framework</i> es el uso de <i>patrones de diseño</i>.

Estos últimos no son formas de programar o funciones de los lenguajes de programación. Son, más bien, la manera en que se piensa y estructura la interacción entre las partes de un sistema. Definen la manera de acomodar y esribir código. También se especifican la separación de responsabilidades y abstracción de tareas que realiza cada parte del código.

En esta guía se utilizarán dos <i>frameworks</i>:

* #####Ruby on Rails:
Escrito en [Ruby](https://es.wikipedia.org/wiki/Ruby) y considerado como uno de los padres de los <i>frameworks</i> web. Con éste se desarrolló la versión inicial de Twitter y es utilizado en empresas como Github y Airbnb. Lo utilizaremos para construir el [API](https://en.wikipedia.org/wiki/Application_programming_interface) (término que será explicado más tarde) de nuestro aplicación. Éste será el <i>backend</i> de la aplicación.

* #####Ember.js:
Escrito en [JavaScript](https://es.wikipedia.org/wiki/JavaScript), es un <i>framework</i> para construir apliciones web de lado del cliente, <i>i.e.</i> que se ejecutan en el navegador del usuario. Este tipo de aplicaciones son llamadas <a href="https://es.wikipedia.org/wiki/Single-page_application"><i>Single Page Applications</i></a>. Un ejemplo de estas es la página web de Netflix o el reproductor web de Spotify. Éste será el <i>frontend</i> de la aplicación.

####¿A quién va dirigida esta guía?

El contenido de estos posts no está dirigido a quienes están aprendiendo a programar. Está, más bien, pensado para alguien que tiene nociones generales de programación y conoce principios de [programación orientada a objetos](https://es.wikipedia.org/wiki/Programaci%C3%B3n_orientada_a_objetos) y el funcionamiento de por lo menos algún lenguaje de [scripting](https://en.wikipedia.org/wiki/Scripting_language) (Python, PHP, Perl, Ruby, JavaScript, etc).

El objetivo es aprender los conceptos claves del desarrollo web moderno a través de construir una aplicación. Por lo que no me dentendré a explicar funciones específicas de los lenguajes que utilizaremos. Esto no debe ser un inconveniente o problema para cualquiera que pueda programar un algoritmo sencillo con un lenguaje como Java, C#, C++, Python o cualquier otro lenguaje de alto nivel.

Al final de esta serie de posts será más fácil entender cuáles son las herramientas que hay que aprender y utilizar para construir aplicaciones web modernas.

Esta guía será publicada en las siguientes partes:

* Parte 1: La arquitectura de una aplicación web moderna
* Parte 2: Setup para desarrollar aplicaciones con Ruby on Rails y Ember.js
* Parte 3: Desarrollo de un API con Ruby on Rails
* Parte 4: Desarrollo de un SPA con Ember.js y ember-cli
* Parte 5: Despliegue de aplicaciones web usando Heroku y AWS
