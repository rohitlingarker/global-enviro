"use client";

import React from "react";

const clientLogos = [
  "https://www.logo.wine/a/logo/Indian_Space_Research_Organisation/Indian_Space_Research_Organisation-Logo.wine.svg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/ITC_Limited_Logo.svg/432px-ITC_Limited_Logo.svg.png?20250908034046",
  "https://images.seeklogo.com/logo-png/17/1/nalco-logo-png_seeklogo-177232.png",
  "https://images.seeklogo.com/logo-png/38/1/national-mineral-development-corporation-ndmc-logo-png_seeklogo-386958.png",
  "https://upload.wikimedia.org/wikipedia/en/7/75/Aditya_Birla_Group_Logo.svg",
  "https://companieslogo.com/img/orig/NCC.NS-f5845ee7.png?t=1720244493",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/330px-Tata_logo.svg.png",
  "https://assets.turbologo.com/blog/en/2021/07/26072303/unilever-958x575.png",
  "https://ibgnews.com/wp-content/uploads/2016/08/BARC_logo.png",
  "https://upload.wikimedia.org/wikipedia/en/f/ff/Andhra_Pradesh_Power_Generation_Company_Limited.jpg",
  "https://upload.wikimedia.org/wikipedia/en/b/ba/Dr._Reddy%27s_Laboratories_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/09/Laurus_Labs_Logo.png",
  "https://images.seeklogo.com/logo-png/38/1/emami-logo-png_seeklogo-387133.png",
  "https://discovertemplate.com/wp-content/uploads/2024/02/Gsk.jpg",
  "https://cdn.worldvectorlogo.com/logos/bharat-electronics-logo.svg",
  "https://www.tefskoatings.com/images/thermax.png",
  "https://upload.wikimedia.org/wikipedia/commons/9/97/Godrej_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/en/d/dc/Saint-Gobain_logo.svg",
  "https://upload.wikimedia.org/wikipedia/en/3/30/Divi%27s_Laboratories_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/en/d/dd/Aurobindo_Pharma_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/9/92/Granules_India_logo.JPG",
  "https://cdn.neowin.com/news/images/uploaded/2024/11/1731343814_msn_logo_story.jpg",
  "https://images.seeklogo.com/logo-png/15/1/wrigley-logo-png_seeklogo-154057.png",
  "https://upload.wikimedia.org/wikipedia/commons/e/e4/Adani_2012_logo.png",
  "https://mma.prnewswire.com/media/1167815/Hetero_Logo.jpg?p=facebook",
  "https://vijayasri.com/images/logo2.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8herq8RsShXjaz9b5hSn43ZQmGTONeUPdAg&s",
  "https://media.licdn.com/dms/image/v2/C4E0BAQHzHh-3M2hlPg/company-logo_200_200/company-logo_200_200/0/1630631130177/shilpa_medicare_ltd_logo?e=2147483647&v=beta&t=eODxTmKs8UzfS6dRhwRtfuI6eNdmZdGFr0kZMFbL28w",
  "https://www.suven.com/images/logo.png",
  "https://cdn.prod.website-files.com/61177bff37db7dd194ff451f/611785fb98bd9a149efa44f2_UB_Logo_sh.png",
  "https://upload.wikimedia.org/wikipedia/commons/b/b8/BHEL_logo.svg",
  "https://www.logo.wine/a/logo/Indian_Space_Research_Organisation/Indian_Space_Research_Organisation-Logo.wine.svg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/ITC_Limited_Logo.svg/432px-ITC_Limited_Logo.svg.png?20250908034046",
  "https://images.seeklogo.com/logo-png/17/1/nalco-logo-png_seeklogo-177232.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG4AzyJSNXc36bHXYypTtRkP59mBXPIajfwsrYL6AaLeOghwIspCOWJghUhagPSdJzbrw&usqp=CAU",
  "https://upload.wikimedia.org/wikipedia/en/7/75/Aditya_Birla_Group_Logo.svg",
  "https://companieslogo.com/img/orig/NCC.NS-f5845ee7.png?t=1720244493",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/330px-Tata_logo.svg.png",
  "https://blog.stockedge.com/wp-content/uploads/2020/12/hul1.png",
  "https://ibgnews.com/wp-content/uploads/2016/08/BARC_logo.png",
  "https://upload.wikimedia.org/wikipedia/en/f/ff/Andhra_Pradesh_Power_Generation_Company_Limited.jpg",
  "https://upload.wikimedia.org/wikipedia/en/b/ba/Dr._Reddy%27s_Laboratories_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/09/Laurus_Labs_Logo.png",
  "https://images.seeklogo.com/logo-png/38/1/emami-logo-png_seeklogo-387133.png",
  "https://discovertemplate.com/wp-content/uploads/2024/02/Gsk.jpg",
  "https://cdn.worldvectorlogo.com/logos/bharat-electronics-logo.svg",
  "https://www.tefskoatings.com/images/thermax.png",
  "https://upload.wikimedia.org/wikipedia/commons/9/97/Godrej_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/en/d/dc/Saint-Gobain_logo.svg",
  "https://upload.wikimedia.org/wikipedia/en/3/30/Divi%27s_Laboratories_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/en/d/dd/Aurobindo_Pharma_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/9/92/Granules_India_logo.JPG",
  "https://cdn.neowin.com/news/images/uploaded/2024/11/1731343814_msn_logo_story.jpg",
  "https://images.seeklogo.com/logo-png/15/1/wrigley-logo-png_seeklogo-154057.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmfr1VlL7FHGB8bO1KjzylxNt7OIMCCIjclw&s",
  "https://mma.prnewswire.com/media/1167815/Hetero_Logo.jpg?p=facebook",
  "https://vijayasri.com/images/logo2.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8herq8RsShXjaz9b5hSn43ZQmGTONeUPdAg&s",
  "https://media.licdn.com/dms/image/v2/C4E0BAQHzHh-3M2hlPg/company-logo_200_200/company-logo_200_200/0/1630631130177/shilpa_medicare_ltd_logo?e=2147483647&v=beta&t=eODxTmKs8UzfS6dRhwRtfuI6eNdmZdGFr0kZMFbL28w",
  "https://www.suven.com/images/logo.png",
  "https://cdn.prod.website-files.com/61177bff37db7dd194ff451f/611785fb98bd9a149efa44f2_UB_Logo_sh.png",
  "https://www.pnl.mu/wp-content/uploads/2019/02/virchow-logo-1.png",
  "https://insights.viztaar.com/wp-content/uploads/2024/01/Dhunseri-company-logo.jpg",
  "https://companieslogo.com/img/orig/HBLENGINE.NS-f18ec6b1.png?t=1747062040",
  "https://upload.wikimedia.org/wikipedia/commons/6/60/Perfetti_Van_Melle_logo.svg",
  "https://www.equitybulls.com/equitybullsadmin/uploads/NILE%20Limited%204.jpg",
  "https://mir-s3-cdn-cf.behance.net/projects/404/3468b7198947619.Y3JvcCw5MDAsNzAzLDAsOTg.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRIYmEo6KmdUtqDlS_6K0-DGmufZLBbak8ww&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9qOIQ8yesGI_DZyVV6DU9bde97N_3QcQoRw&s",
  "https://sssteelsandsheetmart.com/assets/images/logos/logo_15.webp",
  "https://space.bouncewatch.com/images/597079/Nandi-Group-of-Companies-logo.jpg",
  "https://images.squarespace-cdn.com/content/v1/55e45319e4b0fe8647d43b01/1504022803144-A8IVI0IBBSSQVSKHT8AC/Monsanto-logo.png",
  "https://bsmedia.business-standard.com/_media/bs/img/article/2015-05/27/full/1432697415-0637.jpg?im=FeatureCrop,size=(826,465)",
  "https://img.etimg.com/thumb/width-420,height-315,imgsize-321497,resizemode-75,msid-78360064/markets/stocks/recos/buy-nmdc-target-price-rs-132-motilal-oswal/nmdc.jpg",
  "https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/NPCIL_Logo.svg/1024px-NPCIL_Logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/e/e4/Adani_2012_logo.png",
  "https://plotkart.com/wp-content/uploads/2025/03/shree_Cement.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Toshiba_logo.svg/1200px-Toshiba_logo.svg.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvgyrr6LM_TTJNakofT9o1a_aWqUCVgPX_kw&s",
  "https://nuziveeduseeds.com/wp-content/uploads/2023/06/cropped-sit-icon.png",
  "https://www.indianchemicalnews.com/public/thumbs/news/2022/10/15235/Balaji_Amines.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbcW-UZIpeBdeVTNZrb6MUs0psb2cHED0Ky9O4dCt_AdZQd6wMwyIS4k4GKA5wtS3BRg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRegffhWwsyOlqb3pEtmRoaqfOYNx5bz0rE_w&s",
  "https://www.pharmacompass.com/image/logo/aktinos.png",
  "https://pharma.industry-report.net/wp-content/uploads/2023/08/formel-labs-pvt-ltd.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStsvVuvMXqLt_drLw2WjFo21r99xpaEGkHFVhUx6f5i9a5AhmiYP4IszD-q5KK2iRNMvI&usqp=CAU",
  "https://pellsyspharma.com/wp-content/uploads/2024/11/logo.jpg",
  "https://valensmolecules.com/wp-content/uploads/2016/12/valensmolecules_logo_2x.png",
  "https://storage.googleapis.com/realtyplusmag-news-photo/news-photo/118142.Image-Ramky-Infrastructure-Limited-Ladakh-MediaBrief.jpg",
  "https://medivanthealth.com/wp-content/uploads/2023/10/Medi-Logo-2.png",
  "https://sevenshinepharmaceuticals.lk/wp-content/uploads/2018/02/Seven-Shine-Pharmaceuticals.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt6EKQK-Vs35SXT_YvQMixu3EQ9mEWZNZ035ArQ6pbWSBlhYeGezXtFeUJLtDxzjTnlMQ&usqp=CAU",
  "https://upload.wikimedia.org/wikipedia/en/5/50/Musim_Mas_Logo.png",
  "https://sempurnagroup.com/wp-content/uploads/2021/04/wealthview.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGBB1PCkyIOPJKyhkqbQw4hNOBgNFAfl3ZzQ&s",
  "https://media.licdn.com/dms/image/v2/C510BAQF0fdLJUCaWMw/company-logo_200_200/company-logo_200_200/0/1630595121190?e=2147483647&v=beta&t=Q664nT05oHuNpD2waUEI3o-PSkoZMW7C9rEV6O3cvT8"

];

export default function OurClientsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-6">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-4">
        Our Clients
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        We’re proud to have partnered with industry leaders and organizations
        across diverse sectors. Here are some of the clients who trust our
        expertise.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 place-items-center">
        {clientLogos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-white shadow-md rounded-2xl p-4 w-36 h-24 hover:shadow-xl transition duration-300"
          >
            <img
              src={logo}
              alt={`Client ${index + 1}`}
              className="max-h-16 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
