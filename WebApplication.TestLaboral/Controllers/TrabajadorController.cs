using ClassLibrary.Servicios.Interfaces;
using ClassLibrary.Servicios.Modelos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;

namespace WebApplication.TestLaboral.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TrabajadorController : ControllerBase
    {
        private readonly ITrabajadorRepository _trabajadorRepository;

        private readonly ILogger<TrabajadorController> _logger;

        public TrabajadorController(ILogger<TrabajadorController> logger, ITrabajadorRepository trabajadorRepository)
        {
            _logger = logger;
            _trabajadorRepository = trabajadorRepository;
        }

        [HttpGet("Listar")]
        public ActionResult<TrabajadorRowModel> Get()
        {
            try
            {
                return Ok(_trabajadorRepository.ObtenerTrabajadores());
            }
            catch (Exception e)
            {
                _logger.LogError(e.Message);
                return BadRequest();
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<TrabajadorRowModel>>ObtenerPorId([FromRoute] int id)
        {
            try
            {
                var result = await _trabajadorRepository.ObtenerTrabajadoPorId(id);
                return Ok(result);
            }
            catch (Exception e)
            {
                _logger.LogError(e.Message);
                return BadRequest();
            }
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> Agregar([FromBody] TrabajadorCreateOrEditModel model)
        {
            try
            {
                return Ok(await _trabajadorRepository.AgregarTrabajador(model));
            }
            catch (Exception e)
            {
                _logger.LogError(e.Message);
                return BadRequest();
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Editar([FromRoute] int id, [FromBody] TrabajadorCreateOrEditModel model)
        {
            try
            {
                return Ok(await _trabajadorRepository.EditarTrabajador(id, model));
            }
            catch (Exception e)
            {
                _logger.LogError(e.Message);
                return BadRequest();
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Eliminar([FromRoute] int id)
        {
            try
            {
                await _trabajadorRepository.EliminarTrabajador(id);
                return Ok();
            }
            catch (Exception e)
            {
                _logger.LogError(e.Message);
                return BadRequest();
            }
        }
    }
}