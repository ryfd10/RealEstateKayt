using System.Data.SqlClient;

namespace RealEstateKayt.Data;

public static class DbManager
{
    private const string ConnectionString = "Server=localhost;Database=RealEstateKaytDb;Trusted_Connection=True;";

    public static SqlConnection GetConnection()
    {
        return new SqlConnection(ConnectionString);
    }
}
