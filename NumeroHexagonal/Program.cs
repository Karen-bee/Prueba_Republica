using System;
using System.Linq.Expressions;

class Program
{
    static void Main(string[] args)
    {
        try
        {
            Console.WriteLine("Para ver el ejercicio numero hexadecimal centrado digite 1 o " + "\n" +
                "si desea ver el ejercicio descendiente capicúa digite 2");
            int ejercicio = int.Parse(Console.ReadLine());

            switch (ejercicio)
            {
                case 1:
                    Ejercicio1();
                    break;
                case 2:
                    Ejercicio2();
                    break;
                default:
                    Console.WriteLine("Opción inválida. Por favor, ingrese 1 o 2.");
                    break;
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine("Digito un numero distinto a (1 o 2)" + ex.Message);
        }


    }


    // Main Ejercicio 1 -- Numero hexagonal 
    static void Ejercicio1()
    {
        try
        {
            Console.WriteLine("Digite un numero entero:");
            int numeroHexagonal;
            if (!int.TryParse(Console.ReadLine(), out numeroHexagonal))
            {
                Console.WriteLine("No se ha ingresado un número válido.");
                return;
            }

            if (!EsNumeroHexagonalCentrado(numeroHexagonal))
            {
                Console.WriteLine("El número ingresado no es un número hexagonal centrado.");
                return;
            }

            string[] resultado = GenerateHexagonalNumber(numeroHexagonal);

            // Imprimir el número hexagonal
            foreach (string line in resultado)
            {
                Console.WriteLine(line);
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine("Se ha producido una excepción: " + ex.Message);
        }
    }

    static bool EsNumeroHexagonalCentrado(int n)
    {
        int sum = 1;
        int i = 1;

        while (sum < n)
        {
            sum += 6 * i;
            i++;
        }

        return sum == n;
    }

    static string[] GenerateHexagonalNumber(int size)
    {
        string[] hexagonalNumber = new string[size * 2 - 1];

        for (int i = 0; i < size; i++)
        {
            string line = new string(' ', size - i - 1);

            for (int j = 0; j < size + i; j++)
            {
                line += "° ";
            }

            hexagonalNumber[i] = line.TrimEnd();
            hexagonalNumber[size * 2 - 2 - i] = line.TrimEnd();
        }

        return hexagonalNumber;
    }

    // Ejercicio 2 -- Capicua
    static void Ejercicio2()
    {
        Console.WriteLine("Digite un numero entero:");
        int capicua = int.Parse(Console.ReadLine());
        bool resul = EsCapicua(capicua);
        Console.WriteLine(resul);

    }

    public static bool EsCapicua(int numero)
    {
        if (EsCapicua(numero.ToString()))
        {
            return true;
        }

        if (numero < 100)
        {
            return false;
        }

        int descendiente = numero / 10;
        return EsCapicua(descendiente);
    }

    public static bool EsCapicua(string texto)
    {
        int longitud = texto.Length;
        for (int i = 0; i < longitud / 2; i++)
        {
            if (texto[i] != texto[longitud - i - 1])
            {
                return false;
            }
        }

        return true;
    }

}


