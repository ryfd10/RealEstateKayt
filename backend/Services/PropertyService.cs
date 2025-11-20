// PropertyService.cs
using RealEstateKayt.Models;

namespace RealEstateKayt.Services;

public class PropertyService
{
    private List<Property> _properties = new();

    public IEnumerable<Property> GetAll() => _properties;

    public void Add(Property property) => _properties.Add(property);

    // Search properties by address or description
    public IEnumerable<Property> Search(string term)
    {
        return _properties
            .Where(p =>
                (!string.IsNullOrWhiteSpace(term)) &&
                (p.Address.Contains(term, StringComparison.OrdinalIgnoreCase) ||
                 p.Description.Contains(term, StringComparison.OrdinalIgnoreCase)));
    }

    // Filter by availability
    public IEnumerable<Property> FilterAvailable(bool onlyAvailable)
    {
        return onlyAvailable ? _properties.Where(p => p.IsAvailable) : _properties;
    }

    // Sort by price
    public IEnumerable<Property> SortByPrice(bool descending = false)
    {
        return descending
            ? _properties.OrderByDescending(p => p.PricePerNight)
            : _properties.OrderBy(p => p.PricePerNight);
    }

    // Combined query: search + filter + sort
    public IEnumerable<Property> Query(string? searchTerm, bool onlyAvailable, bool sortDesc)
    {
        var result = _properties.AsEnumerable();

        if (!string.IsNullOrWhiteSpace(searchTerm))
            result = result.Where(p =>
                p.Address.Contains(searchTerm, StringComparison.OrdinalIgnoreCase) ||
                p.Description.Contains(searchTerm, StringComparison.OrdinalIgnoreCase));

        if (onlyAvailable)
            result = result.Where(p => p.IsAvailable);

        result = sortDesc
            ? result.OrderByDescending(p => p.PricePerNight)
            : result.OrderBy(p => p.PricePerNight);

        return result;
    }
}
