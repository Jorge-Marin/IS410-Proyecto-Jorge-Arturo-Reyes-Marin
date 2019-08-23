# -*- coding: utf-8 -*-
from lista import *
class Folder:
	def __init__(self,valor):
		self.valor = valor
		self.hijos =  Lista() # []

	def getValor(self):
		return self.valor
	def setValor(self,valor):
		self.valor = valor
