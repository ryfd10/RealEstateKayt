namespace RealEstateKayt.Models;

public class Property
{
    public int Id { get; set; }
    public string Address { get; set; }
    public double PricePerNight { get; set; }
    public bool IsAvailable { get; set; }

    // 🆕 שדות שהוספת:
    public string ImageUrl { get; set; }
    public string Description { get; set; }
}
