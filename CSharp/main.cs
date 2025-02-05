using System;

namespace My_Awesome_Program
{
  class Program
  {
    static void Main(string[] args)
    {
      //Change the appearance
      Console.Title = "Skynet";
      Console.ForegroundColor = ConsoleColor.Green;
      Console.WindowHeight = 40;

      // Get a conversation going.
      Console.WriteLine("Hello, what's your name?");

      Console.ReadLine();

      Console.WriteLine("My name is Zack Yuan, and I'm from Tulsa, Oklahoma.");
      Console.WriteLine("Where are you from?");

      Console.ReadLine();

      Console.WriteLine("Thats awesome! I've always wanted to visit there.")
      Console.ReadKey();
    }
  }
}
