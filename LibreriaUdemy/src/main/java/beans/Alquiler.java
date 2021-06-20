package beans;

import java.sql.Date;

public class Alquiler {
	
	private int id;
	private String titulo;
	private Date fechaAlquiler;
	private boolean novedad;
	private String genero;
	
	public Alquiler(int id, String titulo, Date fechaAlquiler, boolean novedad, String genero) {
		super();
		this.id = id;
		this.titulo = titulo;
		this.fechaAlquiler = fechaAlquiler;
		this.novedad = novedad;
		this.genero = genero;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public Date getFechaAlquiler() {
		return fechaAlquiler;
	}

	public void setFechaAlquiler(Date fechaAlquiler) {
		this.fechaAlquiler = fechaAlquiler;
	}

	public boolean isNovedad() {
		return novedad;
	}

	public void setNovedad(boolean novedad) {
		this.novedad = novedad;
	}

	public String getGenero() {
		return genero;
	}

	public void setGenero(String genero) {
		this.genero = genero;
	}

	@Override
	public String toString() {
		return "Alquiler [id=" + id + ", titulo=" + titulo + ", fechaAlquiler=" + fechaAlquiler + ", novedad="
				+ novedad + ", genero=" + genero + "]";
	}
	
	
	
	

}
