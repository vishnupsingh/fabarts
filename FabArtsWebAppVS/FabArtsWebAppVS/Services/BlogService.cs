using FabArtsWebAppVS.Models;
using FabArtsWebAppVS.WebApiDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FabArtsWebAppVS.Services
{
  public class BlogService
  {
    private readonly FabArtsDBContext _context;

    public BlogService()
    {
      _context = new FabArtsDBContext();
    }

    public void AddPost(BlogData blogData)
    {
      var post = new Post();
      post.Id = 1;
      post.Title = blogData.BlogTitle;
      post.Content = blogData.BlogContent;
      post.ImagePath = string.Empty;
      //_context.Add(post);
      //_context.SaveChanges();
    }
  }
}
