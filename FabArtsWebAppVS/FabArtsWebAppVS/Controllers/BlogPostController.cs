using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FabArtsWebAppVS.Services;
using FabArtsWebAppVS.WebApiDtos;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FabArtsWebAppVS.Controllers
{
  [Route("api/[controller]")]
  public class BlogPostController : Controller
  {
    private readonly BlogService blogService;

    public BlogPostController() {
      blogService = new BlogService();
    }
    // GET: api/<controller>
    [HttpGet]
    public IEnumerable<string> Get()
    {
      return new string[] { "value1", "value2" };
    }

    // GET api/<controller>/5
    [HttpGet("{id}")]
    public string Get(int id)
    {
      return "value";
    }

    // POST api/<controller>
    [HttpPost]
    public string Post([FromBody] BlogData data)
    {
      var blog = data;
      blogService.AddPost(data);
      return Newtonsoft.Json.JsonConvert.SerializeObject(data);
    }

    // PUT api/<controller>/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody]string value)
    {
    }

    // DELETE api/<controller>/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
  }
}
