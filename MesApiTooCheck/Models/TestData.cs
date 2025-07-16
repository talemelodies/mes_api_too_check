namespace MesApiTooCheck.Models
{
    public class TestData
    {
        public long Id { get; set; }
        public string? Name { get; set; }
        public string? Content { get; set; } // Can be JSON or XML
        public string? ContentType { get; set; } // "application/json" or "application/xml"
        public long ApiItemId { get; set; }
        public ApiItem? ApiItem { get; set; }
    }
}