namespace MesApiTooCheck.Models
{
    public class ApiItem
    {
        public long Id { get; set; }
        public string? Name { get; set; }
        public string? Url { get; set; }
        public string? HttpMethod { get; set; } // e.g., "GET", "POST"
        public string? Status { get; set; } // e.g., "Healthy", "Unhealthy", "Unknown"
    }
}