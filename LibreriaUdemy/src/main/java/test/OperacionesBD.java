package test;

import java.sql.ResultSet;
import java.sql.Statement;

import beans.Libro;
import connection.DBConnection;

public class OperacionesBD {

	public static void main(String[] args) {
		
		
		//actualizarLibro(1,"Histórica");
		listarLibro();

	}
	
	
	public static void actualizarLibro(int id, String genero) {
		
		DBConnection con = new DBConnection();
		String sql = "UPDATE libros SET genero = '" + genero + "' where id = " + id;
		
		try {
			Statement st = con.getConnection().createStatement();
			st.executeQuery(sql);
		}
		catch(Exception ex) {
			System.out.println(ex.getMessage());
		}
		finally {
			con.desconectar();
		}
		
	}
	
	public static void listarLibro() {
		
		DBConnection con = new DBConnection();
		String sql = "Select * from Libros";
		
		try {
			Statement st = con.getConnection().createStatement();
			ResultSet rs = st.executeQuery(sql);
			
			while(rs.next()) {
				int id = rs.getInt("id");
				String titulo = rs.getString("titulo");
				String genero = rs.getString("genero");
				String autor = rs.getString("autor");
				int copias = rs.getInt("copias");
				boolean novedad = rs.getBoolean("novedad");
				
				Libro libro = new Libro(id,titulo,genero,autor,copias,novedad);
				System.out.println(libro.toString());
			}
		}
		catch(Exception ex) {
			System.out.println(ex.getMessage());
		}
		finally {
			con.desconectar();
		}
	}
	
	

}
