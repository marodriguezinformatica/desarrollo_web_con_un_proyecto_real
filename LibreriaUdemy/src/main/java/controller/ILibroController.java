package controller;

public interface ILibroController {
	
	
	public String listar(boolean ordenar, String orden);
	
	public String alquilar(int id, String username);
	
	public String modificar(int id);
	
	public String devolver(int id, String username);
	
	public String sumarCantidad(int id);

}
