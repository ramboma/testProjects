using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MvcApplication8.Models
{
    public class mymodel
    {
        public string name { get; set; }
        public int age { get; set; }
        public List<soga> sogas { get; set; }
    }
    public class soga
    {
        public string sogaid { get; set; }
        public string soganame { get; set; }
    }
}