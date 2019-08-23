# -*- coding: utf-8 -*-
from nodo import *
from folder import *
from file import * 
from lista import *
import json
class Arbol:
    def __init__(self):
        self.raiz = None
        self.directorioActual = "/" #Intancia Nodo Raiz
        self.pwdNode = None # Guarda la Instancia del Nodo Actual
        self.pwdNodefind = None
        self.rutaOrigenPartes = None
        self.rutaDestinoPartes = None
        self.rutaOrigenPwd = None
        self.rutaDestinoPwd = None
        self.Diccionario = None
    #Para iniciar la raiz del arbol.

    def pwd(self):
        print ("\t\t" + "Directorio Actual: " + self.directorioActual)
   
    def cd(self,directorio): 
        try:
            if isinstance(self.pwdNode.valor.hijos.cd(directorio).valor,Folder):
                self.directorioActual = self.directorioActual + str(directorio) + "/"
                self.pwdNode = self.pwdNode.valor.hijos.cd(directorio)

        except Exception:
            print "No se encontro la ruta"

        return self.directorioActual
       
    def cdd(self):
        self.cdlast = self.directorioActual.split("/")
        self.cdlast.pop(0)
        self.cdlast.pop(-1)
        if self.cdlast == []:
            print ("\t\t"+"Error: Usted se encuentra en la raiz...")
        else:
            self.pwdNode = self.pwdNode.padre
            self.cdlast.pop()
            if len(self.cdlast)>=1:
                self.directorioActual = ("/%s"+"/")%("/".join(self.cdlast))
            else:
                self.directorioActual = ("/%s")%("/".join(self.cdlast))
        return self.directorioActual

    def lsHorizontal(self):
        self.pwdNode.valor.hijos.lsHorizontal()

    def lsVertical(self):
        self.pwdNode.valor.hijos.lsVertical()

    def touch(self, archivo):
        self.pwdNode.add(Node(File(archivo),self.pwdNode))

    def mkdir(self,folder):
    	self.pwdNode.add(Node(Folder(folder),self.pwdNode))

    def mv(self,rutaOrigen,rutaDestino):
        self.rutaOrigenPartes = rutaOrigen.split("/")
        self.rutaDestinoPartes = rutaDestino.split("/")
        self.nodoBorrar = None
        self.rutaOrigenPwd = self.pwdNode
        self.rutaDestinoPwd = self.pwdNode
        for i in range(len(self.rutaOrigenPartes)):
            self.nodoBorrar = self.rutaOrigenPwd
            self.rutaOrigenPwd = self.rutaOrigenPwd.valor.hijos.cd(self.rutaOrigenPartes[i])
        for j in range(len(self.rutaDestinoPartes)):
            if isinstance(self.rutaDestinoPwd.valor.hijos.cd(self.rutaDestinoPartes[j]).valor, Folder):
                self.rutaDestinoPwd = self.rutaDestinoPwd.valor.hijos.cd(self.rutaDestinoPartes[j])
        self.nodoBorrar.valor.hijos.rm(self.rutaOrigenPwd.valor.getValor())
        self.rutaOrigenPwd.setPadre(self.rutaDestinoPwd)
        self.rutaDestinoPwd.add(self.rutaOrigenPwd)

    def rm(self, item):
        if item != "/":
            self.pwdNode.valor.hijos.rm(item)
        else:
            print "\t\tNo se puede borrar la raiz"
    def rmr(self,item):
        if item != "/":
            self.pwdNode.valor.hijos.rmr(item)
        else:
            print "\t\tNo se puede borrar la raiz"
    def find(self,path):
        self.patharreglo = path.split("/")
        self.pwdNodefind = self.pwdNode
        for i in range(len(self.patharreglo)):
            if isinstance(self.pwdNodefind.valor.hijos.cd(self.patharreglo[i]).valor,Folder):
                self.pwdNodefind = self.pwdNodefind.valor.hijos.cd(self.patharreglo[i])
        print self.pwdNodefind.valor.hijos.lsVertical()
    
    def save(self):
        self.Diccionario = {'root':{"type":"Folder","name":self.raiz.valor.getValor(),"child":self.recorrerHijos(self.raiz)}}
        with open('rom/arbol.json','w') as f:
            f.write(json.dumps(self.Diccionario))
    def recorrerHijos(self,current): 
        lista = []
        temp = current.valor.hijos.cabeza
        if temp is not None:
            while temp:
                if isinstance(temp.valor, Folder):
                    lista.append({"type":"Folder","name":temp.valor.valor,"child":self.recorrerHijos(temp)})
                else:
                    lista.append({"type":"File","name":temp.valor.valor})
                temp = temp.getNext()
            return lista        
        else:
            return []
    def loadArbol(self):
        arbol = open("rom/arbol.json","r")
        self.Diccionario = json.load(arbol)
        arbol.close()
        if self.Diccionario is not None:
            self.raiz = Node(Folder(self.Diccionario["root"]["name"]))
            self.pwdNode = self.raiz
            #for i,v in self.Diccionario.iteritems():
             #   print i
              #  print v
               # print self.Diccionario[i]
            #self.recorrerDiccionario(self.Diccionario["root"]["child"])
        else:
            self.raiz = Node(Folder("/"))
            self.pwdNode = self.raiz
        #for key in self.Diccionario:
        #    print key, self.Diccionario[key]
    def recorrerDiccionario(self,currentDiccianrio):
        if currentDiccianrio["type"] == "Folder":
            self.mkdir(currentDiccianrio["name"])
            self.cd(currentDiccianrio["name"])
        else:
            self.touch(currentDiccianrio["name"])
