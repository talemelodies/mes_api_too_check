using Microsoft.EntityFrameworkCore;

namespace MesApiTooCheck.Models
{
    public class ApiDbContext : DbContext
    {
        public ApiDbContext(DbContextOptions<ApiDbContext> options)
            : base(options)
        {
        }

        public DbSet<ApiItem> ApiItems { get; set; } = null!;
        public DbSet<TestData> TestData { get; set; } = null!;
        public DbSet<TestLog> TestLogs { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ApiItem>().Property(e => e.Id).ValueGeneratedOnAdd();
            modelBuilder.Entity<TestData>().Property(e => e.Id).ValueGeneratedOnAdd();
            modelBuilder.Entity<TestLog>().Property(e => e.Id).ValueGeneratedOnAdd();
        }
    }
}