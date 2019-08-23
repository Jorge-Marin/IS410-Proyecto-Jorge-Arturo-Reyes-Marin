#from folder import *
from folder import *
from file import *
import sys

class Lista:
	def __init__(self):
		self.cabeza = None 
		self.tamano = 0
	def obtenerPrimero(self):
		return self.cabeza
	def add(self,item):
		if self.cabeza is None:
			self.cabeza = item
			self.tamano += 1
		else:
			temp = item
			temp.siguiente = self.cabeza
			self.cabeza = temp
			self.tamano += 1

	def pop(self):
		pass
	def eliminard(self,valor):
		pass

	def lsHorizontal(self):
		actualHorizontal = self.cabeza
		while actualHorizontal:
			sys.stdout.write("\t\t" + actualHorizontal.valor.valor + "\t") 
			actualHorizontal = actualHorizontal.getNext()
		print "\n"

	def lsVertical(self):
		actualVertical = self.cabeza
		while actualVertical:
			print ("\t\t" + actualVertical.valor.valor)  
			actualVertical = actualVertical.getNext()

	def cd(self,directorio):
		current = self.cabeza
		while current.valor.valor != directorio:
			current = current.getNext()
		return current

	def rm(self,item):
		last = None
		current = self.cabeza
		while current.valor.valor != item:
			last = current
			current = current.getNext()
		if (last == None):
			if current.siguiente:
				self.cabeza = current.siguiente
			else:
				self.cabeza = None	
		elif current.siguiente is None:
			#self.cabeza = current.siguiente
			last.siguiente = None
		else:
			last.siguiente = current.siguiente
			current.siguiente = None	
	def rmr(self,item):
		last = None
		current = self.cabeza
		while current.valor.valor != item:
			last = current
			current = current.getNext()
		if not isinstance(current.valor, File):
			last.siguiente = current.siguiente
			current.siguiente = None
		
	def empty(self, node):
		if node.getNext() is None:
			return self.cabeza == None

	def fd(self,item):
		current = self.cabeza
		while current != None:
			if current.valor.valor == item:
				return current
			current = current.getNext()
	
	

		
			
		
			 
		


