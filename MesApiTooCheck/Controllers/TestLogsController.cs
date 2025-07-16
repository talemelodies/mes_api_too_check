using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MesApiTooCheck.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MesApiTooCheck.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestLogsController : ControllerBase
    {
        private readonly ApiDbContext _context;

        public TestLogsController(ApiDbContext context)
        {
            _context = context;
        }

        // GET: api/TestLogs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TestLog>>> GetTestLogs()
        {
            return await _context.TestLogs.OrderByDescending(t => t.TestTimestamp).ToListAsync();
        }

        // GET: api/TestLogs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TestLog>> GetTestLog(long id)
        {
            var testLog = await _context.TestLogs.FindAsync(id);

            if (testLog == null)
            {
                return NotFound();
            }

            return testLog;
        }
    }
}