package connection;

import java.sql.Connection;
import java.sql.DriverManager;

public class DBConnection {
	
	static String bd = "libreria_udemy";
	static String port = "3306";
	static String login = "root";
	static String password = "pass";
	//jdbc:mysql://ip:puerto/bd
	static String url = "jdbc:mysql://localhost:" + port + "/" + bd;
	
	Connection connection = null;
	
	public DBConnection() {
		
		try {
			Class.forName("org.mariadb.jdbc.Driver");
			connection = DriverManager.getConnection(url,login,password);
			
			if (connection == null) {
				System.out.println("La conexión a " + bd + " ha fallado");
			}
			else {
				System.out.println("La conexión a " + bd + " ha sido satisfactoria");
			}
		}
		catch(Exception ex) {
			System.out.println(ex.getMessage());
		}
		
	}
	
	public Connection getConnection() {
		return connection;
	}
	
	public void desconectar() {
		connection = null;
	}
	

}
