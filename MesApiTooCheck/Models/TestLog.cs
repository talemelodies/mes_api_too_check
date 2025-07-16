using System;

namespace MesApiTooCheck.Models
{
    public class TestLog
    {
        public long Id { get; set; }
        public long ApiItemId { get; set; }
        public ApiItem? ApiItem { get; set; }
        public DateTime TestTimestamp { get; set; }
        public int HttpStatusCode { get; set; }
        public string? ResponseBody { get; set; }
        public string? ErrorMessage { get; set; }
    }
}