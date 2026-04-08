using Microsoft.EntityFrameworkCore;
using CustomerCrudApi.Models;

namespace CustomerCrudApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Customer> Customers { get; set; }
    }
}
