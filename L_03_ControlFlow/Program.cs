// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");
 Console.Write("Please enter your age: ");
        string input = Console.ReadLine();
        int age = Convert.ToInt32(input);

        if (age < 13)
        {
            Console.WriteLine("You are a child.");
        }
        else if (age >= 13 && age < 20)
        {
            Console.WriteLine("You are a teenager.");
        }
        else if (age >= 20 && age < 65)
        {
            Console.WriteLine("You are an adult.");
        }
        else
        {
            Console.WriteLine("You are a senior.");
        }