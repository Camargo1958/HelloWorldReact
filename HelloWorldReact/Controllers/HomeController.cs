using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HelloWorldReact.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        //public ActionResult GetName()
        public JsonResult GetName()
        {
            //return Json("World from server side",JsonRequestBehavior.AllowGet);
            return Json(new { name = "World from server side" }, JsonRequestBehavior.AllowGet);
        }
    }
}