using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MesApiTooCheck.Models;

namespace MesApiTooCheck.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestDataController : ControllerBase
    {
        private readonly ApiDbContext _context;

        public TestDataController(ApiDbContext context)
        {
            _context = context;
        }

        // GET: api/TestData
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TestData>>> GetTestData()
        {
            return await _context.TestData.ToListAsync();
        }

        // GET: api/TestData/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TestData>> GetTestData(long id)
        {
            var testData = await _context.TestData.FindAsync(id);

            if (testData == null)
            {
                return NotFound();
            }

            return testData;
        }

        // PUT: api/TestData/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTestData(long id, TestData testData)
        {
            if (id != testData.Id)
            {
                return BadRequest();
            }

            _context.Entry(testData).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TestDataExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/TestData
        [HttpPost]
        public async Task<ActionResult<TestData>> PostTestData(TestData testData)
        {
            _context.TestData.Add(testData);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetTestData), new { id = testData.Id }, testData);
        }

        // DELETE: api/TestData/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTestData(long id)
        {
            var testData = await _context.TestData.FindAsync(id);
            if (testData == null)
            {
                return NotFound();
            }

            _context.TestData.Remove(testData);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TestDataExists(long id)
        {
            return _context.TestData.Any(e => e.Id == id);
        }
    }
}