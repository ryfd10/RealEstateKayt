using Xunit;
using RealEstateKayt.Models;
using RealEstateKayt.Services;

public class PropertyServiceTests
{
    [Fact]
    public void CanAddProperty()
    {
        var service = new PropertyService();
        service.Add(new Property { Id = 1, Address = "Test", PricePerNight = 100, IsAvailable = true });
        Assert.Single(service.GetAll());
    }
}
