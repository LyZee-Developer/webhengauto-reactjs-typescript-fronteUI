import type { AboutUs, AboutUsDetail } from "../interfaces/aboutus/about_us";
import type { Car, Service } from "../interfaces/booking_appointment/data";
import type { IOwnerInfo } from "../interfaces/info/info";
import type { PartnerSupport } from "../interfaces/partner/partner";
import type { Portfolio } from "../interfaces/portfolio/data";
import type { IServiceData, IServiceDetail } from "../interfaces/service/service";

export const OwnerFixedDate:IOwnerInfo={
    createdBy:"Admin",
    createdDate: new Date(),
    database: "_",
    description: "ក្រុមបច្ចេកទេសដែលមានបទពិសោធន៍របស់យើង ធានាឲ្យរថយន្តរបស់អ្នកមានសុវត្ថិភាព និងដំណើរការល្អ",
    email: "heng.autoservice@gmail.com",
    englishName: "Heng Auto Service",
    faceboolURL: "https://web.facebook.com/ly.leang.heng.746530",
    id: 1,
    inURL: "",
    instagramURL: "",
    name: "ហេង អ៉ូត៉ូ សើវីស",
    pathImage: "",
    phone: "087 45 10 86",
    phone1: "015 844 712",
    recordCount: 1,
    telegramURL: "https://t.me/LyZeeVlogger",
    updatedBy: "Lyzee",
    updatedDate: new Date(),
    workingInfo: "7:00AM - 7:00PM",
    youtubeURL: "https://www.youtube.com/@LyZee-Vloger",
    descriptionEnglish: "Our experienced technicians ensure your car stays safe, reliable, and performs at its best.",
    subDescription: "យើងថែទាំរក្សារថយន្តរបស់អ្នក",
    subDescriptionEnglish: "We care about your car",
}



//Detail Header
export const HeaderFixedData : IServiceData[] = [
    
    {
        "createdBy": "ADMIN",
        "createdDate": new Date(),
        "database": "_",
        "description": "Regular servicing keeps your engine running smoothly, improves fuel efficiency, and helps detect potential problems early before they become expensive repairs.",
        "descriptionEnglish": "Regular servicing keeps your engine running smoothly, improves fuel efficiency, and helps detect potential problems early before they become expensive repairs.",
        "id": 13,
        "recordCount": 3,
        "status": true,
        "subTitle": "",
        "subTitleEnglish": "",
        "title": "តើខ្ញុំគួរផ្តល់សេវាកម្មឡានរបស់ខ្ញុំញឹកញាប់ប៉ុណ្ណា",
        "titleEnglish": "How often should I service my car",
        "type": "Service",
        "updatedBy": null,
        "updatedDate": null
    },
    {
        "createdBy": "ADMIN",
        "createdDate": "2025-12-09T07:56:28.301Z",
        "database": "_",
        "description": "Facebook: CarServiceKH | Instagram: @carservicekh | YouTube: Car Service Cambodia",
        "descriptionEnglish": "Facebook: CarServiceKH | Instagram: @carservicekh | YouTube: Car Service Cambodia",
        "id": 12,
        "recordCount": 3,
        "status": true,
        "subTitle": "តាមដានយើងតាមបណ្តាញ",
        "subTitleEnglish": "Follow us online",
        "title": "បណ្ដាញសង្គម",
        "titleEnglish": "Social Media",
        "type": "Footer",
        "updatedBy": null,
        "updatedDate": null
    }
]

export const HeaderAboutUsFixedData:AboutUs={
        "createdBy": "ADMIN",
         "createdDate": "2025-12-09T07:56:28.301Z",
        "database": "_",
        "description": "",
        "descriptionEnglish": "",
        "id": "14",
        "recordCount": "3",
        "status": "true",
        "subTitle": "",
        "subTitleEnglish": "",
        "title": "ក្រុមបច្ចេកទេសដែលមានបទពិសោធន៍របស់យើង ធានាឲ្យរថយន្តរបស់អ្នកមានសុវត្ថិភាព និងដំណើរការល្អ",
        "titleEnglish": "Our experienced technicians ensure your car stays safe, reliable, and performs at its best.",
        "type": "AboutUs",
        "updatedBy": "",
        "updatedDate": null
}


// oil iamge

import oil1 from '../assets/fix/partner/1.jpg'
import oil2 from '../assets/fix/partner/2.jpg'
import oil3 from '../assets/fix/partner/3.jpg'
import oil4 from '../assets/fix/partner/4.jpg'
import oil5 from '../assets/fix/partner/5.jpg'
export const PartnerFixDate:PartnerSupport[] = [
    {
        "createdBy": "ADMIN",
        "createdDate": "2025-12-17T08:45:42.071Z",
        "database": "_",
        "englishName": "Castrol MAGNATEC",
        "id": 20,
        "name": "កាស្ត្រូល ម៉ាណាតិច",
        "pathImage": oil1,
        "recordCount": 4,
        "status": true,
        "updatedBy": null,
        "updatedDate": null
    },
    {
        "createdBy": "ADMIN",
        "createdDate": "2025-12-09T04:19:20.977Z",
        "database": "_",
        "englishName": "Mobil 1 Extended Performance motor oil",
        "id": 19,
        "name": "ប្រេងម៉ាស៊ីន Mobil 1 Extended Performance",
        "pathImage": oil2,
        "recordCount": 4,
        "status": true,
        "updatedBy": null,
        "updatedDate": null
    },
    {
        "createdBy": "ADMIN",
        "createdDate": "2025-12-09T04:18:19.026Z",
        "database": "_",
        "englishName": "Pennzoil Full Synthetic SAE 5W 30 Motor Oil ",
        "id": 18,
        "name": "ប្រេងម៉ាស៊ីន Pennzoil សំយោគពេញលេញ SAE 5W 30",
        "pathImage": oil3,
        "recordCount": 4,
        "status": true,
        "updatedBy": null,
        "updatedDate": null
    },
    {
        "createdBy": "ADMIN",
        "createdDate": "2025-12-09T04:17:11.384Z",
        "database": "_",
        "englishName": "Shell Helix Car Engine Oils",
        "id": 17,
        "name": "ប្រេងម៉ាស៊ីនរថយន្ត Shell Helix",
        "pathImage": oil4,
        "recordCount": 4,
        "status": true,
        "updatedBy": null,
        "updatedDate": null
    },
    {
        "createdBy": "ADMIN",
        "createdDate": "2025-12-09T04:17:11.384Z",
        "database": "_",
        "englishName": "4100 Ecomile",
        "id": 17,
        "name": "៤១០០ អេកូម៉ាយល៍",
        "pathImage": oil5,
        "recordCount": 4,
        "status": true,
        "updatedBy": null,
        "updatedDate": null
    }
  
]



export const ServiceTypeFixData:Service[]  = 
[
    {
        "createdBy": "ADMIN",
        "createdDate": "2025-12-06T05:49:04.556Z",
        "database": "_",
        "englishName": "ចង្កៀងមុខ និងសេវាអគ្គិសនី",
        "id": 21,
        "name": "Headlight & Electrical Service",
        "recordCount": 17,
        "status": true,
        "updatedBy": null,
        "updatedDate": null
    },
    {
        "createdBy": "ADMIN",
        "createdDate": "2025-12-05T06:49:37.117Z",
        "database": "_",
        "englishName": "Filter Replacement Service",
        "id": 19,
        "name": "សេវាជំនួសតម្រង",
        "recordCount": 17,
        "status": true,
        "updatedBy": null,
        "updatedDate": null
    },
    {
        "createdBy": "ADMIN",
        "createdDate": "2025-12-05T06:49:23.432Z",
        "database": "_",
        "englishName": "Preventive Maintenance Package",
        "id": 18,
        "name": "កញ្ចប់ថែទាំបង្ការ",
        "recordCount": 17,
        "status": false,
        "updatedBy": "ADMIN",
        "updatedDate": "2025-12-05T06:55:14.326Z"
    },
    {
        "createdBy": "ADMIN",
        "createdDate": "2025-12-05T06:49:11.342Z",
        "database": "_",
        "englishName": "Wheel Balancing",
        "id": 17,
        "name": "តុល្យភាពកង់",
        "recordCount": 17,
        "status": true,
        "updatedBy": null,
        "updatedDate": null
    },
    {
        "createdBy": "ADMIN",
        "createdDate": "2025-12-05T06:48:59.829Z",
        "database": "_",
        "englishName": "Car Wash & Detailing",
        "id": 16,
        "name": "ការលាងរថយន្ត និងព័ត៌មានលម្អិត",
        "recordCount": 17,
        "status": true,
        "updatedBy": null,
        "updatedDate": null
    },
    {
        "createdBy": "ADMIN",
        "createdDate": "2025-12-05T06:48:49.049Z",
        "database": "_",
        "englishName": "Exhaust System Repair",
        "id": 15,
        "name": "ជួសជុលប្រព័ន្ធបង្ហូរ",
        "recordCount": 17,
        "status": true,
        "updatedBy": null,
        "updatedDate": null
    },
    {
        "createdBy": "ADMIN",
        "createdDate": "2025-12-05T06:48:32.802Z",
        "database": "_",
        "englishName": "Fuel System Cleaning",
        "id": 14,
        "name": "ការសម្អាតប្រព័ន្ធប្រេងឥន្ធនៈ",
        "recordCount": 17,
        "status": true,
        "updatedBy": null,
        "updatedDate": null
    },
    {
        "createdBy": "ADMIN",
        "createdDate": "2025-12-05T06:48:11.237Z",
        "database": "_",
        "englishName": "Cooling System Service",
        "id": 13,
        "name": "សេវាកម្មប្រព័ន្ធត្រជាក់",
        "recordCount": 17,
        "status": true,
        "updatedBy": null,
        "updatedDate": null
    },
    {
        "createdBy": "ADMIN",
        "createdDate": "2025-12-05T06:48:00.379Z",
        "database": "_",
        "englishName": "Engine Tune-Up",
        "id": 12,
        "name": "ការលៃតម្រូវម៉ាស៊ីន",
        "recordCount": 17,
        "status": true,
        "updatedBy": null,
        "updatedDate": null
    },
    {
        "createdBy": "ADMIN",
        "createdDate": "2025-12-05T06:47:48.788Z",
        "database": "_",
        "englishName": "Transmission Maintenance",
        "id": 11,
        "name": "ការថែទាំការបញ្ជូន",
        "recordCount": 17,
        "status": true,
        "updatedBy": null,
        "updatedDate": null
    },
    {
        "createdBy": "ADMIN",
        "createdDate": "2025-12-05T06:47:36.766Z",
        "database": "_",
        "englishName": "Suspension & Steering Service",
        "id": 10,
        "name": "សេវាផ្អាក និងចង្កូត",
        "recordCount": 17,
        "status": true,
        "updatedBy": null,
        "updatedDate": null
    },
    {
        "createdBy": "ADMIN",
        "createdDate": "2025-12-05T06:47:20.685Z",
        "database": "_",
        "englishName": "Battery Check & Replacement",
        "id": 9,
        "name": "ពិនិត្យ និងប្តូរថ្ម",
        "recordCount": 17,
        "status": true,
        "updatedBy": null,
        "updatedDate": null
    },
    {
        "createdBy": "ADMIN",
        "createdDate": "2025-12-05T06:47:08.102Z",
        "database": "_",
        "englishName": "Air Conditioning Service",
        "id": 8,
        "name": "សេវាកម្មម៉ាស៊ីនត្រជាក់",
        "recordCount": 17,
        "status": true,
        "updatedBy": null,
        "updatedDate": null
    },
    {
        "createdBy": "ADMIN",
        "createdDate": "2025-12-05T06:46:48.593Z",
        "database": "_",
        "englishName": "Tire Rotation & Alignment",
        "id": 7,
        "name": "ការបង្វិល និងតម្រឹមសំបកកង់",
        "recordCount": 17,
        "status": true,
        "updatedBy": null,
        "updatedDate": null
    },
    {
        "createdBy": "ADMIN",
        "createdDate": "2025-12-05T06:46:33.272Z",
        "database": "_",
        "englishName": "Brake System Service",
        "id": 6,
        "name": "សេវាប្រព័ន្ធហ្វ្រាំង",
        "recordCount": 17,
        "status": true,
        "updatedBy": null,
        "updatedDate": null
    },
    {
        "createdBy": "ADMIN",
        "createdDate": "2025-12-05T06:46:12.998Z",
        "database": "_",
        "englishName": "Full Vehicle Inspection",
        "id": 5,
        "name": "ការត្រួតពិនិត្យយានយន្តពេញលេញ",
        "recordCount": 17,
        "status": true,
        "updatedBy": null,
        "updatedDate": null
    },
    {
        "createdBy": "ADMIN",
        "createdDate": "2025-12-05T06:45:16.020Z",
        "database": "_",
        "englishName": "Engine Oil Change",
        "id": 4,
        "name": "ការផ្លាស់ប្តូរប្រេងម៉ាស៊ីន",
        "recordCount": 17,
        "status": true,
        "updatedBy": null,
        "updatedDate": null
    }
]

// Car
export const CarFixData:Car[] = [
    {
        "createdBy": "ADMIN",
        "createdDate": "2025-12-09T03:55:04.798Z",
        "database": "_",
        "englishName": "Toyota Camry",
        "id": 48,
        "name": "Toyota Camry",
        "pathImage": "",
        "recordCount": 4,
        "status": true,
        "updatedBy": null,
        "updatedDate": null
    },
    {
        "createdBy": "ADMIN",
        "createdDate": "2025-12-09T03:54:23.141Z",
        "database": "_",
        "englishName": "Honda CR-V",
        "id": 47,
        "name": "Honda CR-V",
        "pathImage": "",
        "recordCount": 4,
        "status": true,
        "updatedBy": null,
        "updatedDate": null
    },
    {
        "createdBy": "ADMIN",
        "createdDate": "2025-12-09T03:53:07.297Z",
        "database": "_",
        "englishName": "BMW X3",
        "id": 46,
        "name": "BMW X3",
        "pathImage": "",
        "recordCount": 4,
        "status": true,
        "updatedBy": null,
        "updatedDate": null
    },
    {
        "createdBy": "ADMIN",
        "createdDate": "2025-12-09T03:51:06.571Z",
        "database": "_",
        "englishName": "Cadillac",
        "id": 45,
        "name": "Cadillac",
        "pathImage": "",
        "recordCount": 4,
        "status": true,
        "updatedBy": null,
        "updatedDate": null
    }
]


//lambo
import lam1 from '../assets/fix/car/labbo/1.jpg'
import lam2 from '../assets/fix/car/labbo/3.jpg'
import lam3 from '../assets/fix/car/labbo/4.webp'
import lam4 from '../assets/fix/car/labbo/5.jpg'
import lam5 from '../assets/fix/car/labbo/6.jpg'
import lam6 from '../assets/fix/car/labbo/7.jpg'
import lam7 from '../assets/fix/car/labbo/8.jpg'
//bwm
import bwm1 from '../assets/fix/car/bwm/1.jpg'
import bwm2 from '../assets/fix/car/bwm/2.jpg'
import bwm3 from '../assets/fix/car/bwm/3.jpg'
import bwm4 from '../assets/fix/car/bwm/4.jpg'
import bwm5 from '../assets/fix/car/bwm/5.jpg'
import bwm6 from '../assets/fix/car/bwm/6.jpg'
import bwm7 from '../assets/fix/car/bwm/8.jpg'
import bwm8 from '../assets/fix/car/bwm/7.webp'

//lexus
import lexus1 from '../assets/fix/car/lexus/1.jpg'
import lexus2 from '../assets/fix/car/lexus/2.jpg'
import lexus3 from '../assets/fix/car/lexus/3.jpg'
import lexus4 from '../assets/fix/car/lexus/4.jpg'
import lexus5 from '../assets/fix/car/lexus/5.jpg'
import lexus6 from '../assets/fix/car/lexus/6.jpg'
import lexus7 from '../assets/fix/car/lexus/7.jpg'
import lexus8 from '../assets/fix/car/lexus/8.jpg'


//mazda
import mazda1 from '../assets/fix/mazda/1.jpg'
import mazda2 from '../assets/fix/mazda/2.jpg'
import mazda3 from '../assets/fix/mazda/3.jpg'
import mazda4 from '../assets/fix/mazda/4.jpg'
import mazda5 from '../assets/fix/mazda/5.jpg'


import bently1 from '../assets/fix/bently/1.jpg'
import bently2 from '../assets/fix/bently/2.jpg'
import bently3 from '../assets/fix/bently/3.jpg'
import bently4 from '../assets/fix/bently/4.jpg'
import bently5 from '../assets/fix/bently/5.jpg'
import bently6 from '../assets/fix/bently/6.jpg'
export const portfoliFixData:Portfolio[]  = [
    {
        "createdBy": null,
        "createdDate": null,
        "database": "_",
        "id": 16,
        "images": [
            {
                "hostUrl": "http://localhost:8989",
                "id": 69,
                "name": "1765941602488_camar1_.jpg",
                "pathImage": lexus1,
                "refId": 16,
                "size": 1000,
                "type": "PORTFOLIO",
                "typeImage": "jpg"
            },
            {
                "hostUrl": "http://localhost:8989",
                "id": 70,
                "name": "1765941602513_bm2.png",
                "pathImage": lexus2,
                "refId": 16,
                "size": 1000,
                "type": "PORTFOLIO",
                "typeImage": "png"
            },
            {
                "hostUrl": "http://localhost:8989",
                "id": 71,
                "name": "1765941602524_bm3.png",
                "pathImage":  lexus3,
                "refId": 16,
                "size": 1000,
                "type": "PORTFOLIO",
                "typeImage": "png"
            },
            {
                "hostUrl": "http://localhost:8989",
                "id": 72,
                "name": "1765941602536_bm4.png",
                "pathImage": lexus4,
                "refId": 16,
                "size": 1000,
                "type": "PORTFOLIO",
                "typeImage": "png"
            },
            {
                "hostUrl": "http://localhost:8989",
                "id": 73,
                "name": "1765941602549_cama1.png",
                "pathImage": lexus5,
                "refId": 16,
                "size": 1000,
                "type": "PORTFOLIO",
                "typeImage": "png"
            }
        ],
        "recordCount": 5,
        "updatedBy": null,
        "updatedDate": null
    },
    {
        "createdBy": null,
        "createdDate": null,
        "database": "_",
        "id": 15,
        "images": [
            {
                "hostUrl": "http://localhost:8989",
                "id": 64,
                "name": "1765941263109_camar1_.jpg",
                "pathImage": lexus6,
                "refId": 15,
                "size": 1000,
                "type": "PORTFOLIO",
                "typeImage": "jpg"
            },
            {
                "hostUrl": "http://localhost:8989",
                "id": 65,
                "name": "1765941263118_bm2.png",
                "pathImage": lexus7,
                "refId": 15,
                "size": 1000,
                "type": "PORTFOLIO",
                "typeImage": "png"
            },
            {
                "hostUrl": "http://localhost:8989",
                "id": 66,
                "name": lam1,
                "pathImage": lexus8,
                "refId": 15,
                "size": 1000,
                "type": "PORTFOLIO",
                "typeImage": "png"
            },
            {
                "hostUrl": "http://localhost:8989",
                "id": 67,
                "name": "1765941263147_bm4.png",
                "pathImage": bwm1,
                "refId": 15,
                "size": 1000,
                "type": "PORTFOLIO",
                "typeImage": "png"
            },
            {
                "hostUrl": "http://localhost:8989",
                "id": 68,
                "name": "1765941263157_cama1.png",
                "pathImage": bwm2,
                "refId": 15,
                "size": 1000,
                "type": "PORTFOLIO",
                "typeImage": "png"
            }
        ],
        "recordCount": 5,
        "updatedBy": null,
        "updatedDate": null
    },
    {
        "createdBy": null,
        "createdDate": null,
        "database": "_",
        "id": 14,
        "images": [
            {
                "hostUrl": "http://localhost:8989",
                "id": 59,
                "name": "1765941037910_camar1_.jpg",
                "pathImage": bwm3,
                "refId": 14,
                "size": 1000,
                "type": "PORTFOLIO",
                "typeImage": "jpg"
            },
            {
                "hostUrl": "http://localhost:8989",
                "id": 60,
                "name": "1765941037919_bm2.png",
                "pathImage": bwm4,
                "refId": 14,
                "size": 1000,
                "type": "PORTFOLIO",
                "typeImage": "png"
            },
            {
                "hostUrl": "http://localhost:8989",
                "id": 61,
                "name": "1765941037934_bm3.png",
                "pathImage": bwm5,
                "refId": 14,
                "size": 1000,
                "type": "PORTFOLIO",
                "typeImage": "png"
            },
            {
                "hostUrl": "http://localhost:8989",
                "id": 62,
                "name": "1765941037954_bm4.png",
                "pathImage": bwm6,
                "refId": 14,
                "size": 1000,
                "type": "PORTFOLIO",
                "typeImage": "png"
            },
            {
                "hostUrl": "http://localhost:8989",
                "id": 63,
                "name": "1765941037965_cama1.png",
                "pathImage": bwm7,
                "refId": 14,
                "size": 1000,
                "type": "PORTFOLIO",
                "typeImage": "png"
            }
        ],
        "recordCount": 5,
        "updatedBy": null,
        "updatedDate": null
    },
    {
        "createdBy": null,
        "createdDate": null,
        "database": "_",
        "id": 13,
        "images": [
            {
                "hostUrl": "http://localhost:8989",
                "id": 54,
                "name": "1765940801358_camar1_.jpg",
                "pathImage": lam2,
                "refId": 13,
                "size": 1000,
                "type": "PORTFOLIO",
                "typeImage": "jpg"
            },
            {
                "hostUrl": "http://localhost:8989",
                "id": 55,
                "name": "1765940801370_bm2.png",
                "pathImage": lam3,
                "refId": 13,
                "size": 1000,
                "type": "PORTFOLIO",
                "typeImage": "png"
            },
            {
                "hostUrl": "http://localhost:8989",
                "id": 56,
                "name": "1765940801382_bm3.png",
                "pathImage": lam4,
                "refId": 13,
                "size": 1000,
                "type": "PORTFOLIO",
                "typeImage": "png"
            }
            
        ],
        "recordCount": 5,
        "updatedBy": null,
        "updatedDate": null
    },
    {
        "createdBy": null,
        "createdDate": null,
        "database": "_",
        "id": 12,
        "images": [
            {
                "hostUrl": "http://localhost:8989",
                "id": 49,
                "name": "1765940443380_bm1_.jpg",
                "pathImage": lam5,
                "refId": 12,
                "size": 1000,
                "type": "PORTFOLIO",
                "typeImage": "jpg"
            },
            {
                "hostUrl": "http://localhost:8989",
                "id": 50,
                "name": "1765940443397_bm2.png",
                "pathImage": lam6,
                "refId": 12,
                "size": 1000,
                "type": "PORTFOLIO",
                "typeImage": "png"
            },
            {
                "hostUrl": "http://localhost:8989",
                "id": 51,
                "name": "1765940443419_bm3.png",
                "pathImage": lam7,
                "refId": 12,
                "size": 1000,
                "type": "PORTFOLIO",
                "typeImage": "png"
            },
            {
                "hostUrl": "http://localhost:8989",
                "id": 52,
                "name": "1765940443437_bm4.png",
                "pathImage": bwm8,
                "refId": 12,
                "size": 1000,
                "type": "PORTFOLIO",
                "typeImage": "png"
            },
          
        ],
        "recordCount": 5,
        "updatedBy": null,
        "updatedDate": null
    },
    {
        "createdBy": null,
        "createdDate": null,
        "database": "_",
        "id": 12,
        "images": [
            {
                "hostUrl": "http://localhost:8989",
                "id": 49,
                "name": "1765940443380_bm1_.jpg",
                "pathImage": mazda1,
                "refId": 12,
                "size": 1000,
                "type": "PORTFOLIO",
                "typeImage": "jpg"
            },
            {
                "hostUrl": "http://localhost:8989",
                "id": 50,
                "name": "1765940443397_bm2.png",
                "pathImage": mazda2,
                "refId": 12,
                "size": 1000,
                "type": "PORTFOLIO",
                "typeImage": "png"
            },
            {
                "hostUrl": "http://localhost:8989",
                "id": 51,
                "name": "1765940443419_bm3.png",
                "pathImage": mazda3,
                "refId": 12,
                "size": 1000,
                "type": "PORTFOLIO",
                "typeImage": "png"
            },
            {
                "hostUrl": "http://localhost:8989",
                "id": 52,
                "name": "1765940443437_bm4.png",
                "pathImage": mazda4,
                "refId": 12,
                "size": 1000,
                "type": "PORTFOLIO",
                "typeImage": "png"
            },
            {
                "hostUrl": "http://localhost:8989",
                "id": 53,
                "name": "1765940443449_bm5.png",
                "pathImage": mazda5,
                "refId": 12,
                "size": 1000,
                "type": "PORTFOLIO",
                "typeImage": "png"
            }
        ],
        "recordCount": 5,
        "updatedBy": null,
        "updatedDate": null
    },


    {
        "createdBy": null,
        "createdDate": null,
        "database": "_",
        "id": 12,
        "images": [
            {
                "hostUrl": "http://localhost:8989",
                "id": 50,
                "name": "1765940443397_bm2.png",
                "pathImage": bently1,
                "refId": 12,
                "size": 1000,
                "type": "PORTFOLIO",
                "typeImage": "png"
            },
            {
                "hostUrl": "http://localhost:8989",
                "id": 51,
                "name": "1765940443419_bm3.png",
                "pathImage": bently2,
                "refId": 12,
                "size": 1000,
                "type": "PORTFOLIO",
                "typeImage": "png"
            },
            {
                "hostUrl": "http://localhost:8989",
                "id": 52,
                "name": "1765940443437_bm4.png",
                "pathImage": bently3,
                "refId": 12,
                "size": 1000,
                "type": "PORTFOLIO",
                "typeImage": "png"
            },
            {
                "hostUrl": "http://localhost:8989",
                "id": 53,
                "name": "1765940443449_bm5.png",
                "pathImage": bently4,
                "refId": 12,
                "size": 1000,
                "type": "PORTFOLIO",
                "typeImage": "png"
            }
        ],
        "recordCount": 5,
        "updatedBy": null,
        "updatedDate": null
    },
    {
        "createdBy": null,
        "createdDate": null,
        "database": "_",
        "id": 12,
        "images": [
            {
                "hostUrl": "http://localhost:8989",
                "id": 49,
                "name": "1765940443380_bm1_.jpg",
                "pathImage": bently5,
                "refId": 12,
                "size": 1000,
                "type": "PORTFOLIO",
                "typeImage": "jpg"
            },
            {
                "hostUrl": "http://localhost:8989",
                "id": 50,
                "name": "1765940443397_bm2.png",
                "pathImage": bently6,
                "refId": 12,
                "size": 1000,
                "type": "PORTFOLIO",
                "typeImage": "png"
            },
        ],
        "recordCount": 5,
        "updatedBy": null,
        "updatedDate": null
    }
]


//service
export const ServiceFixData:IServiceDetail[] = [
    {
        "createdBy": "ADMIN",
        "createdDate": "2025-12-09T14:35:23.275Z",
        "database": "_",
        "description": "សេវាលាងរថយន្តខាងក្នុង និងខាងក្រៅ ដោយប្រើឧបករណ៍ស្តង់ដារ។",
        "descriptionEnglish": "Interior and exterior car cleaning with professional equipment.",
        "id": 12,
        "pathImage": "",
        "recordCount": 14,
        "status": true,
        "title": "សេវាលាងសម្អាតរថយន្ត",
        "titleEnglish": "Car Cleaning Service",
        "updatedBy": null,
        "updatedDate": null
    },
    {
        "createdBy": "ADMIN",
        "createdDate": "2025-12-09T14:33:30.200Z",
        "database": "_",
        "description": "សេវាលាងរថយន្តខាងក្នុង និងខាងក្រៅ ដោយប្រើឧបករណ៍ស្តង់ដារ។",
        "descriptionEnglish": "Interior and exterior car cleaning with professional equipment.",
        "id": 11,
        "pathImage": "",
        "recordCount": 14,
        "status": true,
        "title": "សេវាលាងសម្អាតរថយន្ត",
        "titleEnglish": "Car Cleaning Service",
        "updatedBy": "ADMIN",
        "updatedDate": "2025-12-09T14:36:11.479Z"
    },
    {
        "createdBy": "ADMIN",
        "createdDate": "2025-12-09T13:24:07.915Z",
        "database": "_",
        "description": "ពិនិត្យស្ថានភាពហ្វ្រាំង ដើម្បីធានាប្រសិទ្ធភាពនៃការហាត់ហាត។",
        "descriptionEnglish": "Professional check-up of brake pads, rotors, and hydraulic system.",
        "id": 10,
        "pathImage": "",
        "recordCount": 14,
        "status": true,
        "title": "សេវាពិនិត្យប្រព័ន្ធហ្វ្រាំង",
        "titleEnglish": "Brake System Check",
        "updatedBy": null,
        "updatedDate": null
    },
    {
        "createdBy": "ADMIN",
        "createdDate": "2025-12-09T12:48:14.580Z",
        "database": "_",
        "description": "ផ្លាស់ប្តូរថ្មថ្មីដែលមានគុណភាពខ្ពស់ និងមានអាយុកាលយូរ។",
        "descriptionEnglish": "High-quality car battery replacement for long-lasting performance.",
        "id": 5,
        "pathImage": "",
        "recordCount": 14,
        "status": true,
        "title": "ផ្ទុកថ្មរថយន្ត",
        "titleEnglish": "Battery Replacement",
        "updatedBy": null,
        "updatedDate": null
    }
    
]

////About Us
export const AboutUsFixData:AboutUsDetail[] = [
    {
        "createdBy": "ADMIN",
        "createdDate": "2025-12-18T08:17:30.952Z",
        "database": "_",
        "description": "ពិនិត្យប្រេងម៉ាស៊ីន ទឹកត្រជាក់ ប្រេងហ្វ្រាំង ប្រេងចង្កូត និងរបស់សុវត្ថិភាព (ខ្សែក្រវ៉ាត់សុវត្ថិភាព ស្នែង និងឧបករណ៍ជូតទឹកភ្លៀង)។",
        "descriptionEnglish": "Inspect engine oil, coolant, brake fluid, power steering fluid, and safety items (seat belts, horn, wipers).",
        "id": 18,
        "pathImage": "",
        "recordCount": 14,
        "status": true,
        "title": "ការពិនិត្យឡើងវិញអំពីសារធាតុរាវ និងសមាសធាតុសុវត្ថិភាព",
        "titleEnglish": "Fluids & Safety Components Review",
        "updatedBy": null,
        "updatedDate": null
    },
    {
        "createdBy": "ADMIN",
        "createdDate": "2025-12-18T08:17:03.386Z",
        "database": "_",
        "description": "ពិនិត្យមើលការពាក់សំបកកង់ សម្ពាធសំបកកង់ ការតម្រឹមកង់ និងស្ថានភាពតុល្យភាព។",
        "descriptionEnglish": "Check tire wear, tire pressure, wheel alignment, and balancing condition.",
        "id": 17,
        "pathImage": "",
        "recordCount": 14,
        "status": true,
        "title": "សំបកកង់ និងស្ថានភាពកង់",
        "titleEnglish": "Tires & Wheel Condition",
        "updatedBy": null,
        "updatedDate": null
    },
    {
        "createdBy": "ADMIN",
        "createdDate": "2025-12-18T08:16:31.882Z",
        "database": "_",
        "description": "សាកល្បងសុខភាពថ្ម ប្រព័ន្ធសាកថ្ម ភ្លើង ឧបករណ៍ចាប់សញ្ញា និងការព្រមានលើផ្ទាំងគ្រប់គ្រង។",
        "descriptionEnglish": "Test battery health, charging system, lights, sensors, and dashboard warnings.",
        "id": 16,
        "pathImage": "",
        "recordCount": 14,
        "status": true,
        "title": "ការត្រួតពិនិត្យប្រព័ន្ធអគ្គិសនី និងថ្ម",
        "titleEnglish": "Electrical & Battery System Check",
        "updatedBy": null,
        "updatedDate": null
    },
    {
        "createdBy": "ADMIN",
        "createdDate": "2025-12-18T08:14:34.312Z",
        "database": "_",
        "description": "ពិនិត្យមើលឧបករណ៍ស្រូបយកឆក់ ដៃបញ្ជា សន្លាក់ចង្កូត និងស្ថេរភាពកង់។",
        "descriptionEnglish": "Inspect shock absorbers, control arms, steering joints, and wheel stability.",
        "id": 15,
        "pathImage": "",
        "recordCount": 14,
        "status": true,
        "title": "ការត្រួតពិនិត្យប្រព័ន្ធព្យួរ និងចង្កូត",
        "titleEnglish": "Suspension & Steering Inspection",
        "updatedBy": "ADMIN",
        "updatedDate": "2025-12-18T08:15:48.488Z"
    },
    {
        "createdBy": "ADMIN",
        "createdDate": "2025-12-18T08:13:02.386Z",
        "database": "_",
        "description": "ពិនិត្យមើលបន្ទះហ្វ្រាំង ឌីសហ្វ្រាំង កម្រិតប្រេងហ្វ្រាំង និងប្រសិទ្ធភាពហ្វ្រាំង។",
        "descriptionEnglish": "Check brake pads, discs, brake fluid level, and braking efficiency.",
        "id": 14,
        "pathImage": "",
        "recordCount": 14,
        "status": true,
        "title": "ការត្រួតពិនិត្យប្រព័ន្ធហ្វ្រាំង",
        "titleEnglish": "Brake System Inspection",
        "updatedBy": "ADMIN",
        "updatedDate": "2025-12-18T08:15:04.179Z"
    },
    {
        "createdBy": "ADMIN",
        "createdDate": "2025-12-18T08:11:37.047Z",
        "database": "_",
        "description": "ពិនិត្យមើលស្ថានភាពម៉ាស៊ីន ការលេចធ្លាយប្រេង ខ្សែក្រវាត់ និងដំណើរការប្រអប់លេខ។",
        "descriptionEnglish": "Inspect engine condition, oil leaks, belts, and transmission performance.",
        "id": 13,
        "pathImage": "",
        "recordCount": 14,
        "status": true,
        "title": "ការត្រួតពិនិត្យម៉ាស៊ីន និងប្រអប់លេខ",
        "titleEnglish": "Engine & Transmission Check",
        "updatedBy": null,
        "updatedDate": null
    }
]