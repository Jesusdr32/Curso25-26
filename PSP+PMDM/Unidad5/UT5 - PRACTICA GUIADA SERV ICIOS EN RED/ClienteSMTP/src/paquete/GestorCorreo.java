package paquete;

import java.util.Properties;
import java.util.Scanner;

import jakarta.mail.Authenticator;
import jakarta.mail.Message;
import jakarta.mail.PasswordAuthentication;
import jakarta.mail.Session;
import jakarta.mail.Transport;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;

public class GestorCorreo {

	static final String REMITENTE = "da2d1e.2024@gmail.com";
	static final String PASSWD = "nuzw uevk dwym pxbu";
	
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Destinatario: ");
		String destinatario = sc.nextLine();
		
		System.out.println("Asunto: ");
		String asunto = sc.nextLine();
		
		System.out.println("Mensaje: ");
		String mensaje = sc.nextLine();
		
		enviarCorreo(destinatario, asunto, mensaje);
		
		sc.close();
	}
	
	public static Session crearSesion() {
		Properties props = new Properties();
		
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.port", "587");
		props.put("mail.smtp.ssl.trust", "smtp.gmail.com");
		
		Session session = Session.getInstance(props, new Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(REMITENTE, PASSWD);
			}
		});
		
		return session;
	}
	
	public static void enviarCorreo(String destinatario, String asunto, String texto) {
		try {
			Session session = crearSesion();
			
			Message message = new MimeMessage(session);
			message.setFrom(new InternetAddress(REMITENTE));
			message.setRecipient(Message.RecipientType.TO, new InternetAddress(destinatario));
			message.setSubject(asunto);
			message.setContent(texto, "text/html");
			
			Transport.send(message);
			
			System.out.println("Correo enviado correctamente");
		} catch(Exception e) {
			e.printStackTrace();
		}
	}

}
