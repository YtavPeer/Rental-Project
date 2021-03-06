﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;


namespace YRental.Controllers
{
[EnableCors(origins: "*", methods: "*", headers: "*")]
    public class UsersController : ApiController
    {


        YRentalDBEntities1 YRentDB = new YRentalDBEntities1();

        // GET: api/Users
        public IEnumerable<UserTable> Get()
        {
            return YRentDB.UserTable.ToList();
        }

        // GET: api/Users/5
        public UserTable Get(int id)
        {
            return YRentDB.UserTable.FirstOrDefault(u => u.User_ID==id);
        }

        // POST: api/Users
        public void Post([FromBody]UserTable u1)
        {
            YRentDB.UserTable.Add(u1);
            YRentDB.SaveChanges();

        }

        // PUT: api/Users/5
        [HttpPut]
        public void Put(int id, [FromBody]UserTable u1)

        {
            UserTable u = YRentDB.UserTable.FirstOrDefault(f=> f.User_ID == id);
            if (u != null)
            {
                u.User_Type = u1.User_Type;
                u.First_Name = u1.First_Name;
                u.Last_Name = u1.Last_Name;
                u.Gender = u1.Gender;
                u.BirthDay = u1.BirthDay;
                u.Email = u1.Email;
                u.User_Name = u1.User_Name;
                u.Password = u1.Password;
                u.Picture = u1.Picture;
                YRentDB.SaveChanges();
            }

        }
            // DELETE: api/Users/5
            public void Delete(int id)
        {
            UserTable u = YRentDB.UserTable.FirstOrDefault(u1 => u1.User_ID == id);
            if (u != null)
            {
                YRentDB.UserTable.Remove(u);
                YRentDB.SaveChanges();
            }

        }
    }
}
