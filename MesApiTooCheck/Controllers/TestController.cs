using Microsoft.AspNetCore.Mvc;
using MesApiTooCheck.Models;
using MesApiTooCheck.Services;
using System.Threading.Tasks;

namespace MesApiTooCheck.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        private readonly ApiDbContext _context;
        private readonly ApiTestService _apiTestService;

        public TestController(ApiDbContext context, ApiTestService apiTestService)
        {
            _context = context;
            _apiTestService = apiTestService;
        }

        // POST: api/Test/5
        [HttpPost("{id}")]
        public async Task<IActionResult> TestApi(long id, [FromBody] long? testDataId)
        {
            var apiItem = await _context.ApiItems.FindAsync(id);
            if (apiItem == null)
            {
                return NotFound("API not found.");
            }

            TestData? testData = null;
            if (testDataId.HasValue)
            {
                testData = await _context.TestData.FindAsync(testDataId.Value);
                if (testData == null)
                {
                    return NotFound("Test data not found.");
                }
            }

            var response = await _apiTestService.TestApiAsync(apiItem, testData);

            var testLog = new TestLog
            {
                ApiItemId = apiItem.Id,
                TestTimestamp = DateTime.UtcNow,
                HttpStatusCode = (int)response.StatusCode,
                ResponseBody = await response.Content.ReadAsStringAsync()
            };

            _context.TestLogs.Add(testLog);
            await _context.SaveChangesAsync();

            return Ok(testLog);
        }
    }
}