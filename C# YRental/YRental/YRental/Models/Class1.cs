using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;
using System.Net.Http;

namespace YRental.Models
{

    public class ClassValid : AuthorizationFilterAttribute
    {

        YRentalDBEntities1 yrental = new YRentalDBEntities1();

        public override void OnAuthorization(HttpActionContext actionContext)
        {
            if (actionContext.Request.Headers.Authorization == null)
            {
                actionContext.Response = actionContext.Request.CreateResponse(
                    System.Net.HttpStatusCode.Unauthorized);
            }
            else
            {

                //tring to get the right password from client
                string s = actionContext.Request.Headers.Authorization.Parameter;

                string[] chk = s.Split(':');
                string usr = chk[0];
                string pas = chk[1];

                UserTable m = yrental.UserTable.FirstOrDefault(m1 => m1.User_Name == usr);

                if (usr != m.User_Name && pas != m.Password)
                {
                    actionContext.Response = actionContext.Request.CreateResponse(
                   System.Net.HttpStatusCode.Unauthorized);

                }

            }
        }
    }
}
        
