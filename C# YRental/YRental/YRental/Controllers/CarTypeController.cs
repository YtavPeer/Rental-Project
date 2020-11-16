using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace YRental.Controllers
{
    [EnableCors(origins: "*", methods: "*", headers: "*")]
    public class CarTypeController : ApiController
    {

        YRentalDBEntities1 YRentDB = new YRentalDBEntities1();

        // GET: api/CarType
        public IEnumerable<CarTypeTable> Get()
        {
            return YRentDB.CarTypeTable.ToList();
        }

        // GET: api/CarType/5
        public CarTypeTable Get(int id)
        {
            return YRentDB.CarTypeTable.FirstOrDefault(s => s.Car_Type_ID==id);
        }

        // POST: api/CarType
        public void Post([FromBody]CarTypeTable s1)
        {
            YRentDB.CarTypeTable.Add(s1);
            YRentDB.SaveChanges();
        }

        // PUT: api/CarType/5

        [HttpPut]
        public void Put(int id, [FromBody] CarTypeTable u1)
        {
            CarTypeTable u = YRentDB.CarTypeTable.FirstOrDefault(f => f.Car_Type_ID == id);
            if( u != null) 
            {
                u.Manufactor_Name = u1.Manufactor_Name;
                u.Model = u1.Model;
                u.Price_PerDay = u1.Price_PerDay;
                u.Price_Delay = u1.Price_Delay;
                u.Production_Year = u1.Production_Year;
                u.Gear = u1.Gear;
                YRentDB.SaveChanges();
            }
        }

  


        // DELETE: api/CarType/5
        public void Delete(int id)
        {
            CarTypeTable T = YRentDB.CarTypeTable.FirstOrDefault(t1 => t1.Car_Type_ID == id);
            if (T != null)
            {
                YRentDB.CarTypeTable.Remove(T);
                YRentDB.SaveChanges();
            }

        }
    }
}
