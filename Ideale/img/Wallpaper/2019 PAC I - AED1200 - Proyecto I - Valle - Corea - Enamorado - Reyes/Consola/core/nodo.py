from core.folder import *
from core.file import *
class Node:
	def __init__(self,valor,padre=None,siguiente=None):
		self.padre = padre
		self.valor = valor
		self.siguiente = siguiente 

	def getValor(self):
		return self.valor

	def setValor(self,valor):
		self.valor = valor

	def add(self,item):
		if isinstance(self.valor, Folder):
			hijolista = self.valor.hijos
			hijolista.add(item) #el valor node

	def getNext(self):
		return self.siguiente

	def setNext(self,valor):
		self.siguiente = valor
		
	def setPadre(self,nuevoPadre):
		self.padre = nuevoPadre










		
