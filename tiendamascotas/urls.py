from django.urls import path
from .views import inicio, gatos, perros, inicioSesion, carrito, registro, recuperarContrasena, modiPerfil

urlpatterns = [
    path('inicio/', inicio, name="inicio"),
    path('gatos/', gatos, name="gatos"),
    path('perros/', perros, name="perros"),
    path('inicioSesion/', inicioSesion, name="inicioSesion"),
    path('carrito/', carrito, name="carrito"),
    path('registro/', registro, name="registro"),
    path('recuperarContrasena/', recuperarContrasena, name="recuperarContrasena"),
    path('modiPerfil/', modiPerfil, name="modiPerfil")
]