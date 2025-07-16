using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MesApiTooCheck.Models;

namespace MesApiTooCheck.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApiItemsController : ControllerBase
    {
        private readonly ApiDbContext _context;

        public ApiItemsController(ApiDbContext context)
        {
            _context = context;
        }

        // GET: api/ApiItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ApiItem>>> GetApiItems()
        {
            return await _context.ApiItems.ToListAsync();
        }

        // GET: api/ApiItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ApiItem>> GetApiItem(long id)
        {
            var apiItem = await _context.ApiItems.FindAsync(id);

            if (apiItem == null)
            {
                return NotFound();
            }

            return apiItem;
        }

        // PUT: api/ApiItems/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutApiItem(long id, ApiItem apiItem)
        {
            if (id != apiItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(apiItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ApiItemExists(id))
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

        // POST: api/ApiItems
        [HttpPost]
        public async Task<ActionResult<ApiItem>> PostApiItem(ApiItem apiItem)
        {
            _context.ApiItems.Add(apiItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetApiItem), new { id = apiItem.Id }, apiItem);
        }

        // DELETE: api/ApiItems/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteApiItem(long id)
        {
            var apiItem = await _context.ApiItems.FindAsync(id);
            if (apiItem == null)
            {
                return NotFound();
            }

            _context.ApiItems.Remove(apiItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ApiItemExists(long id)
        {
            return _context.ApiItems.Any(e => e.Id == id);
        }
    }
}