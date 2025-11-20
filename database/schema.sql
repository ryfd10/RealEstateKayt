CREATE TABLE Properties (
    Id INT PRIMARY KEY IDENTITY,
    Address NVARCHAR(255) NOT NULL,
    PricePerNight FLOAT NOT NULL,
    IsAvailable BIT NOT NULL,
    ImageUrl NVARCHAR(500),
    Description NVARCHAR(MAX)
);
