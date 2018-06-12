using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularCat.Models
{
    public class SeedDB
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new PersonContext(serviceProvider.GetRequiredService<DbContextOptions<PersonContext>>()))
            {
                //test
                Console.WriteLine(context.Persons.Any());

                if (context.Persons.Any())
                    return;

                context.Persons.AddRange(
                    new Person
                    {
                        FName = "asd",
                        LName = "dsdsd",
                        Id = 0
                    }

                    );


            }
        }
    }
}
