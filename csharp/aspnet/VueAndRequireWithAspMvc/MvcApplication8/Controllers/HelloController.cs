using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MvcApplication8.Models;
namespace MvcApplication8.Controllers
{
    public class HelloController : Controller
    {
        //
        // GET: /Hello/

        List<mymodel> modelList = new List<mymodel>();
        public ActionResult Index()
        {
            return View();
        }
        
        public ActionResult AngularTest()
        {
            mymodel m = new mymodel();
            m.age = 13;
            m.name = "hehe";
            m.sogas = new List<soga>();
            m.sogas.Add(new soga() { sogaid = "1",soganame="one" });
            m.sogas.Add(new soga() { sogaid = "2",soganame="two" });
            return View(m);
        }
        public ActionResult AngularTestone()
        {
            mymodel m = new mymodel();
            m.age = 13;
            m.name = "hehe";
            m.sogas = new List<soga>();
            m.sogas.Add(new soga() { sogaid = "1", soganame = "one" });
            m.sogas.Add(new soga() { sogaid = "2", soganame = "two" });
            return View(m);
        }
        public ActionResult VueTest1()
        {
            mymodel m = new mymodel();
            m.age = 13;
            m.name = "hehe";
            m.sogas = new List<soga>();
            m.sogas.Add(new soga() { sogaid = "1", soganame = "one" });
            m.sogas.Add(new soga() { sogaid = "2", soganame = "two" });
            return View(m);
        }
        public ActionResult VueTest2()
        {
            mymodel m = new mymodel();
            m.age = 13;
            m.name = "hehe";
            m.sogas = new List<soga>();
            m.sogas.Add(new soga() { sogaid = "1", soganame = "one" });
            m.sogas.Add(new soga() { sogaid = "2", soganame = "two" });
            return View(m);
        }
        public ActionResult VueTest3()
        {
            mymodel m = new mymodel();
            m.age = 13;
            m.name = "vuetest3";
            m.sogas = new List<soga>();
            m.sogas.Add(new soga() { sogaid = "1", soganame = "one" });
            m.sogas.Add(new soga() { sogaid = "2", soganame = "two" });
            m.sogas.Add(new soga() { sogaid = "3", soganame = "three" });
            m.sogas.Add(new soga() { sogaid = "4", soganame = "four" });
            return View(m);
        }

        public ActionResult ModelList()
        {
            var list=GetMyModelList();
            return View(list);
        }
        public List<mymodel> GetMyModelList()
        {
            for (int i = 0; i < 10; i++)
            {
                modelList.Add(newRandomModel(i));
            }
            return modelList;
        }
        public void AddMyModel(mymodel model)
        {
            modelList.Add(model);
        }
        public bool RemoveMyModel(mymodel model)
        {
            return modelList.Remove(model);
        }

        private mymodel newRandomModel(int i)
        {
            Random r = new Random();
            string iStr = i.ToString();
            mymodel m = new mymodel();
            m.age = 13;
            m.name = "hehe"+iStr;
            m.sogas = new List<soga>();
            m.sogas.Add(new soga() { sogaid = "No."+iStr,soganame="No.one"+iStr });
            m.sogas.Add(new soga() { sogaid = "No*"+iStr,soganame="No.two"+iStr });
            return m;
        }
    }
    
}
