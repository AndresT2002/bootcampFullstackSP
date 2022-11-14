package talleUno;
import java.util.*;  
public class Challenge1 {
	
	public String typeString(String tipo) {
		
		String stringValue; //Declaro string  a retornar
		
		if(tipo.equals("Tipo A")){ //Valido tipo de parametro recibido
			stringValue=randomString("54"); // Como es A, debe empezar con "54", asigno el valor retornado por randomString a la variable stringValue
		}else if (tipo.equals("Tipo B")){// Como es B, debe empezar con "08", asigno el valor retornado por randomString a la variable stringValue
			stringValue=randomString("08");
		}else {
			return "El tipo ingresado no existe"; //Si no se cumple que sea "Tipo A" o "Tipo B", retornar que el dato no existe
		}
		
		return stringValue; //Retorno string final
	}
	
	public String randomString(String strInicial) {
		
				
		Random randomNumber = new Random();//Objeto tipo random para escoger numero al azar
	    String numero = String.valueOf(randomNumber.nextInt(99999999));//Obtengo número al azar de 8 dígitos
	    strInicial=strInicial+numero;//Concateno el string anterior con el numero parseado a string actual
	    
	    
		return strInicial; //Retorno el string modificado con todos los números
	}
	
	
	public boolean containsValue(String value, List<String> list) {
		
		return !(list.stream().anyMatch(st ->  value.equals(st) ));
		
	
	}
	
	public static void main (String[] args) {
		Challenge1 prueba= new Challenge1();//Objeto para hacer prueba
		
		Scanner sc= new Scanner(System.in); //Scanner para leer datos ingresados por el  usuario 
		System.out.print("Escriba el tipo de string para punto 1 (Tipo A o Tipo B): ");  
		String str= sc.nextLine();
		sc.close();
		String value= prueba.typeString(str); //Retorna string de acuerdo a parametro ingresado por el usuario
		System.out.print(value+"\n"); //Imprimo value de "Tipo B"
		List<String> list = Arrays.asList("Apple", "Orange", "Banana");//Array de prueba
	    System.out.print(prueba.containsValue("Banana",list)); //Prueba de funcion containsValue
	    
	}
	
		
	
}
