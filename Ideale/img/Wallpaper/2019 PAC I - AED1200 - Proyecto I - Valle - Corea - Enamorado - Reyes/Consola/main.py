#-*- coding: utf-8 -*-
from core.consola import *

consola = Consola()
print ("\t\t///////////////////////////////////////////////////\n" +
       "\t\t//                   Proyecto #1                 //\n"
       "\t\t//          Simulación de Consola Linux          //\n" +
       "\t\t//               Versión Beta 1.0                //\n" +
       "\t\t//            Año de Publicacion:2019            //\n" +
       "\t\t//   Autores: Eduardo Valle    20141000852       //\n" +
       "\t\t//            Ambar Corea      20131001415       //\n" +
       "\t\t//            David Enamorado  20151003893       //\n" +
       "\t\t//            Jorge Marín      20171003167       //\n" +
       "\t\t// Descripción: Programa escrito en lenguaje     //\n" +
       "\t\t//       Python 2.7 que simula algunos comandos  //\n" +
       "\t\t//       específicos de Ubuntu Linux             //\n" +
       "\t\t///////////////////////////////////////////////////\n")
consola.procesarComandos(raw_input("\t/ ~$ "))