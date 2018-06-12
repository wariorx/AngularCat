using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace AngularCat.Models
{
    public static class PersonDB
    {
        public static List<Person> getPersons()
        {
            //SqlConnection sqlConnection1 = new SqlConnection("(localdb)\\ProjectsV13\\Persons");
            SqlConnection sqlConnection1 = new SqlConnection("Server=(localdb)\\ProjectsV13;Database=Persons;Trusted_Connection=True;MultipleActiveResultSets=true");
            SqlCommand cmd = new SqlCommand();
            SqlDataReader reader;

            cmd.CommandText = "SELECT * FROM Persons";
            cmd.CommandType = CommandType.Text;
            cmd.Connection = sqlConnection1;

            sqlConnection1.Open();

            reader = cmd.ExecuteReader();
            // Data is accessible through the DataReader object here.

            List<Person> personList = new List<Person>();

            if (reader.HasRows)
            {
                while (reader.Read())
                {
                    Person p = new Person();

                    p.Id = reader.GetInt32(0);
                    p.FName = reader.GetString(1);
                    p.LName = reader.GetString(2);

                    personList.Add(p);

                    System.Diagnostics.Debug.WriteLine("HAHAHA" + p);
                }
            }
            else
            {
                System.Diagnostics.Debug.WriteLine("No rows found.");
            }


            reader.Close();
            sqlConnection1.Close();

            return personList;
        }

        public static List<Person> getPersons(String query)
        {
            //SqlConnection sqlConnection1 = new SqlConnection("(localdb)\\ProjectsV13\\Persons");
            SqlConnection sqlConnection1 = new SqlConnection("Server=(localdb)\\ProjectsV13;Database=Persons;Trusted_Connection=True;MultipleActiveResultSets=true");
            SqlCommand cmd = new SqlCommand();
            SqlDataReader reader;

            cmd.CommandText = "SELECT * FROM Persons WHERE fName LIKE '%" + query + "%' OR lName LIKE '%" + query + "%' " ; //sql injections anyone?, but I had to
            cmd.CommandType = CommandType.Text;
            cmd.Connection = sqlConnection1;

            sqlConnection1.Open();

            reader = cmd.ExecuteReader();
            // Data is accessible through the DataReader object here.

            List<Person> personList = new List<Person>();

            if (reader.HasRows)
            {
                while (reader.Read())
                {
                    Person p = new Person();

                    p.Id = reader.GetInt32(0);
                    p.FName = reader.GetString(1);
                    p.LName = reader.GetString(2);

                    personList.Add(p);

                    System.Diagnostics.Debug.WriteLine("HAHAHA" + p);
                }
            }
            else
            {
                System.Diagnostics.Debug.WriteLine("No rows found.");
            }


            reader.Close();
            sqlConnection1.Close();

            return personList;
        }
    }
}
