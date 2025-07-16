using MesApiTooCheck.Models;
using Microsoft.EntityFrameworkCore;

namespace MesApiTooCheck;

public static class DataSeeder
{
    public static void Seed(IApplicationBuilder app)
    {
        using var scope = app.ApplicationServices.CreateScope();
        var context = scope.ServiceProvider.GetRequiredService<ApiDbContext>();
        
        if (context.Database.EnsureCreated())
        {
            if (!context.ApiItems.Any())
            {
                context.ApiItems.Add(new ApiItem { Name = "Sample GET API", Url = "https://jsonplaceholder.typicode.com/todos/1", HttpMethod = "GET", Status = "New" });
                context.SaveChanges();
            }
        }
    }
}