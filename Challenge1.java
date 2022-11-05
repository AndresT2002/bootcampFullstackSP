package talleUno;
import java.util.Arrays;
import java.util.List;
import java.util.Random;
public class Challenge1 {
	
	public String typeString(String tipo) {
		
		String stringValue; //Declaro string  a retornar
		
		if(tipo ==  "Tipo A") { //Valido tipo de parametro recibido
			stringValue=randomString("54"); // Como es A, debe empezar con "54", asigno el valor retornado por randomString a la variable stringValue
		}else if (tipo == "Tipo B") {
			stringValue=randomString("08");
		}else {
			return "El tipo ingresado no existe"; //Si no se cumple que sea "Tipo A" o "Tipo B", retornar que el dato no existe
		}
		
		return stringValue; //Retorno string final
	}
	
	public String randomString(String strInicial) {
		
		Random randomNumber= new Random(); //Objeto tipo random para escoger numero al azar
		String numero; //Variable donde guardo el numero aleatorio a concatenar a mi numero strInicial de acuerdo al tipo
		
		for(int i=0 ;i<8;i++) {
			numero =  String.valueOf(randomNumber.nextInt(10)); //Obtengo número al azar entre 0 y 9
			strInicial=strInicial+numero; //Concateno el string anterior con el numero parseado a string actual
		}
		
		return strInicial; //Retorno el string modificado con todos los números
	}
	
	
	public boolean containsValue(String value, List<String> list) {
		
		
		if(list.stream().anyMatch(st ->  value ==  st )) { //Si se cumple que algún elemento de list es igual a value, retorno false
			return false;
		}else {
			return true;
		}
		
		
	}
	
	public static void main (String[] args) {
		Challenge1 prueba= new Challenge1();//Objeto para hacer prueba
		String value= prueba.typeString("Tipo B"); //Retorna string de acuerdo a parametro
		System.out.print(value); //Imprimo value de "Tipo B"
		List<String> list = Arrays.asList("Apple", "Orange", "Banana");//Array de prueba
	    System.out.print(prueba.containsValue("Ore",list)); //Prueba de funcion containsValue
	}
	
		
	
}
