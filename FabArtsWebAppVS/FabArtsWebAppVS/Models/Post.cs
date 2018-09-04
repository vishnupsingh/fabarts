using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FabArtsWebAppVS.Models
{
  public class Post
  {
    public Post()
    {
      //Blog = new Blog();
    }

    public int Id { get; set; }
    public string Title { get; set; }
    public string Content { get; set; }
    public string ImagePath { get; set; }
    //public virtual Blog Blog { get; set; }
  }
}
