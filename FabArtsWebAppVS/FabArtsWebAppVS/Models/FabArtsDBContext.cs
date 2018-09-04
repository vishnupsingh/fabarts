using FabArtsWebAppVS.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FabArtsWebAppVS
{
  public class FabArtsDBContext : DbContext
  {
    //public DbSet<Blog> Blogs { get; set; }
    public DbSet<Post> Posts { get; set; }

    protected override void OnModelCreating(ModelBuilder model)
    {
      //model.Entity<Blog>().HasKey("Id");
      model.Entity<Post>().HasKey("Id");
    }
  }
}
