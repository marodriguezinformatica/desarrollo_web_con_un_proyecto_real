package beans;

public class Usuario {
	
	private String username;
	private String contrasena;
	private String nombre;
	private String apellidos;
	private String email;
	private double saldo;
	private boolean premium;
	
	public Usuario(String username, String contrasena, String nombre, String apellidos, String email, double saldo,
			boolean premium) {
		super();
		this.username = username;
		this.contrasena = contrasena;
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.email = email;
		this.saldo = saldo;
		this.premium = premium;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getContrasena() {
		return contrasena;
	}

	public void setContrasena(String contrasena) {
		this.contrasena = contrasena;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellidos() {
		return apellidos;
	}

	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public double getSaldo() {
		return saldo;
	}

	public void setSaldo(double saldo) {
		this.saldo = saldo;
	}

	public boolean isPremium() {
		return premium;
	}

	public void setPremium(boolean premium) {
		this.premium = premium;
	}

	@Override
	public String toString() {
		return "Usuario [username=" + username + ", contrasena=" + contrasena + ", nombre=" + nombre + ", apellidos="
				+ apellidos + ", email=" + email + ", saldo=" + saldo + ", premium=" + premium + "]";
	}
	
	

}
