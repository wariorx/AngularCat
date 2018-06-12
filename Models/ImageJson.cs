using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace AngularCat.Models
{
    public static class ImageJson
    {
        public static List<ImageModel> GetImages()
        {
            List<ImageModel> images = null;

            using (StreamReader r = new StreamReader("wwwroot/images.json"))
            {
                string json = r.ReadToEnd();
                images = JsonConvert.DeserializeObject<List<ImageModel>>(json);
            }

            return images;
        }
    }
}
