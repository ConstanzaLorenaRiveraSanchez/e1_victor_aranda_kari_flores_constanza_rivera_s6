from django.shortcuts import render

# Create your views here.
def inicio(request):
    return render (request, 'index.html')

def gatos(request):
    return render (request, 'gatos.html')

def perros(request):
    return render (request, 'Perros.html')

def inicioSesion(request):
    return render (request, 'inicioSesion.html')

def carrito(request):
    return render (request, 'Carrito.html')

def registro(request):
    return render (request, 'RegistroUsuario.html')

def recuperarContrasena(request):
    return render (request, 'recuperarContra.html')

def modiPerfil(request):
    return render (request, 'modiPerfil.html')